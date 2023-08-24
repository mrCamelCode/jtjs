import { LabelProps } from '../components';
import { InlineTextProps } from '../components/text/InlineText';

export enum LabelPosition {
  Before,
  After,
}

export interface LabelledProps {
  label?: string;
  /**
   * What position the label text appears relative to the input.
   */
  labelPosition?: LabelPosition;
  labelProps?: LabelProps;
  labelTextProps?: InlineTextProps;
}

/**
 * Convenience function to reduce duplication of picking out the `LabelledProps` from a
 * Labelled component to pass them down to the `BaseLabelledInput`.
 *
 * @param props - The component props to pick out of
 *
 * @returns Just the `LabelledProps` out of the provided props.
 */
export function pickLabelledProps<T extends LabelledProps>(
  props: T
): LabelledProps {
  const { label, labelPosition, labelProps, labelTextProps } = props;

  return {
    label,
    labelPosition,
    labelProps,
    labelTextProps,
  };
}

export function withoutLabelledProps<T extends LabelledProps>(
  props: T
): Omit<T, keyof LabelledProps> {
  const newProps = { ...props };
  (
    [
      'label',
      'labelPosition',
      'labelProps',
      'labelTextProps',
    ] as (keyof LabelledProps)[]
  ).forEach((key) => {
    delete newProps[key];
  });

  return newProps;
}
