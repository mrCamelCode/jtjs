---
title: ImageCarouselWithFullView
description: Generated API documentation for ImageCarouselWithFullView.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/structured-information/ImageCarouselWithFullView.tsx#L54)

`extends` Omit<CarouselWithFullViewProps<ImageCarouselItemType>, "renderItem" | "getItemKey" | "renderFullView">

Props Inheritance Hierarchy: _Omit<CarouselWithFullViewProps<ImageCarouselItemType>, "renderItem" | "getItemKey" | "renderFullView">_

A variant of the CarouselWithFullView intended to display images.

Accepts an array of image props where the `src` is required (and the `alt` is highly recommended)
for its `items`. The `src` should be unique among its siblings; you shouldn't have the same image
included in the carousel more than once, as the `src` is the default for generating
the keys. Should you find yourself in a situation where you must list the same image multiple
times, pass your own `getItemKey` prop to generate unique and stable keys for your
data set.

The component displays small, thumbnail
versions of the images in a carousel. The full view defaults to a larger view
of the image. The placeholder for the full view defaults to a `filled` Contentbox.

All defaults may be overridden by passing your own props.

Because images are wont to be of many different sizes, `height`
is available as a prop to easily manage controlling the area the image carousel takes
up. The input and carousel will take up 100% of the width they have available.

When an image is in full view, it will be centered in the available
space, as the aspect ratio of the image is respected by default.
This approach prevents the jarring experience of varying sizes of images causing the
page to resize constantly by ensuring the component takes up a consistent size regardless
of the images being viewed.

If you need the carousel to adjust `height` based on the screen size, consider using the
`useBreakpoint` hook.

### Properties

#### items: _ImageCarouselItemType[]_

---

#### activeItem?: _null | ImageCarouselItemType_

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

#### defaultActiveItem?: _ImageCarouselItemType_

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

#### getItemContainerProps?: _CarouselItemIteratee<ImageCarouselItemType, undefined | Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">>_

A useful iteratee to have finer control over the props that get passed to
the containers that wrap each item in the carousel.

##### Returns
The props for the container that wraps each item in the carousel.

---

#### getItemKey?: _CarouselItemIteratee<ImageCarouselItemType, string>_

---

#### height?: _string_

(Optional, defaults to 20rem) Convenience that controls the height of the preview and its container
to make sure the image preview doesn't exceed
a certain height.

---

#### horizontalAlignment?: _HorizontalAlignment_

---

#### onChangeActiveItem?: _Function_

Callback for when the user attempts to change the active item.

---

#### renderFullView?: _Function_

---

#### renderItem?: _CarouselItemIteratee<ImageCarouselItemType, ReactNode>_

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