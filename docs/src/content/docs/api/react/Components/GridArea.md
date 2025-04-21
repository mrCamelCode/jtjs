---
title: GridArea
description: Generated API documentation for GridArea.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/wrappers/layout/GridArea.tsx#L41)

`extends` ComponentPropsWithRef<"div">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_

Used in conjunction with `Grid`. Allows you to easily outline the areas of your grid.

### Properties

#### column?: _string_

Shorthand for [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column), this allows
you to specify the space you'd like this area to be in when using `flow` in your `Grid`. Note that
specifying this will have no impact if you're using `layout` options in your `Grid` that describe
fixed areas. If using fixed areas, use the `name` prop instead to name this `GridArea` to match the name
you defined in `layout`.

This follows the same syntax as the `grid-column` CSS rule.

Mutually exclusive with `name`.

---

#### name?: _string_

The name of this grid area. This **_must_** correspond **_exactly_** with the
name you used when defining the parent `Grid`'s `layout`.

Mutually exclusive with `row` and `column`.

---

#### row?: _string_

Shorthand for [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row), this allows
you to specify the space you'd like this area to be in when using `flow` in your `Grid`. Note that
specifying this will have no impact if you're using `layout` options in your `Grid` that describe
fixed areas. If using fixed areas, use the `name` prop instead to name this `GridArea` to match the name
you defined in `layout`.

This follows the same syntax as the `grid-row` CSS rule.

Mutually exclusive with `name`.