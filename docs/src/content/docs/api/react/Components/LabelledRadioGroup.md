---
title: LabelledRadioGroup
description: Generated API documentation for LabelledRadioGroup.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/groups/LabelledRadioGroup.tsx#L40)

`extends` Omit<FormGroupProps, "defaultValue" | "children">, Omit<LabelledProps, "labelProps">

Props Inheritance Hierarchy: _Omit<FormGroupProps, "defaultValue" | "children">_ & _Omit<LabelledProps, "labelProps">_

A group of related radio inputs.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `value` that's not `undefined`.

### Properties

#### options: _RadioOption<T>[]_

---

#### defaultValue?: _T_

The default value for the radio group to have. This only has an effect when the component is uncontrolled. If you
want to default a controlled group, just set your `value`'s initial value to be your default.

---

#### error?: _string_

---

#### info?: _string_

---

#### inlineItems?: _boolean_

(Optional, defaults to `false`) Whether the items in the group should be inline.
If this is `false`, each item in the group will be on its own line.

---

#### label?: _string_

---

#### labelPosition?: _LabelPosition_

What position the label text appears relative to the input.

---

#### labelProps?: _Omit<DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref">_

---

#### labelTextProps?: _InlineTextProps_

---

#### name?: _string_

---

#### onChangeSelection?: _Function_

Handler for when the user attempts to change their selection in the radio group.

---

#### value?: _T_

---

#### warn?: _string_