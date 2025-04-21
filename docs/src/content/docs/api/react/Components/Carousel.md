---
title: Carousel
description: Generated API documentation for Carousel.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/structured-information/Carousel.tsx#L83)

`extends` FlexboxProps

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_ -> _FlexboxProps_

A generic container for a series of items. The carousel displays the provided
`items` horizontally, rendering according to the `renderItem` prop. By default,
horizontal overflow is handled automatically and the carousel has no wrapping.
If you want to control the maximum width of the carousel, consider passing `style`
or using CSS.

The user may use their mouse (or use keyboard navigation and the Space/Enter keys) to select
items in the carousel. The `onChangeActiveItem` prop may be used to hook into the
active item changing.

This component may be controlled or uncontrolled. Pass something other than `undefined` to
`activeItem` to control the component.

The component resolves to a `Flexbox`, and each item is wrapped in a container
with the class `jtjs-carousel-item-container`. If the item is the currently-selected
item in the carousel, its container will additionally have the `jtjs-carousel-active-item`
class.

### Properties

#### getItemKey: _CarouselItemIteratee<T, string>_

Determines the key of the item

---

#### items: _T[]_

---

#### renderItem: _CarouselItemIteratee<T, ReactNode>_

Determines how the item is rendered for the user to see.

---

#### activeItem?: _null | T_

The currently active item. Pass if you want to control the component.

`null` can be used when there is no currently active item, but you'd still
like to control the component.

---

#### areItemsEqual?: _Function_

(Optional, defaults to a function that determines whether `item1 === item2`)
Allows you to customize how the carousel understands that two items are the same.
This function is how the carousel determines when the active item changes.

This function can be useful if the items in your carousel are complex. For example,
you may want two objects to be equivalent if they have the same ID rather than
checking that they're the same reference.

---

#### defaultActiveItem?: _T_

The item that's active by default.

This only has an effect when the component
is uncontrolled. If you want to control the component and have a default,
just set `activeItem`'s first value to the desired default.

---

#### direction?: _"row" | "column"_

(Optional, defaults to `row`) The direction that the contents of the Flexbox
flow.

---

#### getItemContainerProps?: _CarouselItemIteratee<T, undefined | Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">>_

A useful iteratee to have finer control over the props that get passed to
the containers that wrap each item in the carousel.

##### Returns
The props for the container that wraps each item in the carousel.

---

#### horizontalAlignment?: _HorizontalAlignment_

---

#### onChangeActiveItem?: _Function_

Callback for when the user attempts to change the active item.

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