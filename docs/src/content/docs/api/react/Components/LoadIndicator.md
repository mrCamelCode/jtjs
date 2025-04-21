---
title: LoadIndicator
description: Generated API documentation for LoadIndicator.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/wrappers/information/LoadIndicator.tsx#L20)

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