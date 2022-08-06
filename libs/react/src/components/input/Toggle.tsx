import React, { HTMLProps, ReactNode, useId } from 'react';
import { formatClassName } from '../../util/util-functions';
import Label from './Label';

export interface ToggleProps
  extends Omit<HTMLProps<HTMLSpanElement>, 'onChange'> {
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
   * The children of the toggle, which will be used as the label.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Whether the toggle is disabled.
   */
  disabled?: boolean;
}

/**
 * A toggle that can be clicked on to change whether it's on.
 *
 * This is a controlled component.
 */
export const Toggle = ({
  className,
  isOn,
  onChange,
  disabled,
  id,
  children,
  ...otherProps
}: ToggleProps) => {
  const onText = isOn ? 'on' : 'off';

  const randomId = `${useId()}-jtjs-toggle`;

  return (
    <>
      {children && (
        <Label
          disabled={disabled}
          className="jtjs-toggle-label"
          htmlFor={id ?? randomId}
          onClick={(event) => {
            if (!disabled) {
              onChange(!isOn, event);
            }
          }}
        >
          {children}
        </Label>
      )}

      <span
        data-testid="toggle"
        role="switch"
        aria-label={`toggle-${onText}`}
        className={formatClassName(
          `jtjs-toggle jtjs-toggle-${onText}`,
          className
        )}
        id={id ?? randomId}
        onClick={(event) => {
          if (!disabled) {
            onChange(!isOn, event);
          }
        }}
        // Allows the user to navigate to the toggle with the keyboard and press
        // space to interact with it.
        // Note: You can't focus normal inputs when they're disabled
        tabIndex={disabled ? -1 : 0}
        onKeyUp={(event) => {
          if (event.key === ' ' && !disabled) {
            onChange(!isOn, event);
          }
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
              position: 'absolute',
            }}
          />
        )}
      </span>
    </>
  );
};

export default Toggle;
