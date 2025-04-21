import {
  Comment,
  CommentTag,
  DeclarationReflection,
  ParameterReflection,
  ReflectionKind,
  type ProjectReflection,
  type SomeType,
} from 'typedoc';
import { DocumentationFileType, type MdPageModel } from './md-page.model';
import type { IProcessor } from './processor.interface';

interface ParsingOptions {
  /**
   * The base level of importance the headers are at. This will control what
   * kind of header is used during parsing on functions that support options.
   */
  baseHeadingLevel: number;
}

export class TypedocToMdPageProcessor implements IProcessor<ProjectReflection, MdPageModel[]> {
  async produce(
    input: ProjectReflection,
    shouldIgnoreSubject?: (input: ProjectReflection, subject: DeclarationReflection) => boolean
  ): Promise<MdPageModel[]> {
    return (
      input.children
        ?.filter((subject) => !shouldIgnoreSubject || !shouldIgnoreSubject(input, subject))
        .map((subject) => {
          return {
            fileName: subject.name,
            documentationType: this.#getDocumentationType(subject),
            title: this.#parseTitle(input, subject),
            description: this.#parseDeclaration(input, subject),
            frontmatter: {
              title: subject.name,
              description: `Generated API documentation for ${subject.name}.`,
            },
          };
        }) ?? []
    );
  }

  #parseTitle(input: ProjectReflection, subject: DeclarationReflection): string {
    const inheritanceString = this.#parseInheritance(input, subject);
    const implementationsString = this.#parseImplementations(input, subject);
    const extensionsString = this.#parseExtensions(input, subject);

