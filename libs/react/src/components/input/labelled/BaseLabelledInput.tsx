import { LabelPosition, LabelledProps } from '../../../types';
import { buildClassName } from '../../../util';
import {
  InputFeedbackMessage,
  InputFeedbackMessageType,
} from '../../structured-information/InputFeedbackMessage';
import { InlineText, Label, LabelProps } from '../../text';

export interface BaseLabelledInputProps extends LabelProps, LabelledProps {}

export const BaseLabelledInput = ({
  children,
  label = '',
  // Intentionally swallow. The ...otherProps capture the label props.
  labelProps,
  labelPosition = LabelPosition.Before,
  labelTextProps: {
    className: labelTextClassName,
    ...otherLabelTextProps
  } = {},
  error,
  ...otherProps
}: BaseLabelledInputProps) => {
  const labelText = (
    <InlineText
      className={buildClassName(
        labelTextClassName,
        'jtjs-label-text',
        labelPosition === LabelPosition.Before
          ? 'jtjs-label-before'
          : 'jtjs-label-after'
      )}
      {...otherLabelTextProps}
    >
      {label}
    </InlineText>
  );

  return (
    <Label {...otherProps}>
      {label !== undefined &&
        labelPosition === LabelPosition.Before &&
        labelText}

      {children}

      {label !== undefined &&
        labelPosition === LabelPosition.After &&
        labelText}

      {error && (
        <InputFeedbackMessage messageType={InputFeedbackMessageType.Error}>
          {error}
        </InputFeedbackMessage>
      )}
    </Label>
  );
};
