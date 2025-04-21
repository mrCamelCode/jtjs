---
title: LabelledMaskedMultilineTextInput
description: Generated API documentation for LabelledMaskedMultilineTextInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/input/labelled/LabelledMaskedMultilineTextInput.tsx#L8)

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