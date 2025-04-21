---
title: LoadView
description: Generated API documentation for LoadView.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/wrappers/information/LoadView.tsx#L43)

`extends` ComponentPropsWithRef<"div">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_

A wrapper that will show its content based on its `isLoading` prop.

### Properties

#### isLoading: _boolean_

Whether the content of the load view is loading. When `true`, the `LoadIndicator` component will be
shown to the user (if no `loadingComponent` is provided). When `false`, the children of the view
will be displayed as-is.

---

#### loadingComponent?: _ReactNode_

(Optional, defaults to `LoadIndicator`) What to show to the user when the view is loading.

---

#### useSimpleLoadIndicator?: _boolean_

(Optional, defaults to `false`) Whether to use a simple load indicator that's just an InlineText that says
`Loading...`. This option can be useful if you're not using `@jtjs/theme` since the default LoadIndicator
used by the `LoadView` has no appearance without styling (be it from `@jtjs/theme` or your own custom styling).

If this is `true`, it will supersede anything passed to `loadingComponent`.

##### Example
```tsx
// Will display: Loading...
<LoadView useSimpleLoadIndicator isLoading />

// Will display: Loading...
<LoadView useSimpleLoadIndicator loadingComponent={<MyVeryCoolAndIntricateLoadingIndicator />} />

// Will display nothing unless you're either using `@jtjs/theme` or you have your own styling for the LoadIndicator's
// resolved HTML.
<LoadView isLoading />
```