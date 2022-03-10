export interface LoadIndicatorProps {}

/**
 * Default load indicator. Shows animated dots if using JTJS theme package.
 */
export const LoadIndicator = ({}: LoadIndicatorProps) => {
  return (
    <div className="jtjs-loading-dots-container">
      {[1, 2].map((num) => {
        return <span className={`jtjs-loading-dot jtjs-loading-dot-${num}`} key={num} />;
      })}
    </div>
  );
};

export default LoadIndicator;
