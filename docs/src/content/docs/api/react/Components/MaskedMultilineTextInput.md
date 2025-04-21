---
title: MaskedMultilineTextInput
description: Generated API documentation for MaskedMultilineTextInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/input/base/MaskedMultilineTextInput.tsx#L34)

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