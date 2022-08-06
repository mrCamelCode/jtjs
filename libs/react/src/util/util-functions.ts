export function formatClassName(className?: string, classNameProp?: string) {
  const trimmedClassName = className?.trim() ?? '';
  const trimmedClassNameProp = classNameProp?.trim() ?? '';

  return `${trimmedClassName}${
    trimmedClassNameProp ? ` ${trimmedClassNameProp}` : ''
  }`;
}

/**
 * @param classNameProp - The className prop received by the component.
 * @param classes - The classes you want to apply to the component.
 *
 * @returns Properly formatted and built class name without trailing spaces.
 */
export function buildClassName(
  classNameProp?: string,
  ...classes: string[]
): string {
  const trimmedClassName = classNameProp?.trim() ?? '';
  const trimmedClasses = classes?.map((c) => c.trim()).filter((c) => !!c) ?? [];

  return `${trimmedClassName}${
    trimmedClasses.length > 0 ? ` ${trimmedClasses.join(' ')}` : ''
  }`;
}
