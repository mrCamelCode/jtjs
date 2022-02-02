import React, { HTMLProps } from 'react';
import { formatClassName } from '../../util/util-functions';
import Radio from './Radio';

export interface RadioGroupProps
  extends Omit<HTMLProps<HTMLFieldSetElement>, 'onChange'> {
  /**
   * The name of the radio group. MUST be unique among radio groups on the page.
   */
  name: string;
  /**
   * The options for the radio group.
   */
  options: { label: string; value: string }[];
  /**
   * The currently selected option's value.
   */
  value: string;
  /**
   * Handler for when the user attempts to change their selection in the radio group.
   *
   * @param optionValue - The value of the option that was selected.
   * @param event - The original simulated event.
   */
  onChange: (
    optionValue: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

/**
 * Allows you to specify a group of radio inputs.
 */
export const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  className,
  disabled,
  children,
  ...otherProps
}: RadioGroupProps) => {
  const handleChange = (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (checked) {
      const radio = event.target;

      onChange(radio.value ?? 'chosen option not in option list', event);
    }
  };

  return (
    <fieldset
      role="radiogroup"
      className={formatClassName('jtjs-radio-group', className)}
      disabled={disabled}
      {...otherProps}
    >
      <legend>{children}</legend>

      {options.map((option) => {
        const id = option.value;

        return (
          <Radio
            onChange={handleChange}
            id={id}
            name={name}
            checked={option.value === value}
            value={option.value}
            disabled={disabled}
            key={id}
          >
            {option.label}
          </Radio>
        );
      })}
    </fieldset>
  );
};

export default RadioGroup;
