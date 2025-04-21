---
title: Select
description: Generated API documentation for Select.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/base/Select.tsx#L33)

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