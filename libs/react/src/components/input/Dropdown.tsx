import { uniqueId } from 'lodash';
import React, { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface DropdownProps
  extends Omit<HTMLProps<HTMLSelectElement>, 'onChange' | 'defaultValue'> {
  /**
   * The options to show in the dropdown.
   */
  options: { label: string; value: string }[];
  /**
   * Handler for when the user attempts to change their selection in the dropdown.
   *
   * @param optionValue - The value of the option that was selected from the dropdown.
   * @param event - The original simulated event.
   */
  onChange: (
    optionValue: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  value: string;
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
 * A wrapper for the native select component. Provides the ability to define the options as a
 * prop. When onChange is invoked, you'll be given the option that was selected instead of the event.
 *
 * This component is controlled.
 */
export const Dropdown = ({
  options,
  onChange,
  value,
  allowEmpty,
  allowEmptyAfterSelection,
  className,
  disabled,
  children,
  id,
  ...otherProps
}: DropdownProps) => {
  let randomId = '';
  if (!id) {
    randomId = uniqueId('jtjs-dropdown-');
  }

  /**
   * How empty appearing works:
   *  - Empty only appears if `allowEmpty` is truthy.
   *  - If we're allowing empty after selection, it can always appear.
   *  - If we're NOT allowing empty after selection and we have a value, then empty can no longer appear
   *  - If we're NOT allowing empty after selection and we DON'T have a value, then empty can still appear.
   */
  const emptyCanAppear =
    allowEmpty && (allowEmptyAfterSelection !== false || !value);

  return (
    <>
      <Label className="jtjs-dropdown-label" htmlFor={id ?? randomId}>
        {children}
      </Label>
      <select
        data-testid="dropdown"
        value={value}
        className={formatClassName('jtjs-dropdown', className)}
        id={id ?? randomId}
        onChange={(event) => {
          const select = event.target;

          onChange(select.value, event);
        }}
        disabled={disabled}
        aria-disabled={disabled}
        {...otherProps}
      >
        {emptyCanAppear && (
          <option data-testid="dropdown-option" value=""></option>
        )}
        {options.map((optionData) => {
          return (
            <option
              data-testid="dropdown-option"
              key={optionData.value}
              value={optionData.value}
            >
              {optionData.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
