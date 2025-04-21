---
title: CheckboxOption
description: Generated API documentation for CheckboxOption.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/input/groups/LabelledCheckboxGroup.tsx#L10)

`extends` Omit<Option<undefined, Omit<LabelledCheckboxProps, "onChangeChecked" | "name" | "id" | "checked" | "value" | "label">>, "value">

Inheritance Hierarchy: _Omit<Option<undefined, Omit<LabelledCheckboxProps, "onChangeChecked" | "name" | "id" | "checked" | "value" | "label">>, "value">_

### Properties

#### label: _string_

---

#### name: _string_

The name of the checkbox. This is used to differentiate this checkbox from others
within the group, so should be unique among the checkboxes in the group.

---

#### props?: _Omit<LabelledCheckboxProps, "label" | "checked" | "name" | "value" | "id" | "onChangeChecked">_