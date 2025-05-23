---
title: Link
description: Generated API documentation for Link.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/text/Link.tsx#L20)

`extends` ComponentPropsWithRef<"a">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"a">_

### Properties

#### disableExternalNewTab?: _boolean_

(Optional, defaults to `false`) Whether the feature of opening links marked
`external` in a new tab should be disabled.

---

#### external?: _boolean_

(Optional, defaults to `false`) Whether the link is external. An external
link will be accompanied by a small icon if using JTJS' styling.

Will also request that the browser open the link in a new tab. This can be
disabled with `disableExternalNewTab`.