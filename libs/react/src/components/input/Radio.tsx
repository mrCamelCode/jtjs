import { uniqueId } from 'lodash';
import React, { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface RadioProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  /**
   * Handler for when the user attempts to change the checked value of this radio button.
   */
  onChange: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  /**
   * The children of the radio button, which will be used as its label.
   */
  children: ReactNode | ReactNode[];
}

/**
 * A wrapper for the base radio input component.
 *
 * This is a controlled component.
 */
export const Radio = ({
  checked,
  onChange,
  className,
  name,
  value,
  disabled,
  id,
  children,
  ...otherProps
}: RadioProps) => {
  let randomId = '';
  if (!id) {
    randomId = uniqueId('jtjs-radio-');
  }

  return (
    <>
      <input
        data-testid="radio"
        className={formatClassName('jtjs-radio', className)}
        type="radio"
        checked={checked}
        name={name}
        value={value}
        onChange={(event) => {
          onChange(event.target.checked, event);
        }}
        id={id ?? randomId}
        disabled={disabled}
        aria-disabled={disabled}
        {...otherProps}
      />
      <Label className="jtjs-radio-label" htmlFor={id ?? randomId}>
        {children}
      </Label>
    </>
  );
};

export default Radio;
