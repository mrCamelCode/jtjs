import React, { HTMLProps } from 'react';
import { useTheme } from '../../hooks/use-theme.hook';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';

export interface ToggleProps
  extends Omit<HTMLProps<HTMLSpanElement>, 'onChange'>,
    ThemedProps {
  /**
   * Whether the toggle is currently on.
   */
  isOn: boolean;
  /**
   * Handler for when the user tries to change whether the toggle is on.
   *
   * @param isOn - The state the user is trying to put the toggle in.
   * @param event - The original simulated event. If the user interaced with the
   * toggle via a click, this will be a MouseEvent. If the user interacted with
   * the toggle via the keyboard, this will be a KeyboardEvent.
   */
  onChange: (
    isOn: boolean,
    event:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>
  ) => void;
  /**
   * Whether the toggle is disabled.
   */
  disabled?: boolean;
}

/**
 * A toggle that can be clicked on to change whether it's on, with theme support.
 *
 * This is a controlled component.
 */
export const Toggle = ({
  className,
  isOn,
  style,
  onChange,
  theme: themeProp,
  disabled,
  ...otherProps
}: ToggleProps) => {
  const theme = themeProp ?? useTheme()[0];

  return (
    <span
      data-testid="toggle"
      role="switch"
      aria-label={`toggle-${isOn ? 'on' : 'off'}`}
      className={formatClassName(
        `jtjs-toggle jtjs-toggle-${isOn ? 'on' : 'off'}`,
        className
      )}
      onClick={(event) => {
        if (!disabled) {
          onChange(!isOn, event);
        }
      }}
      // Allows the user to navigate to the toggle with the keyboard and press
      // space to interact with it.
      tabIndex={0}
      onKeyUp={(event) => {
        if (event.key === ' ' && !disabled) {
          onChange(!isOn, event);
        }
      }}
      style={{
        backgroundColor: isOn ? theme?.button : theme?.disabled,
        borderColor: theme?.outline,
        ...style,
      }}
      {...{
        disabled,
        'aria-disabled': disabled,
      }}
      {...otherProps}
    >
      {!disabled && (
        <span
          className="jtjs-toggle-knob"
          style={{
            backgroundColor: theme?.background,
            borderColor: theme?.outline,
            position: 'absolute',
          }}
        />
      )}
    </span>
  );
};

export default Toggle;
