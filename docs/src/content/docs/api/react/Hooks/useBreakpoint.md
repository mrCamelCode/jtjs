---
title: useBreakpoint
description: Generated API documentation for useBreakpoint.
---

`Hook` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/hooks/use-breakpoint.hook.ts#L59)

---

useBreakpoint(breakpoints: _Breakpoints_): _BreakpointName_

---

Determines and returns the breakpoint for the current window width. The breakpoint is updated
automatically with window resizes. This hook will trigger a re-render only when the breakpoint
changes.

If your app uses breakpoints that differ from the defaults, consider making your own light wrapper `useAppBreakpoint`.
See the examples for more info.

### Returns
The breakpoint the current window width falls into. This comparison is inclusive,
so if the window's width is exactly on the breakpoint for `lg`, for example, then the breakpoint
will be `lg`.

### Example
```ts
// Assuming the default breakpoints are used.

// window width is 800px
useBreakpoint() // returns 'md'

// window width is 768px (directly on md breakpoint)
useBreakpoint() // returns 'md'

// window width is 300px
useBreakpoint() // returns 'xs'
```

### Example
```ts
// Custom app breakpoints
export const useAppBreakpoint = () => useBreakpoint({
   sm: 400,
   md: 600,
   lg: 900,
   xl: 1500,
});
```

### Parameters

#### breakpoints: _Breakpoints_

(Optional, defaults to defaultBreakpoints) The breakpoints to use to determine what
breakpoint the current window width falls into.