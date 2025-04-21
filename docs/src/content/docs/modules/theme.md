---
title: '@jtjs/theme'
description: A summary page of @jtjs/theme.
---

[Package](https://www.npmjs.com/package/@jtjs/theme)

**Environment**: Browser

A CSS library for JTJS components that lets you hit the ground running! Saves you time writing custom styles and provides styling for all JTJS components. Especially useful for the few components that _require_ styling (like the `Toggle`).

Takes into consideration any theme coloring injected by the `ThemeService` found in `@jtjs/view`, should you be using that.

Recommended JTJS usage is to use this package as a base and override styles as needed for your desired look.

To use, simply install the package and include 
```css
@import '@jtjs/theme';
``` 
in your CSS.

## Public Items

Though this package is largely just styles for classes put on components by a JTJS view library (like `@jtjs/react`), this style library does make a handful of animations available for general use.

The following animations are available for use in your styles as long as you're including `@jtjs/theme`:

- `jtjs-anim_fade-in`: Applies an opacity `filter` that fades the element in.
- `jtjs-anim_fade-out`: Applies an opacity `filter` that fades the element out.
- `jtjs-anim_slide-in`: Slides and fades the element in from the left of its resting position.
- `jtjs-anim_slide-out`: Slides and fades the element out toward the left of its resting position.
- `jtjs-anim_backdrop-blur-in`: Blurs the backdrop of the element with the `backdrop-filter` rule via the `blur` function.
- `jtjs-anim_backdrop-blur-out`: Unblurs the backdrop of the element with the `backdrop-filter` rule via the `blur` function. This animation is best paired with the `jtjs-anim_backdrop-blur-in` animation, as the starting blur of this animation is the same as the final blur value of the `blur-in` animation.
- `jtjs-anim_pop`: Gives the element a popping-in effect by scaling it to nothing and then having it bounce around full scale before settling on a scale of 1.
- `jtjs-anim_pop-wiggle`: Like `jtjs-anim_pop`, but also applies a small rotation during the effect.
- `jtjs-anim_shimmer`: Applies a gradient background meant to look like a sheen and then animates that background to move horizontally back and forth. Useful for loading effects where you want a placeholder content box to shine while its contents are loading.
- `jtjs-anim_pulse`: Scales the object to be slightly larger, then back to a scale of 1.

