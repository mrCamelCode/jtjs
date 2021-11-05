import { Theme } from '@jtjs/core/browser';

export interface ThemedProps {
  /**
   * The theme data to apply to the component. This prop should override any theme hook.
   */
  theme?: Theme;
}
