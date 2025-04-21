import { existsSync } from 'fs';
import { mkdir, rm, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { DocumentationFileType, type MdPageModel } from './md-page.model';

export class MdDocumentationWriter {
  async outputToMd(pages: MdPageModel[], outDir: string): Promise<void> {
    const fullOutPath = resolve(outDir);

    if (!fullOutPath.includes('docs')) {
      throw new Error(
        `The destination the MdWriter was asked to write to (${fullOutPath}) is not under the docs folder. To protect against accidental deletions of folders, the writer will do nothing.`
      );
    }

    if (!existsSync(fullOutPath)) {
      await mkdir(fullOutPath, { recursive: true });
    } else {
      await rm(fullOutPath, { recursive: true });
      await mkdir(fullOutPath, { recursive: true });
    }

    for (let page of pages) {
      const dir = join(fullOutPath, ...this.#getPathSegmentsFromDocumentationType(page.documentationType));
      const filePath = join(dir, `${page.fileName}.md`);

      if (!existsSync(dir)) {
        await mkdir(dir);
      }

      console.log(`Writing ${filePath}`);

      await writeFile(
        filePath,
        [
          page.frontmatter
            ? [
                '---',
                Object.entries(page.frontmatter ?? {})
                  .map(([key, value]) => `${key}: ${value}`)
                  .join('\n'),
                '---',
              ].join('\n')
            : '',
          page.title,
          page.description,
        ]
          .filter(Boolean)
          .join('\n\n'),
        {
          encoding: 'utf-8',
        }
      );
    }
  }

  #getPathSegmentsFromDocumentationType(documentationType: DocumentationFileType): string[] {
    switch (documentationType) {
      case DocumentationFileType.Class:
        return ['Classes'];
      case DocumentationFileType.Interface:
        return ['Interfaces'];
      case DocumentationFileType.Enum:
        return ['Enums'];
      case DocumentationFileType.Function:
        return ['Functions'];
      case DocumentationFileType.ReactComponent:
        return ['Components'];
      case DocumentationFileType.ReactHook:
        return ['Hooks'];
      case DocumentationFileType.TypeAlias:
        return ['Type Aliases'];
      case DocumentationFileType.Variable:
        return ['Variables'];
      case DocumentationFileType.Other:
        return [];
    }
  }
}
