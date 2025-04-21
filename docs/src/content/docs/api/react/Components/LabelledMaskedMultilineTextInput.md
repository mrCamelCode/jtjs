---
title: LabelledMaskedMultilineTextInput
description: Generated API documentation for LabelledMaskedMultilineTextInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/labelled/LabelledMaskedMultilineTextInput.tsx#L8)

`extends` MaskedMultilineTextInputProps, LabelledProps

Props Inheritance Hierarchy: _Omit<MultilineTextInputProps, "onChangeText">_ -> _MaskedMultilineTextInputProps_ & _LabelledProps_

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

#### mask?: _RegExp_

Mask to apply to the input. The masking is applied using maskText. Because this component is intended
to allow multiline text, your regex does _not_ need to explicitly allow newlines.

##### Example
```ts
const onlyNumbersMask = /\d/;
```

---

#### onChangeText?: _Function_

Handler for when the user attempts to change the input.

---

#### warn?: _string_