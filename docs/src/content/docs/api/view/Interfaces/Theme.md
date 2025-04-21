---
title: Theme
description: Generated API documentation for Theme.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs-view/blob/a61e749933670420ad6d3edf813c05a00094ef7d/lib/model/theme.model.ts#L1)

### Properties

#### accent: _string_

A color that accents elements on the page. It should probably be complementary, but stand out against the background
and foreground.

---

#### affirmative: _string_

The color used to indicate an affirmative action, like a confirmation button for
whether the user wants to save their data.

---

#### affirmativeText: _string_

The color for text that appears on an element with a background of the `affirmative` color.

---

#### background: _string_

The color that should be used for the background of the page.

---

#### button: _string_

A color used for the button elements on the page. This should be visible against the foreground and/or background,
depending on what you're going to put elements on top of.

---

#### buttonText: _string_

The color for the text of a button. This should be visible against the button color.

---

#### disabled: _string_

The color that should be used for disabled elements. This should be visible against the foreground and/or background,
depending on what you're going to put elements on top of.

---

#### focus: _string_

The color used for the focus outline of elements. This should be easily visible against the foreground and/or background,
depending on what you're going to put elements on top of. Contrast is particularly important for this color, as it's
what will indicate to a user navigating the page with the keyboard what element is currently selected.

---

#### foreground: _string_

The color that should be used for things that sit on top of the background. This could be things like
cards or nav bars. This color should be visible against the background.

---

#### info: _string_

The color used to call attention to extra information.

---

#### infoText: _string_

The color for text that appears on an element with a background of the `info` color.

---

#### name: _string_

The name of the theme. This should be unique among themes.

---

#### negative: _string_

The color used to indicate a negative or possibly destructive action, like a confirmation button for deleting
some data.

---

#### negativeText: _string_

The color for text that appears on an element with a background of the `negative` color.

---

#### outline: _string_

A color used to outline elements to show their box. This could be used to outline things like text inputs.

---

#### text: _string_

The color that should be used for text on the page. This should be visible against the foreground and/or background,
depending on what you're going to put elements on top of.

---

#### warn: _string_

The color used to indicate a warning to the user. A warning isn't as bad as something negative and should be used
when indicating to the user that something had a recoverable/ignorable issue.

---

#### warnText: _string_

The color for text that appears on an element with a background of the `warn` color.