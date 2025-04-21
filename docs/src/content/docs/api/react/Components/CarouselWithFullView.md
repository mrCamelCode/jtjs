---
title: CarouselWithFullView
description: Generated API documentation for CarouselWithFullView.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/structured-information/CarouselWithFullView.tsx#L36)

`extends` CarouselProps<T>

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_ -> _FlexboxProps_ -> _CarouselProps<T>_

A variant of the Carousel that additionally has an area
where the active item displays in a full view.

For example, in the case of an image carousel, you may produce a
small thumbnail image for `renderItem`. For `renderFullView` you
may produce a larger version of the image.

The component resolves to a `Flexbox` that has a container
within it (with the `jtjs-carousel-full-view-area` class). Below that
is a Carousel.

Because this component is logically a composed extension of a Carousel,
all props go to the underlying carousel. If you want to pass props to the
outermost container, you can use the `containerProps` prop. If you want to pass
props to the container for the full view, you can use the `fullViewAreaProps` prop.

### Properties

#### getItemKey: _CarouselItemIteratee<T, string>_

Determines the key of the item

---

#### items: _T[]_

---

#### renderFullView: _Function_

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

#### containerProps?: _FlexboxProps_

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

#### fullViewAreaProps?: _FlexboxProps_

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

#### renderPlaceholderFullView?: _Function_

Allows you to render something when there's no active item. If this
isn't specified, nothing is rendered.

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