---
title: EmailLink
description: Generated API documentation for EmailLink.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/text/EmailLink.tsx#L13)

`extends` LinkProps

Props Inheritance Hierarchy: _ComponentPropsWithRef<"a">_ -> _LinkProps_

A link that allows a shortcut to email an address.

If you don't include any children, the link will use the email for its text.

### Properties

#### email: _string_

---

#### disableExternalNewTab?: _boolean_

(Optional, defaults to `false`) Whether the feature of opening links marked
`external` in a new tab should be disabled.

---

#### external?: _boolean_

(Optional, defaults to `false`) Whether the link is external. An external
link will be accompanied by a small icon if using JTJS' styling.

Will also request that the browser open the link in a new tab. This can be
disabled with `disableExternalNewTab`.