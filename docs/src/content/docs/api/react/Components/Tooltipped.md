---
title: Tooltipped
description: Generated API documentation for Tooltipped.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/wrappers/information/Tooltipped.tsx#L74)

`extends` ComponentPropsWithoutRef<"div">

Props Inheritance Hierarchy: _ComponentPropsWithoutRef<"div">_

Displays a tooltip when the wrapper is hovered or receives focus. To be accessible,
the guidelines outlined [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
were followed as closely as possible.

This is a wrapper, and you should be aware of what you're wrapping and what the wrapper is in. See
the `inline` prop for more information on possible tweaks you may have to make to avoid invalid markup.

### Properties

#### tooltip: _string_

The text to display for the tooltip.

---

#### disableWrapperFocus?: _boolean_

(Optional, defaults to `false`) Whether the wrapper for the tooltip can be
focused. You should disable wrapper focus when the element you're giving a
tooltip to can receive focus on its own. Since the inner element can receive
focus, allowing the wrapper to have focus serves no purpose, but it makes
keyboard navigation more difficult.

---

#### hideDelayMs?: _number_

(Optional, defaults to `250`) The number of milliseconds that must pass
before the tooltip disappears. Note, it is recommended that you *DON'T*
make this less than 250. The delay exists partially to allow the user time to hover
over the tooltip to keep it alive. The tooltip remaining visible when
the tooltip itself is hovered is a requirement according to the Mozilla
accessibility guidelines for tooltips.

---

#### inline?: _boolean_

(Optional, defaults to `false`) Whether the container for the wrapper uses an inline element
(span). This can be used for easy shorthand when you wrap an inline element with a tooltip, or
when this wrapper appears in an element where `div` is not a valid child, since by default
the wrapper is implemented with a `div`.

Note that setting this to `true` changes the wrapper from a `div` to a `span`. If you set this to `true`,
ensure you're wrapping only elements that can exist in a `span`.

---

#### showDelayMs?: _number_

(Optional, defaults to `500`) The number of milliseconds that must pass
before the tooltip appears.