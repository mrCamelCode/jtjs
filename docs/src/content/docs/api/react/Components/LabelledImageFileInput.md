---
title: LabelledImageFileInput
description: Generated API documentation for LabelledImageFileInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/input/labelled/LabelledImageFileInput.tsx#L8)

`extends` ImageFileInputProps, LabelledProps

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"input">, "children">_ -> _InputProps_ -> _FileInputProps_ -> _ImageFileInputProps_ & _LabelledProps_

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

#### error?: _string_

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

#### onChangeFiles?: _Function_

Callback for when the user uploads files.

Note that because of how HTML file inputs work, this callback is _not_
additive. That is, if the user uploads 1 file, then uploads 2 files, the
second invocation of this callback will just contain the 2 new files.

---

#### warn?: _string_