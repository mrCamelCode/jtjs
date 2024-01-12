import { forwardRef } from 'react';
import { buildClassName } from '../../util';
import { InlineText, InlineTextProps } from '../text';

export enum InlineFeedbackMessageType {
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
}

export interface InlineFeedbackMessageProps extends InlineTextProps {
  messageType: InlineFeedbackMessageType;
}

export const InlineFeedbackMessage = forwardRef<
  HTMLSpanElement,
  InlineFeedbackMessageProps
>(({ className, messageType, ...otherProps }, ref) => {
  const getMessageTypeClass = () => {
    switch (messageType) {
      case InlineFeedbackMessageType.Error:
        return 'jtjs-error';
      case InlineFeedbackMessageType.Warn:
        return 'jtjs-warn';
      case InlineFeedbackMessageType.Info:
        return 'jtjs-info';
      default:
        return '';
    }
  };

  return (
    <InlineText
      className={buildClassName(
        className,
        'jtjs-inline-feedback-message',
        getMessageTypeClass()
      )}
      {...otherProps}
      ref={ref}
    />
  );
});
