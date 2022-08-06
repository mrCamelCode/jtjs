import React, { forwardRef, PropsWithoutRef } from 'react';
import { formatClassName } from '../../util/util-functions';

export interface TextInputProps
  extends PropsWithoutRef<JSX.IntrinsicElements['textarea']> {
  /**
   * Handler for when the user attempts to change the input.
   *
   * @param maskedText - The input text after going through the filtering of all the
   * provided `masks`. Note that this text will also include the removal of newlines
   * that's performed when the `multiline` prop is `false`.
   * @param rawText - The raw input text with no filtering. This filter removal also includes
   * ignoring the removal of newlines that's performed when the `multiline` prop is `false`.
   * @param event - The original simulated event.
   */
  onChangeText?: (
    maskedText: string,
    rawText: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  /**
   * Whether the input can have multiple lines.
   */
  multiline?: boolean;
  /**
   * Mask to apply to the input. The mask will be used for character acceptance. For example,
   * if you only want to allow numbers to be entered into the input, you could provide a mask of
   * @example /\d/
   * The mask will be applied on a per-character basis.
   */
  mask?: RegExp;
}

/**
 * Receives user input in the form of text. Allows masking the input to limit accepted characters.
 *
 * This is a controlled component.
 */
export const TextInput = forwardRef<HTMLTextAreaElement, TextInputProps>(
  (
    {
      className,
      style,
      multiline,
      value,
      rows,
      mask,
      disabled,
      onChange,
      onChangeText,
      ...otherProps
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChangeText) {
        let text = event.target.value;

        if (!multiline) {
          text = text.replace(/[\r\n]/gm, '');
        }

        let maskedText = text;
        if (mask) {
          maskedText = '';
          for (let i = 0; i < text.length; i++) {
            const char = text[i];

            if (mask.test(char)) {
              maskedText += char;
            }
          }
        }

        onChangeText(maskedText, event.target.value, event);
      }
    };

    return (
      <textarea
        ref={ref}
        data-testid="text-input"
        className={formatClassName('jtjs-text-input', className)}
        rows={multiline ? rows ?? 5 : 1}
        style={{
          ...(multiline
            ? {}
            : {
                resize: 'none',
                whiteSpace: 'nowrap',
                overflowX: 'auto',
              }),
          ...style,
        }}
        value={value}
        onChange={(event) => {
          handleChange(event);
          onChange?.(event);
        }}
        disabled={disabled}
        aria-disabled={disabled}
        {...otherProps}
      />
    );
  }
);

export default TextInput;
