---
title: AsyncButton
description: Generated API documentation for AsyncButton.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/controls/AsyncButton.tsx#L22)

`extends` ButtonProps

Props Inheritance Hierarchy: _ComponentPropsWithRef<"button">_ -> _ButtonProps_

A specialized button that assumes that its `onClick` handler is async and will wait for it to finish. While waiting,
the button is disabled.

While the async task is running, the button will have the `jtjs-async-button-working` class attached to it if you'd
like to assign special styles for that state.

### Properties

#### isPerformingAsyncTask?: _boolean_

Whether the async button should behave as though it's performing its async task. This will be used in conjunction
with any async `onClick` and the button will show as performing its async task if an `onClick` handler is running
or this is `true`.