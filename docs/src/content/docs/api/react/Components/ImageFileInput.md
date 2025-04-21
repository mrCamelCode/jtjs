---
title: ImageFileInput
description: Generated API documentation for ImageFileInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/base/ImageFileInput.tsx#L46)

`extends` FileInputProps

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"input">, "children">_ -> _InputProps_ -> _FileInputProps_

A light wrapper around a `FileInput` that gives defaults for accepting images.

Because changing image file types is a common use case, this input supports
converting files that come through it. See the `convertImagesTo` prop.

While this component tells the underlying input to only accept images, be aware
that setting what file types are accepted in HTML is more of a suggestion
than something the browser will enforce. Even if an input says it only accepts
images, the user can still provide non-images. You should expect that the files
that come through the input are potentially not images. Setting the accepted file
type is more for improving UX when the OS' file browser window appears. Because
file inputs are nearly impossible to control and this component is intended to be
as close to the native HTML input as possible, this component can't just filter out
non-images.

If you'd like a more complete and opinionated image file input, consider using
`FullImageFileInput`.

### Properties

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

#### onChangeFiles?: _Function_

Callback for when the user uploads files.

Note that because of how HTML file inputs work, this callback is _not_
additive. That is, if the user uploads 1 file, then uploads 2 files, the
second invocation of this callback will just contain the 2 new files.