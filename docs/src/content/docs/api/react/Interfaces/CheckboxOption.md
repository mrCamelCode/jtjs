---
title: CheckboxOption
description: Generated API documentation for CheckboxOption.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/groups/LabelledCheckboxGroup.tsx#L10)

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