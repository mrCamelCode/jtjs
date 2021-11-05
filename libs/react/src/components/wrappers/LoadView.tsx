import { HTMLProps, ReactNode } from 'react';
import { ThemedProps } from '../../prop-types/themed.props';
import { formatClassName } from '../../util/util-functions';
import { useTheme } from '../../hooks/use-theme.hook';

export interface LoadViewProps extends HTMLProps<HTMLDivElement>, ThemedProps {
  /**
   * Whether the content of the load view is loading. When `true`, animated loading dots will be
   * shown to the user (if no `loadingComponent` is provided). When `false`, the children of the view
   * will be displayed as-is.
   */
  isLoading: boolean;
  /**
   * What to show to the user when the view is loading. By default, animated dots will be shown.
   */
  loadingComponent?: ReactNode;
}

const LoadViewDots = ({
  theme,
  ...otherProps
}: HTMLProps<HTMLDivElement> & ThemedProps) => {
  return (
    <div className="jtjs-load-view-dots-container" {...otherProps}>
      {Array(6)
        .fill(0)
        .map((el, index) => {
          return (
            <span
              key={index}
              className="jtjs-load-view-dot"
              id={`jtjs-load-view-dot-${index}`}
              style={{
                backgroundColor: theme?.accent,
              }}
            />
          );
        })}
    </div>
  );
};

/**
 * A wrapper that will show its content based on its `isLoading` prop.
 */
export const LoadView = ({
  isLoading,
  children,
  className,
  loadingComponent,
  theme: themeProp,
  ...otherProps
}: LoadViewProps) => {
  const theme = themeProp ?? useTheme()[0];

  return (
    <div
      className={formatClassName('jtjs-load-view', className)}
      {...otherProps}
    >
      {isLoading
        ? loadingComponent ?? <LoadViewDots theme={theme} />
        : children}
    </div>
  );
};

export default LoadView;
