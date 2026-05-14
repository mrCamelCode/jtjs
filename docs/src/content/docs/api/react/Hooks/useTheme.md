---
title: useTheme
description: Generated API documentation for useTheme.
---

`Hook` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/3ffb67ba2a41a72275436002f53c8e2f5e0a22b2/libs/react/lib/hooks/use-theme.hook.ts#L16)

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

