import {
  ChangeEvent,
  forwardRef,
  HTMLProps,
  useEffect,
  useId,
  useState,
} from 'react';
import { buildClassName } from '../../util/util-functions';
import Input, { InputProps } from './Input';
import Label from './Label';

export interface LabelledInputProps extends InputProps {
  label?: string;
  containerProps?: HTMLProps<HTMLDivElement>;
  labelProps?: HTMLProps<HTMLLabelElement>;
}

export const LabelledInput = forwardRef<HTMLInputElement, LabelledInputProps>(
  (
    {
      label,
      className,
      value,
      onChange,
      id,
      containerProps,
      labelProps,
      ...otherProps
    }: LabelledInputProps,
    ref
  ) => {
    const [hasValue, setHasValue] = useState(false);

    const randomId = `${useId()}-jtjs-labelled-input`;

    useEffect(() => {
      setHasValue(!!value);
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!event.target.value);
    };

    return (
      <div
        className={buildClassName(
          className,
          'jtjs-labelled-input',
          hasValue ? 'has-value' : ''
        )}
        {...containerProps}
      >
        <Label {...labelProps} htmlFor={id ?? randomId}>
          {label}
        </Label>
        <Input
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
  }
);

export default LabelledInput;
