---
title: ThemeService
description: Generated API documentation for ThemeService.
---

`Class` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/view/lib/services/theme.service.ts#L11)

Provides means by which to register themes, change the active theme, and listen to
when the theme changes. Also includes helper methods for dealing with themes and colors.

### Constructors

#### new ThemeService()

### Properties

#### `static` parchment: _Theme_

A lighter theme with an off-white background, deep chocolates for text, beautiful
blue buttons, and lovely lavender accents.

---

#### `static` onChangeTheme: _Event<OnChangeThemeListener>_

Event for when the current theme changes or is modified.

---

#### `static` light: _Theme_

A classic light theme, featuring blue buttons and aqua accents.

---

#### `static` defaultTheme: _Theme_

A default theme you can use to get going. This theme is NOT in the set
of registered themes, but will be used to set the theme CSS variables
by default. Same as ThemeService.dark.

---

#### `static` dark: _Theme_

A dark theme that primarily uses shades of gray with pops of soft blue for buttons
and an aqua for accent.

### Accessors

#### `static` themes: _Theme[]_

---

#### `static` currentTheme: _Theme_

### Methods

#### updateTheme(themeName: _string_, newThemeData: _Partial<Omit<Theme, "name">>_): _void_

Updates the specified theme, modifying its registered data.

---

#### registerTheme(theme: _Theme_, autoSetCurrent: _boolean_): _void_

Registers the specified theme with the service, allowing the theme to be used as the current theme. If the theme
shares a name with an already-registered theme, nothing happens.

---

#### lighten(hexColor: _string_, amount: _number_): _string_

Lightens a hex color.

##### Returns
The lightened color.

---

#### darken(hexColor: _string_, amount: _number_): _string_

Darkens a hex color.

##### Returns
The darkened color.

---

#### changeTheme(themeName: _string_): _void_

Changes the theme to the specified one if the specified theme has been registered with the service. If the specified
theme is found, the current theme is updated and the `onChangeTheme` event is invoked.