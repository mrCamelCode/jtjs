import { HTMLProps, ReactNode } from 'react';
import { formatClassName } from '../../util/util-functions';
import LoadIndicator from './LoadIndicator';

export interface LoadViewProps extends HTMLProps<HTMLDivElement> {
  /**
   * Whether the content of the load view is loading. When `true`, animated loading dots will be
   * shown to the user (if no `loadingComponent` is provided). When `false`, the children of the view
   * will be displayed as-is.
   */
  isLoading: boolean;
  /**
   * What to show to the user when the view is loading. By default, animated dots will be shown. The
   * animation requires that you use the base styles provided by JTJS.
   */
  loadingComponent?: ReactNode;
}

/**
 * A wrapper that will show its content based on its `isLoading` prop.
 */
export const LoadView = ({
  isLoading,
  children,
  className,
  loadingComponent,
  ...otherProps
}: LoadViewProps) => {
  return (
    <div
      className={formatClassName('jtjs-load-view', className)}
      {...otherProps}
    >
      {isLoading ? loadingComponent ?? <LoadIndicator /> : children}
    </div>
  );
};

export default LoadView;
