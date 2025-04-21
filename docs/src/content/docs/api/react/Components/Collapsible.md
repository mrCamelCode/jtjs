---
title: Collapsible
description: Generated API documentation for Collapsible.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/wrappers/layout/Collapsible.tsx#L46)

`extends` ContentboxProps

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_ -> _FlexboxProps_ -> _ContentboxProps_

A wrapper that allows its children to be collapsed by clicking on the heading of the
Collapsible. To support accessibility, the Collapsible can be controlled by navigating
to and activating the chevron button in the heading of the Collapsible.

By default, the Collapsible will remove its children from the DOM when the content
is collapsed. If you need to retain some state in the children of the Collapsible
even when it's collapsed, you can modify the collapse behaviour with the `collapseBehaviour`
prop.

### Properties

#### collapseBehaviour?: _HideBehaviour_

(Optional, defaults to HideBehaviour.Remove) How the Collapsible hides its content when collapsed.

---

#### defaultIsCollapsed?: _boolean_

Whether the collapsible starts collapsed. This will only apply if the Collapsible is uncontrolled. If you're
setting `isCollapsed` to control the Collapsible, just make your initial value for `isCollapsed` the default
you want.

---

#### direction?: _"row" | "column"_

(Optional, defaults to `row`) The direction that the contents of the Flexbox
flow.

---

#### filled?: _boolean_

(Optional, defaults to `false`). Whether the box should have a marker class that indicates it should be filled
(have a background color).

---

#### heading?: _ReactNode_

The heading that appears for the Collapsible. It's recommended to always put something here so it's clear
what the Collapsible is for when it's collapsed.

---

#### horizontalAlignment?: _HorizontalAlignment_

---

#### isCollapsed?: _boolean_

Whether the collapsible is currently collapsed. Setting this makes the Collapsible controlled and you
must keep this value updated. Use `onChangeCollapsed` to listen for state change requests.

---

#### onChangeCollapsed?: _Function_

What to do when the user indicates they want to change whether the Collapsible is collapsed.

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