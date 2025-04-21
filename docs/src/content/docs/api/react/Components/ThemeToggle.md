---
title: ThemeToggle
description: Generated API documentation for ThemeToggle.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/controls/ThemeToggle.tsx#L23)

`extends` Omit<ToggleProps, "onToggle" | "isOn">

Props Inheritance Hierarchy: _Omit<ToggleProps, "onToggle" | "isOn">_

A specialty control for toggling between two theme selections (light and dark).

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `mode` that's not `undefined` and it must be a ThemeMode.

### Properties

#### defaultIsOn?: _boolean_

---

#### disabled?: _boolean_

Whether the toggle is disabled.

---

#### mode?: _ThemeMode_

---

#### onToggle?: _Function_