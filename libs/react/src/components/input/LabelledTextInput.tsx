import { ChangeEvent, forwardRef, useEffect, useId, useState } from 'react';
import { buildClassName } from '../../util/util-functions';
import Label from './Label';
import TextInput, { TextInputProps } from './TextInput';

export interface LabelledTextInputProps extends TextInputProps {
  label?: string;
}

export const LabelledTextInput = forwardRef<
  HTMLTextAreaElement,
  LabelledTextInputProps
>(({ className, label, id, value, onChange, ...otherProps }, ref) => {
  const [hasValue, setHasValue] = useState(false);

  const randomId = `${useId()}-jtjs-labelled-text-input`;

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(!!event.target.value);
  };

  return (
    <div
      className={buildClassName(
        className,
        'jtjs-labelled-text-input',
        hasValue ? 'has-value' : ''
      )}
    >
      <Label htmlFor={id ?? randomId}>{label}</Label>
      <TextInput
        ref={ref}
        id={id ?? randomId}
        value={value}
        onChange={(event) => {
          handleChange(event);

          onChange?.(event);
        }}
        {...otherProps}
      />
    </div>
  );
});

export default LabelledTextInput;
