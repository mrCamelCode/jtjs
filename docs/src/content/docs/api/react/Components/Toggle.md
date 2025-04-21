---
title: Toggle
description: Generated API documentation for Toggle.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/controls/Toggle.tsx#L43)

`extends` Omit<ComponentPropsWithRef<"span">, "children" | "onToggle">

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"span">, "children" | "onToggle">_

A control that can be interacted with to switch between being on and off.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `isOn` that's not `undefined` and it must be a `boolean`.

Note that because a Toggle has no backing element in HTML, you must style this element for it
to have any appearance. `@jtjs/theme` library contains default styling for Toggles you can
use as a base.

If you'd like to style the component yourself, the structure of the resolved markup is:
```
.jtjs-toggle.jtjs-toggle-{on/off}
  .jtjs-toggle-knob
```

### Properties

#### defaultIsOn?: _boolean_

---

#### disabled?: _boolean_

Whether the toggle is disabled.

---

#### isOn?: _boolean_

Whether the toggle is currently on.

---

#### onToggle?: _Function_

Handler for when the user tries to change whether the toggle is on.