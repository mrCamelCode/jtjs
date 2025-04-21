---
title: useTheme
description: Generated API documentation for useTheme.
---

`Hook` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/hooks/use-theme.hook.ts#L16)

---

useTheme(): _[Theme, Function]_

---

Hooks onto the current theme avialable via the ThemeService. If no
current theme is established (which can happen if the ThemeService
hasn't been started), the ThemeService.defaultTheme is used. Whenever
the current theme is changed, this hook will automatically update.

### Returns
An array, where the first element is the current Theme,
and the second element is a setter for the the current Theme. Using
the setter triggers the ThemeService.onChangeTheme event, so all
instances of this hook will be updated, as well as any listeners you may
have registered to that event.

### Parameters

