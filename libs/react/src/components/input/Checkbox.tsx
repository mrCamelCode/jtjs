import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
  useId,
} from 'react';
import { buildClassName, formatClassName } from '../../util/util-functions';
import Label, { LabelProps } from './Label';

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
  labelProps?: LabelProps;
  containerProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
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
  containerProps,
  labelProps,
  ...otherProps
}: CheckboxProps) => {
  let randomId = `${useId()}-jtjs-checkbox`;

  return (
    <span {...containerProps}>
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
      <Label
        className={buildClassName(labelProps?.className, 'jtjs-checkbox-label')}
        {...labelProps}
        htmlFor={id ?? randomId}
      >
        {children}
      </Label>
    </span>
  );
};

export default Checkbox;
