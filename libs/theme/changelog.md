# 2.3.1 

- Add repo information.

# 2.3.0

- Removed mouse effect styling for buttons to be in line with `@jtjs/react@3.0.0`'s removal of that effect from the `Button` component.

# 2.2.0

- Changed default entry animation for dialogs.
  - They'll now fade in and their backdrop will blur the items behind them.
- Added animation classes: 
  - .jtjs-anim_backdrop-blur-in
  - .jtjs-anim_backdrop-blur-out

# 2.1.0

- Added styling for the following components added in `@jtjs/react@2.0.0`:
  - `ImageCarouselWithFullView`
  - `CarouselWithFullView`
  - `FullImageFileInput`

# 2.0.0

- Internal adjustments and improvements, no breaking changes.

# 1.3.1
- Added overlooked `.jtjs-anim_fade-out` animation.

# 1.3.0

- #6: Exposed animations for use in consuming code styles. Animations can be accessed via the named animation, or by applying the class for the animation. The classes make some assumptions about a default duratio and timing function, but these details can easily be overridden by specifying overriding styles. The animations currently exposed are:
```
.jtjs-anim_fade-in
.jtjs-anim_slide-in
.jtjs-anim_slide-out
.jtjs-anim_pop
.jtjs-anim_pop-wiggle
.jtjs-anim_shimmer
.jtjs-anim_pulse
```

# 1.2.0

- Added styles for the new dialog components.
