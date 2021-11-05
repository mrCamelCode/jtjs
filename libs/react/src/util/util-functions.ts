export function formatClassName(className?: string, classNameProp?: string) {
  const trimmedClassName = className?.trim() ?? '';
  const trimmedClassNameProp = classNameProp?.trim() ?? '';

  return `${trimmedClassName}${
    trimmedClassNameProp ? ` ${trimmedClassNameProp}` : ''
  }`;
}
