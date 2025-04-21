---
title: FileInput
description: Generated API documentation for FileInput.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/base/FileInput.tsx#L34)

`extends` InputProps

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"input">, "children">_ -> _InputProps_

A wrapper for the base input component with a default `type` of `"file"`. Useful
for when you want to accept a file from the user.

Just like a regular file input, if you'd like to allow the user to pass multiple
files, set the `multiple` prop.

Note that file inputs in HTML are nearly impossible to control. The only valid
value for `value` is an empty string, and that's for wiping the input. The `files`
attribute is intended to be immutable. Because of this, you should treat this input
as uncontrolled.

If you'd like a more controlled solution, consider using this component as a base to
create a file input that tracks its own state. This is the approach `FullImageFileInput` uses.

### Properties

#### onChangeFiles?: _Function_

Callback for when the user uploads files.

Note that because of how HTML file inputs work, this callback is _not_
additive. That is, if the user uploads 1 file, then uploads 2 files, the
second invocation of this callback will just contain the 2 new files.