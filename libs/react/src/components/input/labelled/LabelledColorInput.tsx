import { forwardRef } from 'react';
import {
  LabelledProps,
  pickLabelledProps,
  withoutLabelledProps,
} from '../../../types';
import { buildClassName } from '../../../util';
import { ColorInput, ColorInputProps } from '../base/ColorInput';
import { BaseLabelledInput } from './BaseLabelledInput';

export interface LabelledColorInputProps
  extends ColorInputProps,
    LabelledProps {}

export const LabelledColorInput = forwardRef<
  HTMLInputElement,
  LabelledColorInputProps
>(
  (
    {
      labelProps: { className: labelClassName, ...otherLabelProps } = {},
      ...otherProps
    },
    ref
  ) => {
    return (
      <BaseLabelledInput
        className={buildClassName(labelClassName, 'jtjs-labelled-color-input')}
        {...pickLabelledProps(otherProps)}
        {...otherLabelProps}
      >
        <ColorInput {...withoutLabelledProps(otherProps)} ref={ref} />
      </BaseLabelledInput>
    );
  }
);
