export enum DocumentationFileType {
  Class,
  Interface,
  ReactComponent,
  ReactHook,
  Function,
  Enum,
  TypeAlias,
  Variable,
  Other,
}

/**
 * Represents a page that's intended to be output to MD. The strings
 * in the model may contain MD.
 */
export interface MdPageModel {
  fileName: string;
  documentationType: DocumentationFileType;
  title: string;
  description: string;
  frontmatter?: MD['frontmatter'];
}
