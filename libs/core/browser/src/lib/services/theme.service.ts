import { Event } from '@jtjs/event';
import chroma from 'chroma-js';
import { Theme } from '../models/theme.model';

export type OnChangeThemeListener = (theme: Theme) => void;

/**
 * Provides means by which to register themes, change the active theme, and listen to
 * when the theme changes. Also includes helper methods for dealing with themes and colors.
 */
export class ThemeService {
  static onChangeTheme: Event<OnChangeThemeListener> = new Event();

  /**
   * A default theme you can use to get going. This theme is NOT in the set
   * of registered themes, but will be used to set the theme CSS variables
   * by default.
   *
   * Generated at coolors.co:
   * https://coolors.co/474747-963333-eb5e5e-5c7ec1-3bad61
   */
  static defaultTheme: Theme = {
    name: 'jtjs-default-dark',
    background: '#292929',
    foreground: '#474747',
    disabled: '#3D3D3D',
    text: '#EEE',
    accent: '#3BAD61',
    outline: '#8F8F8F',
    button: '#5C7EC1',
    buttonText: '#EEE',
    focus: '#97ADD8',
  };

  private static _themes: Theme[] = [];
  public static get themes() {
    return [...this._themes];
  }

  private static _currentTheme: Theme = ThemeService.defaultTheme;
  /**
   * The currently active theme.
   */
  public static get currentTheme() {
    return this._currentTheme;
  }
  /**
   * Sets the current theme and invokes the `onChangeTheme` event.
   */
  private static set currentTheme(theme: Theme) {
    this._currentTheme = theme;
    this.updateCssVariables();

    this.onChangeTheme.trigger(theme);
  }

  /**
   * Registers the specified theme with the service, allowing the theme to be used as the current theme. If the theme
   * shares a name with an already-registered theme, nothing happens.
   *
   * @param theme - The new theme to register
   * @param autoSetCurrent - (Optional, defaults to `true`) Whether the current theme will automatically be set to the registered theme if this registration
   * is the first theme added to the service.
   */
  static registerTheme(theme: Theme, autoSetCurrent = true) {
    if (!this._themes.some((t) => t.name === theme.name)) {
      // Only add themes whose names aren't already registered.
      this._themes.push(theme);

      if (this._themes.length === 1 && autoSetCurrent) {
        // If the theme we just registered is the first registered theme, set that theme to the current theme.
        this.currentTheme = theme;
      }
    }
  }

  /**
   * Changes the theme to the specified one if the specified theme has been registered with the service. If the specified
   * theme is found, the current theme is updated and the `onChangeTheme` event is invoked.
   *
   * @param themeName - The name of the theme to set as the current theme.
   */
  static changeTheme(themeName: string) {
    const theme = this._themes.find((t) => t.name === themeName);

    if (theme) {
      this.currentTheme = theme;
    }
  }

  /**
   * Lightens a hex color.
   *
   * @param color - The color to lighten
   * @param amount - (Optional) The amount by which to lighten the color. This is a value
   * between 0-1. The default for this value is the same value used by the service to generate
   * lightened color variants for theme colors.
   *
   * @returns - The lightened color.
   */
  static lighten(color: string, amount = 0.1): string {
    const c = chroma(color);

    return c.set('hsl.l', c.get('hsl.l') + amount).hex();
  }

  /**
   * Darkens a hex color.
   *
   * @param color - The color to darken
   * @param amount - (Optional) The amount by which to darken the color. This is a value
   * between 0-1. The default for this value is the same value used by the service to generate
   * darkened color variants for theme colors.
   *
   * @returns - The darkened color.
   */
  static darken(color: string, amount = 0.1) {
    return this.lighten(color, -amount);
  }

  private static updateCssVariables() {
    const root = document.documentElement;

    Object.entries(this._currentTheme).forEach(([themeKey, color]) => {
      if (themeKey !== 'name' && color) {
        root.style.setProperty(`--jtjs-theme-${themeKey}`, color);
        root.style.setProperty(
          `--jtjs-theme-${themeKey}-darkened`,
          this.darken(color)
        );
        root.style.setProperty(
          `--jtjs-theme-${themeKey}-lightened`,
          this.lighten(color)
        );
      }
    });
  }

  /**
   * Get the CSS variables set up to start so they're available in the event
   * the consumer never explicitly registers anything with the service. This
   * should place the default theme into the CSS vars.
   */
  private static _constructor = (() => {
    ThemeService.updateCssVariables();
  })();
}
