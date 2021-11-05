import React, { HTMLProps } from 'react';
import { kebabCase } from 'lodash';
import { useTheme } from '../../hooks/use-theme.hook';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';
import Radio from './Radio';

export interface RadioGroupProps
  extends Omit<HTMLProps<HTMLFieldSetElement>, 'onChange'>,
    ThemedProps {
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
 * Allows you to specify a group of radio inputs. Supports a theme that will be passed
 * down to each radio button and label in the group.
 */
export const RadioGroup = ({
  name,
  options,
  selectedOption,
  onChange,
  className,
  theme: themeProp,
  disabled,
  children,
  style,
  ...otherProps
}: RadioGroupProps) => {
  const theme = themeProp ?? useTheme()[0];

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
      style={{
        backgroundColor: theme?.background,
        borderColor: theme?.outline,
        ...style,
      }}
      {...otherProps}
    >
      <legend
        style={{
          color: theme?.text,
        }}
      >
        {children}
      </legend>

      {options.map((option) => {
        const id = optionIdMap[option];

        return (
          <Radio
            theme={theme}
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
