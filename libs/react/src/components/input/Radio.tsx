import React, { HTMLProps, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';
import { useTheme } from '../../hooks/use-theme.hook';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface RadioProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange'>,
    ThemedProps {
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
 * A wrapper for the base radio input component, with theme support.
 *
 * This is a controlled component.
 */
export const Radio = ({
  checked,
  onChange,
  className,
  style,
  theme: themeProp,
  name,
  value,
  disabled,
  id,
  children,
  ...otherProps
}: RadioProps) => {
  const theme = themeProp ?? useTheme()[0];

  let randomId = '';
  if (!id) {
    randomId = `jtjs-radio-${uuid()}`;
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
        style={{
          backgroundColor: disabled ? theme?.disabled : theme?.background,
          borderColor: theme?.outline,
          ...style,
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
