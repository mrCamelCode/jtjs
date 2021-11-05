import React, { HTMLProps, ReactNode } from 'react';
import { v4 as uuid } from 'uuid';
import { useTheme } from '../../hooks/use-theme.hook';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange'>,
    ThemedProps {
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
 * Wraps the base checkbox input component, with support for theme.
 *
 * This is a controlled component.
 */
export const Checkbox = ({
  theme: themeProp,
  checked,
  style,
  className,
  onChange,
  disabled,
  children,
  id,
  ...otherProps
}: CheckboxProps) => {
  const theme = themeProp ?? useTheme()[0];

  let randomId = '';
  if (!id) {
    randomId = `jtjs-checkbox-${uuid()}`;
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
        style={{
          borderColor: theme?.outline,
          backgroundColor: disabled
            ? theme?.disabled
            : checked
            ? theme?.button
            : theme?.background,
          ...style,
        }}
        disabled={disabled}
        aria-disabled={disabled}
        {...otherProps}
      />
      <Label
        theme={theme}
        htmlFor={id ?? randomId}
        className="jtjs-checkbox-label"
      >
        {children}
      </Label>
    </>
  );
};

export default Checkbox;