    return [
      [
        `\`${this.#getDeclarationKindString(subject)}\``,
        subject.sources ? `[Source Code](${subject.sources[0].url})` : '',
      ]
        .filter(Boolean)
        .join(' | '),
      implementationsString ? ['`implements`', implementationsString].join(' ') : '',
      extensionsString ? ['`extends`', extensionsString].join(' ') : '',
      inheritanceString
        ? `${this.#isReactComponent(subject) ? 'Props ' : ''}Inheritance Hierarchy: ${inheritanceString}`
        : '',
      this.#isRegularFunction(subject)
        ? ['---\n\n', this.#parseFunction(input, subject), '\n\n---'].filter(Boolean).join('')
        : '',
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  #parseDeclaration(
    input: ProjectReflection,
    subject: DeclarationReflection,
    options: ParsingOptions = { baseHeadingLevel: 2 }
  ): string {
    return [this.#parseDescription(input, subject, options), this.#parseGroups(input, subject, options)]
      .filter(Boolean)
      .join('\n\n');
  }

  #parseDescription(input: ProjectReflection, subject: DeclarationReflection, options: ParsingOptions): string {
    const commentObj = subject.comment ?? subject.signatures?.[0]?.comment;

    return commentObj ? this.#parseComment(input, commentObj, options) : '';
  }

  #parseGroups(input: ProjectReflection, subject: DeclarationReflection, options: ParsingOptions): string {
    const groups: string[] = [];
    const paramGroup: string[] = [];

    if (subject.groups && !this.#isReactComponent(subject)) {
      groups.push(
        ...subject.groups.map((group) => {
          const ownGroupChildDeclarations = group.children.filter(
            (groupChild) => groupChild.variant === 'declaration' && !groupChild.flags.isExternal
          ) as DeclarationReflection[];
          const sortedOwnGroupChildDeclarations = [...ownGroupChildDeclarations].sort((a, b) => {
            if (a.flags.isStatic) {
              return -1;
            } else if (b.flags.isStatic) {
              return 1;
            } else if (a.flags.isOptional) {
              return 1;
            } else if (b.flags.isOptional) {
              return -1;
            } else if (a.flags.isProtected) {
              return 1;
            } else if (b.flags.isProtected) {
              return -1;
            } else {
              return a.name.localeCompare(b.name);
            }
          });

          return [
            `${'#'.repeat(options.baseHeadingLevel + 1)} ${group.title}`,
            sortedOwnGroupChildDeclarations
              .map((dec) => {
                return [
                  [
                    `${'#'.repeat(options.baseHeadingLevel + 2)}`,
                    this.#isRegularFunction(dec)
                      ? this.#parseFunction(input, dec)
                      : this.#parseParamLikeNameAndType(input, dec),
                  ]
                    .filter(Boolean)
                    .join(' '),
                  this.#parseDeclaration(input, dec, {
                    ...options,
                    baseHeadingLevel: options.baseHeadingLevel + 2,
                  }),
                ]
                  .filter(Boolean)
                  .join('\n\n');
              })
              .flat(Infinity)
              .filter(Boolean)
              .join('\n\n---\n\n'),
          ]
            .filter(Boolean)
            .join('\n\n');
        })
      );
    } else {
      switch (subject.kind) {
        case ReflectionKind.Function:
          if (this.#isReactComponent(subject)) {
            const propsDeclaration = this.#getCorrespondingPropsForReactComponent(input, subject);

            if (propsDeclaration) {
              groups.push(this.#parseDeclaration(input, propsDeclaration));
            }
          } else {
            const params = subject.signatures?.[0]?.parameters;

            paramGroup.push(
              params?.map((param) => this.#parseParamForDescription(input, param, options)).join('\n\n---\n\n') ?? ''
            );
          }
          break;
        case ReflectionKind.TypeAlias:
          // TODO: This needs to be improved. For a function it currently just says Function, which isn't helpful.
          groups.push(this.#parseParamLikeNameAndType(input, subject));
          break;
      }

      groups.push(paramGroup.length > 0 ? ['### Parameters', ...paramGroup].join('\n\n') : '');
    }

    return groups.filter(Boolean).join('\n\n');
  }

  #parseParamLikeNameAndType(
    input: ProjectReflection,
    param: DeclarationReflection | ParameterReflection,
    paramTypeEnclosureChar = '_'
  ): string {
    const typ = this.#extractType(param);

    return [
      [
        param.flags.isProtected ? '`protected` ' : '',
        param.flags.isStatic ? '`static` ' : '',
        param.flags.isRest ? '...' : '',
        param.name,
        param.flags.isOptional ? '?' : '',
      ]
        .filter(Boolean)
        .join(''),
      typ ? `${paramTypeEnclosureChar}${this.#parseType(typ)}${paramTypeEnclosureChar}` : '',
    ]
      .filter(Boolean)
      .join(': ');
  }

  #parseParamForDescription(input: ProjectReflection, param: ParameterReflection, options: ParsingOptions): string {
    return [
      `${'#'.repeat(options.baseHeadingLevel + 2)} ${this.#parseParamLikeNameAndType(input, param)}`,
      param.comment ? this.#parseComment(input, param.comment, options) : '',
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  #parseComment(input: ProjectReflection, comment: Comment, options: ParsingOptions): string {
    return [
      comment.summary.map((summaryItem) => summaryItem.text).join(''),
      comment.blockTags ? this.#parseBlockTags(comment.blockTags, options) : '',
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  #parseBlockTags(blockTags: CommentTag[], options: ParsingOptions): string {
    return blockTags
      .map((blockTag) =>
        [
          `${'#'.repeat(options.baseHeadingLevel + 1)} ${blockTag.tag
            .replaceAll('@', '')
            .split('')
            .map((tagChar, index) => (index === 0 ? tagChar.toUpperCase() : tagChar))
            .join('')}`,
          blockTag.name,
          `${blockTag.content.map((c) => c.text).join('')}`,
        ]
          .filter(Boolean)
          .join('\n')
      )
      .join('\n\n');
  }

  #parseType(type: SomeType): string {
    return type.toString();
  }

  #parseImplementations(input: ProjectReflection, subject: DeclarationReflection): string {
    const actionableSubject = this.#extractActionableSubject(input, subject);

    return actionableSubject
      ? [...(actionableSubject.implementedTypes?.map(this.#parseType) ?? [])].filter(Boolean).join(', ')
      : '';
  }

  #parseExtensions(input: ProjectReflection, subject: DeclarationReflection): string {
    const actionableSubject = this.#extractActionableSubject(input, subject);

    return actionableSubject
      ? [...(actionableSubject.extendedTypes?.map(this.#parseType) ?? [])].filter(Boolean).join(', ')
      : '';
  }

  /**
   * @param input
   * @param subject
   * @returns A string that represents the whole inheritance hierarchy of the subject. External
   * types that are inherited aren't traversed.
   */
  #parseInheritance(input: ProjectReflection, subject: DeclarationReflection): string {
    const actionableSubject = this.#extractActionableSubject(input, subject);

    return actionableSubject
      ? (actionableSubject.extendedTypes
          ?.map((typ) => {
            const parent = 'name' in typ ? input.children?.find((rootChild) => rootChild.name === typ.name) : undefined;

            return [parent ? this.#parseInheritance(input, parent) : '', `_${this.#parseType(typ)}_`]
              .filter(Boolean)
              .join(' -> ');
          })
          .filter(Boolean)
          .join(' & ') ?? '')
      : '';
  }

  #parseFunction(input: ProjectReflection, subject: DeclarationReflection, typeEnclosureChar = '_'): string {
    const typ = this.#extractType(subject);
    const isConstructor = subject.kind === ReflectionKind.Constructor;

    return this.#isRegularFunction(subject)
      ? [
          isConstructor ? (subject.signatures?.[0].name ?? subject.name) : subject.name,
          '(',
          subject.signatures?.[0]?.parameters?.map((param) => this.#parseParamLikeNameAndType(input, param)).join(', '),
          ')',
          typ ? `: ${typeEnclosureChar}${this.#parseType(typ)}${typeEnclosureChar}` : '',
        ]
          .filter(Boolean)
          .join('')
      : '';
  }

  /**
   * Takes React components into consideration to provide the subject that
   * has the type information for the declaration.
   *
   * @param input
   * @param subject
   * @returns The React component's corresponding Props declaration if `subject`
   * is a React component. Otherwise, the unchanged `subject`.
   */
  #extractActionableSubject(
    input: ProjectReflection,
    subject: DeclarationReflection
  ): DeclarationReflection | undefined {
    return this.#isReactComponent(subject) ? this.#getCorrespondingPropsForReactComponent(input, subject) : subject;
  }

  #extractType(subject: DeclarationReflection | ParameterReflection): SomeType | undefined {
    switch (subject.kind) {
      case ReflectionKind.Accessor: {
        const dec = subject as DeclarationReflection;

        return dec.getSignature?.type ?? dec.setSignature?.parameters?.[0]?.type;
      }
      case ReflectionKind.Function:
      case ReflectionKind.Method: {
        const dec = subject as DeclarationReflection;

        return dec.signatures?.[0].type;
      }
      default:
        return subject.type;
    }
  }

  /**
   * @returns Whether the subject is a regular function/method (i.e. not a React component function).
   */
  #isRegularFunction(subject: DeclarationReflection): boolean {
    return (
      (subject.kind === ReflectionKind.Function ||
        subject.kind === ReflectionKind.Method ||
        subject.kind === ReflectionKind.Constructor) &&
      !this.#isReactComponent(subject)
    );
  }

  #isReactComponent(subject: DeclarationReflection): boolean {
    // Is a function and the first character of the function name is a capital letter.
    // Could obviously be better, but works for my situation atm. Can make more robust if needed.
    return subject.kind === ReflectionKind.Function && /[A-Z]/.test(subject.name[0]);
  }

  #isReactHook(subject: DeclarationReflection): boolean {
    return subject.kind === ReflectionKind.Function && subject.name.startsWith('use');
  }

  #getDeclarationKindString(subject: DeclarationReflection): string {
    if (this.#isReactComponent(subject)) {
      return 'Component';
    } else if (this.#isReactHook(subject)) {
      return 'Hook';
    }

    return ReflectionKind.singularString(subject.kind);
  }

  #getCorrespondingPropsForReactComponent(
    input: ProjectReflection,
    subject: DeclarationReflection
  ): DeclarationReflection | undefined {
    return this.#isReactComponent(subject)
      ? input.children?.find((child) => child.name === `${subject.name}Props`)
      : undefined;
  }

  #getDocumentationType(subject: DeclarationReflection): DocumentationFileType {
    switch (subject.kind) {
      case ReflectionKind.Function:
        if (this.#isReactComponent(subject)) {
          return DocumentationFileType.ReactComponent;
        } else if (this.#isReactHook(subject)) {
          return DocumentationFileType.ReactHook;
        } else {
          return DocumentationFileType.Function;
        }
      case ReflectionKind.Class:
        return DocumentationFileType.Class;
      case ReflectionKind.Interface:
        return DocumentationFileType.Interface;
      case ReflectionKind.Enum:
        return DocumentationFileType.Enum;
      case ReflectionKind.TypeAlias:
        return DocumentationFileType.TypeAlias;
      case ReflectionKind.Variable:
        return DocumentationFileType.Variable;
      default:
        return DocumentationFileType.Other;
    }
  }
}
