---
title: Table
description: Generated API documentation for Table.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/structured-information/Table.tsx#L64)

`extends` Omit<ComponentPropsWithRef<"table">, "rows" | "headers">

Props Inheritance Hierarchy: _Omit<ComponentPropsWithRef<"table">, "rows" | "headers">_

Provides a simple way to create tables, with the ability to greatly customize
when needed.

### Properties

#### columnHeaders: _TableColumnHeader[]_

---

#### disableEmptyTag?: _boolean_

(Optional, defaults to `false`) By default, a short message is shown when the Table doesn't
have any data. The Table has no data when there are no `children` and no `rows`. You can use this
to disable that short message.

---

#### emptyTagText?: _string_

(Optional, defaults to `'No data available'`) The short message that shows when the Table has
no data. Has no effect if `disableEmptyTag` is `true`.

---

#### maxHeight?: _string_

The max height of the Table. When this is set, a scrollbar will automatically be added
to the Table when necessary, and the column headers will become sticky.

##### Example
```ts
'20rem'
'800px'
```

---

#### rows?: _TableRow[]_

The rows of the table. If this is provided, then any `children` provided to the Table
are ignored and the Table is auto-generated from the data provided here.

---

#### title?: _string_

The title of the table. This should be a descriptive but short name describing
what the table is for.

---

#### useVerticalColumnHeaders?: _boolean_