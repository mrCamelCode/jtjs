---
title: MaskedMultilineTextInput
description: Generated API documentation for MaskedMultilineTextInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/base/MaskedMultilineTextInput.tsx#L34)

`extends` Omit<MultilineTextInputProps, "onChangeText">

Props Inheritance Hierarchy: _Omit<MultilineTextInputProps, "onChangeText">_

Receives user input in the form of text. Allows masking the input to limit accepted characters.

You can choose whether you control this component, but if you don't control it, the component will
control the underlying input for you. This allows a provided mask to still apply to
the user input.

### Properties

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