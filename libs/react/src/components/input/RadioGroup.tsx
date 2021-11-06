import React, { HTMLProps } from 'react';
import { kebabCase } from 'lodash';
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
  options: string[];
  /**
   * The currently selected option.
   */
  selectedOption: string;
  /**
   * Handler for when the user attempts to change their selection in the radio group.
   *
   * @param option - The option that was selected.
   * @param event - The original simulated event.
   */
  onChange: (
    option: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

/**
 * Allows you to specify a group of radio inputs.
 */
export const RadioGroup = ({
  name,
  options,
  selectedOption,
  onChange,
  className,
  disabled,
  children,
  ...otherProps
}: RadioGroupProps) => {
  const optionIdMap: Record<string, string> = {};
  options.forEach((option) => {
    optionIdMap[option] = kebabCase(option);
  });

  const handleChange = (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (checked) {
      const radio = event.target;
      const chosenOption = Object.keys(optionIdMap).find(
        (option) => optionIdMap[option] === radio.id
      );

      onChange(chosenOption ?? 'chosen option not in option list', event);
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
        const id = optionIdMap[option];

        return (
          <Radio
            onChange={handleChange}
            id={id}
            name={name}
            checked={option === selectedOption}
            disabled={disabled}
            key={id}
          >
            {option}
          </Radio>
        );
      })}
    </fieldset>
  );
};

export default RadioGroup;
