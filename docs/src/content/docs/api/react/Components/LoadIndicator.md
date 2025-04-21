---
title: LoadIndicator
description: Generated API documentation for LoadIndicator.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/wrappers/information/LoadIndicator.tsx#L20)

`extends` Omit<ComponentPropsWithRef<"div">, "children">

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"div">, "children">_

Default load indicator. Resolves to `span`s inside a `div` container.

Note that this component has no visual appearance without styling. You must style this element for it
to have any appearance. `@jtjs/theme` includes styles for this element if you don't want to write
your own, or want a base to work from.

If you'd like to style the component yourself, the structure of the resolved markup is:
```
.jtjs-loading-dots-container
 .jtjs-loading-dot.jtjs-loading-dot-1
 .jtjs-loading-dot.jtjs-loading-dot-2
```

### Properties