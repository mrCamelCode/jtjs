---
title: Flexbox
description: Generated API documentation for Flexbox.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/wrappers/layout/Flexbox.tsx#L37)

`extends` ComponentPropsWithRef<"div">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_

A wrapper that allows for rapid and simple assembly of layouts by leveraging flex.

Intended to be used purely for layout. Flexboxes aren't intended to have any styling associated with them besides the inline
styles the component generates to express the flex options determined from the provided props.

### Properties

#### direction?: _"row" | "column"_

(Optional, defaults to `row`) The direction that the contents of the Flexbox
flow.

---

#### horizontalAlignment?: _HorizontalAlignment_

---

#### reverseDirection?: _boolean_

(Optional, defaults to `false`) Whether the flow direction of the Flexbox's
contents should be reversed.

---

#### reverseWrap?: _boolean_

---

#### spacing?: _string_

(Optional, defaults to `0.5rem`) How much space to put between the contents of
the Flexbox.

---

#### verticalAlignment?: _VerticalAlignment_

---

#### wrap?: _boolean_

(Optional, defaults to `false`) Whether the contents of the Flexbox should
wrap.