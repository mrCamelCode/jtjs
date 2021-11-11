export interface Theme {
  /**
   * The name of the theme. This should be unique among themes.
   */
  name: string;
  background: string;
  foreground: string;
  disabled: string;
  text: string;
  accent: string;
  outline: string;
  button: string;
  buttonText: string;
  focus: string;
}
