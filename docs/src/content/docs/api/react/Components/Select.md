---
title: Select
description: Generated API documentation for Select.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/input/base/Select.tsx#L33)

`extends` ComponentPropsWithRef<"select">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"select">_

A wrapper for the native select component. Provides the ability to define the options as a
prop.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `value` that's not `undefined`.

### Properties

#### onChangeSelection?: _Function_

Handler for when the user attempts to change their selection in the dropdown.

---

#### options?: _(SelectOption<any> | SelectOptionGroup<any>)[]_

The options to show in the dropdown.