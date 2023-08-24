import { ComponentPropsWithRef, forwardRef } from 'react';
import { buildClassName } from '../../../util';

export interface FormGroupProps extends ComponentPropsWithRef<'fieldset'> {
  /**
   * (Optional, defaults to `false`) Whether the items in the group should be inline.
   * If this is `false`, each item in the group will be on its own line.
   */
  inlineItems?: boolean;
}

/**
 * A light wrapper around a `fieldset`. Used to group related form controls and inputs together.
 */
export const FormGroup = forwardRef<HTMLFieldSetElement, FormGroupProps>(
  ({ className, style, inlineItems = false, ...otherProps }, ref) => {
    return (
      <fieldset
        className={buildClassName(className, 'jtjs-form-group')}
        style={{
          display: 'flex',
          ...(inlineItems
            ? {
                flexDirection: 'row',
                gap: '1rem',
                flexWrap: 'wrap',
              }
            : {
                flexDirection: 'column',
                gap: '0.5rem',
              }),
          ...style,
        }}
        {...otherProps}
        ref={ref}
      />
    );
  }
);
