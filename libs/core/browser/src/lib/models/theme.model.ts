export interface Theme {
  /**
   * The name of the theme. This should be unique among themes.
   */
  name: string;
  /**
   * The color that should be used for the background of the page.
   */
  background: string;
  /**
   * The color that should be used for things that sit on top of the background. This could be things like
   * cards or nav bars. This color should be visible against the background.
   */
  foreground: string;
  /**
   * The color that should be used for disabled elements. This should be visible against the foreground and/or background,
   * depending on what you're going to put elements on top of.
   */
  disabled: string;
  /**
   * The color that should be used for text on the page. This should be visible against the foreground and/or background,
   * depending on what you're going to put elements on top of.
   */
  text: string;
  /**
   * A color that accents elements on the page. It should probably be complementary, but stand out against the background
   * and foreground.
   */
  accent: string;
  /**
   * A color used to outline elements to show their box. This could be used to outline things like text inputs.
   */
  outline: string;
  /**
   * A color used for the button elements on the page. This should be visible against the foreground and/or background,
   * depending on what you're going to put elements on top of.
   */
  button: string;
  /**
   * The color for the text of a button. This should be visible against the button color.
   */
  buttonText: string;
  /**
   * The color used for the focus outline of elements. This should be easily visible against the foreground and/or background,
   * depending on what you're going to put elements on top of. Contrast is particularly important for this color, as it's
   * what will indicate to a user navigating the page with the keyboard what element is currently selected.
   */
  focus: string;
}
