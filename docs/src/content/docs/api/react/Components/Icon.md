---
title: Icon
description: Generated API documentation for Icon.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/text/Icon.tsx#L29)

`extends` Omit<ComponentPropsWithRef<"span">, "children">

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"span">, "children">_

Renders an icon from FontAwesome. Note that for this component to work, you MUST either:
1. Import FontAwesome via a URL like this: https://use.fontawesome.com/releases/v5.15.4/css/all.css
1. Include FontAwesome in your project yourself another way

If your icon doesn't seem to be appearing and you've verified that you're including FontAwesome
in your project, try verifying and changing the `iconType`.

### Properties

#### icon: _string_

The name of the icon. This must match the name of the icon in FontAwesome, minus the
`fa` prefix (which is added for you).

##### Example
```tsx
<Icon iconType="solid" icon="address-card" />
```

---

#### iconType?: _"solid" | "brand" | "regular"_

(Optional, defaults to `'solid'`) The type of icon. This affects the style of the icon pulled from FontAwesome.