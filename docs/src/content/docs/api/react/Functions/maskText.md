---
title: maskText
description: Generated API documentation for maskText.
---

`Function` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/3ffb67ba2a41a72275436002f53c8e2f5e0a22b2/libs/react/lib/util/util-functions.ts#L24)

---

maskText(text: _string_, mask: _RegExp_): _string_

---

Masks text on a per-character basis.

### Returns
The masked text.

### Example
```ts
maskText('abc123', /\d/); // => '123'
```

### Parameters

#### text: _string_

The text to mask.

---

#### mask: _RegExp_

The mask to apply to the text. The mask will be applied on a per-character basis.