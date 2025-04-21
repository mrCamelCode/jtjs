---
title: LabelledFileInput
description: Generated API documentation for LabelledFileInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/labelled/LabelledFileInput.tsx#L8)

`extends` FileInputProps, LabelledProps

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"input">, "children">_ -> _InputProps_ -> _FileInputProps_ & _LabelledProps_

### Properties

#### error?: _string_

---

#### info?: _string_

---

#### label?: _string_

---

#### labelPosition?: _LabelPosition_

What position the label text appears relative to the input.

---

#### labelProps?: _LabelProps_

---

#### labelTextProps?: _InlineTextProps_

---

#### onChangeFiles?: _Function_

Callback for when the user uploads files.

Note that because of how HTML file inputs work, this callback is _not_
additive. That is, if the user uploads 1 file, then uploads 2 files, the
second invocation of this callback will just contain the 2 new files.

---

#### warn?: _string_