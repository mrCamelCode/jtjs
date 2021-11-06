import { kebabCase } from 'lodash';
import { v4 as uuid } from 'uuid';
import React, { HTMLProps, ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme.hook';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface DropdownProps
  extends Omit<HTMLProps<HTMLSelectElement>, 'onChange' | 'defaultValue'>,
    ThemedProps {
  /**
   * The options to show in the dropdown.
   */
  options: string[];
  /**
   * Handler for when the user attempts to change their selection in the dropdown.
   *
   * @param option - The {@link DropdownOption} that was selected from the dropdown.
   * @param event - The original simulated event.
   */
  onChange: (
    option: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  /**
   * The currently selected option.
   */
  selectedOption: string;
  /**
   * The children of the dropdown, which will be used as its label.
   */
  children: ReactNode | ReactNode[];
  /**
   * Whether you allow an empty value as an option.
   */
  allowEmpty?: boolean;
  /**
   * Whether the empty option will still be available after a value has been selected in
   * the dropdown. Note that if the dropdown starts with a non-empty value, this will count
   * as there having been a selection.
   *
   * This prop has no effect if `allowEmpty` is falsy.
   */
  allowEmptyAfterSelection?: boolean;
}

/**
 * A wrapper for the native select component. Provides theme support as well as the ability to define the options as a
 * prop. When onChange is invoked, you'll be given the option that was selected instead of the event.
 *
 * This component is controlled.
 */
export const Dropdown = ({
  options,
  onChange,
  selectedOption,
  allowEmpty,
  allowEmptyAfterSelection,
  className,
  style,
  theme: themeProp,
  disabled,
  children,
  id,
  ...otherProps
}: DropdownProps) => {
  const theme = themeProp ?? useTheme()[0];

  let randomId = '';
  if (!id) {
    randomId = `jtjs-dropdown-${uuid()}`;
  }

  /**
   * How empty appearing works:
   *  - Empty only appears if `allowEmpty` is truthy.
   *  - If we're allowing empty after selection, it can always appear.
   *  - If we're NOT allowing empty after selection and we have a value, then empty can no longer appear
   *  - If we're NOT allowing empty after selection and we DON'T have a value, then empty can still appear.
   */
  const emptyCanAppear =
    allowEmpty && (allowEmptyAfterSelection !== false || !selectedOption);

  const optionValueMap: Record<string, string> = {};
  options.forEach((option) => {
    optionValueMap[option] = kebabCase(option);
  });

  return (
    <>
      <Label
        className="jtjs-dropdown-label"
        htmlFor={id ?? randomId}
        theme={theme}
      >
        {children}
      </Label>
      <select
        data-testid="dropdown"
        value={optionValueMap[selectedOption]}
        className={formatClassName('jtjs-dropdown', className)}
        style={{
          backgroundColor: disabled ? theme?.disabled : theme?.background,
          borderColor: theme?.outline,
          color: theme?.text,
          ...style,
        }}
        id={id ?? randomId}
        onChange={(event) => {
          const select = event.target;

          onChange(select.options[select.selectedIndex].text, event);
        }}
        disabled={disabled}
        aria-disabled={disabled}
        {...otherProps}
      >
        {emptyCanAppear && (
          <option data-testid="dropdown-option" value=""></option>
        )}
        {options.map((option) => {
          const value = optionValueMap[option];

          return (
            <option data-testid="dropdown-option" key={value} value={value}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
