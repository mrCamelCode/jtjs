---
title: FullImageFileInput
description: Generated API documentation for FullImageFileInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/input/complex/FullImageFileInput.tsx#L122)

`extends` Omit<LabelledImageFileInputProps, "value" | "defaultValue" | "onChangeFiles">

Props Inheritance Hierarchy: _Omit<LabelledImageFileInputProps, "value" | "defaultValue" | "onChangeFiles">_

An input intended to gather image files from the user. Unlike other more base components like `ImageFileInput`,
this input is more complex and strives to be a more complete and easy-to-use solution rather than a simple wrapper. The input
resolves to an outer `Flexbox` that contains a `LabelledImageFileInput`, an `ImageCarouselWithFullView`, and a `Button` for
removing uploaded images. Because this component is logically its `LabelledImageFileInput`, its root props reflect that.
You may pass almost anything you could pass to a `LabelledImageFileInput` to this component.
If you pass a `ref` to this component, it will go down to the underlying `input`.
The props for the other items that make up this component are exposed via
other props, like `containerProps` for example.

The input provides a means to upload image files and, unlike a base file input, this input guarantees that it only
accepts image files. The `File[]` exposed via the `onChangeImageFiles` prop is always guaranteed to only include
files whose type matches `image/*`.

Image files that are successfully added
are shown in a carousel with full view so the user may peruse what they've uploaded. When looking at the full view
of an uploaded image, the user is provided a button to remove that image from the input.

Via the `multiple` prop, the input may be configured to accept one or several images.
Note that when `multiple` is enabled, the input operates slightly differently than a base file input. Instead
of new uploads clearing any existing uploads, this input will instead _add_ new uploads to what has been uploaded before.

When `multiple` is enabled, the full `ImageCarouselWithFullView` that this component contains is used. All images that
have been uploaded may be browsed and viewed. When `multiple` is _disabled_, the carousel is hidden and the component
always shows the full view of the uploaded image, if there is one. If no image has been uploaded (or the uploaded image
is removed), the default placeholder for `ImageCarouselWithFullView` is displayed.

Unlike a base file input, this input may be controlled. If you'd like to control it, pass something other than `undefined`
to the `value` prop. Controlling the input can be useful for things like initial form values and being able to
wipe the input.

### Example
Accept a single image
```tsx
<FullImageFileInput />
```

### Example
Accept multiple images
```tsx
<FullImageFileInput multiple />
```

### Example
Convert images to WEBP
```tsx
<FullImageFileInput convertImagesTo={ImageConversionType.Webp} />
```

### Example
Control the component and convert incoming uploads to PNG
```tsx
const [pngs, setPngs] = useState<File[]>([]);

<FullImageFileInput
  value={pngs}
  onChangeImageFiles={setPngs}
  convertImagesTo={ImageConversionType.Png}
/>
```

### Properties

#### containerProps?: _FlexboxProps_

Props for the outer container of the input.

---

#### convertImagesTo?: _ImageConversionType_

Whether the input should create converted versions of all valid files
passed to it. Conversion is an async process and the input will be
disabled while it's working.

Conversion is useful if your system prefers a particular image file type.
For example, `webp` can be preferable because of how small it is for
the same perceptible visual quality of something like `png`.

Note that file type acceptance in HTML is more of a suggestion than something
the browser enforces. If the user provides a non-image file, the conversion
will just output the file they provided unchanged.

When the conversion is complete, `onChangeFiles` will be invoked with the results
of the conversion.

---

#### defaultValue?: _File[]_

The default value the input should have.

Note that this only works when the component is uncontrolled. If controlling the component, set a default by
just having the initial `value` be your default.

---

#### error?: _string_

---

#### imageCarouselWithFullViewProps?: _Omit<ImageCarouselWithFullViewProps, "items" | "activeItem">_

Props for the ImageCarouselWithFullView the input uses to display previews of the uploaded images.

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

#### onChangeImageFiles?: _Function_

Callback for whenever files are uploaded or removed from the input. Unlike a bare `ImageFileInput`,
the files provided are guaranteed to only be images.

---

#### removeButtonProps?: _Omit<ButtonProps, "children">_

---

#### removeButtonText?: _string_

(Optional, defaults to `'Remove'`) The text for the button that appears when an image is selected for preview
in the full view carousel.

---

#### value?: _File[]_

The current value for the input. Can be used to control the input.

---

#### warn?: _string_