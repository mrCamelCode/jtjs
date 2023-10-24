import { forwardRef } from 'react';
import { buildClassName } from '../../util';
import { InlineText, InlineTextProps } from '../text';

export enum InputFeedbackMessageType {
  Error,
}

export interface InputFeedbackMessageProps extends InlineTextProps {
  messageType: InputFeedbackMessageType;
}

export const InputFeedbackMessage = forwardRef<
  HTMLSpanElement,
  InputFeedbackMessageProps
>(({ className, messageType, ...otherProps }, ref) => {
  const getMessageTypeClass = () => {
    switch (messageType) {
      case InputFeedbackMessageType.Error:
        return 'jtjs-error';
      default:
        return '';
    }
  };

  return (
    <InlineText
      className={buildClassName(
        className,
        'jtjs-input-feedback-message',
        getMessageTypeClass()
      )}
      {...otherProps}
      ref={ref}
    />
  );
});
