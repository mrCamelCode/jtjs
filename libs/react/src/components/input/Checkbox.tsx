import { uniqueId } from 'lodash';
import React, { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  /**
   * Handler for when the user attempts to change the value of the checkbox.
   *
   * @param checked - What the user wants the current checked value to be.
   * @param event - The original simulated event.
   */
  onChange: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The children of the checkbox, which will be used as its label.
   */
  children: ReactNode | ReactNode[];
}

/**
 * Wraps the base checkbox input component.
 *
 * This is a controlled component.
 */
export const Checkbox = ({
  checked,
  className,
  onChange,
  disabled,
  children,
  id,
  ...otherProps
}: CheckboxProps) => {
  let randomId = '';
  if (!id) {
    randomId = uniqueId('jtjs-checkbox-');
  }

  return (
    <>
      <input
        data-testid="checkbox"
        className={formatClassName('jtjs-checkbox', className)}
        id={id ?? randomId}
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          onChange(event.target.checked, event);
        }}
        disabled={disabled}
        aria-disabled={disabled}
        {...otherProps}
      />
      <Label htmlFor={id ?? randomId} className="jtjs-checkbox-label">
        {children}
      </Label>
    </>
  );
};

export default Checkbox;
