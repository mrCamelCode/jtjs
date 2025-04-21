---
title: Grid
description: Generated API documentation for Grid.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/wrappers/layout/Grid.tsx#L223)

`extends` ComponentPropsWithRef<"div">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"div">_

A component to aid with setting up a gridded layout. Under the hood, this uses CSS [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid).
Keep in mind that CSS grid is a _very_ powerful solution with many options and possible uses. This component
doesn't attempt to have a wrapping for every possible use case. Instead, it seeks to make the majority
of use cases easier to set up and require less knowledge of the nitty gritties of grid to accomplish.

The core of this component's behaviour is driven by its `layout` prop, but its other props can also aid
you in establishing a gridded layout efficiently.

### Properties

#### cellHorizontalAlignment?: _HorizontalAlignment_

Aligns grid items within their cell space horizontally.

---

#### cellVerticalAlignment?: _VerticalAlignment_

Aligns grid items within their cell space vertically.

---

#### columnSpacing?: _string_

The space between columns.

---

#### flow?: _"row" | "column"_

(Optional, defaults to `row`) How the children of the grid will automatically flow to fit within the grid's
available cells. This **won't work** if you've specified a fixed `layout`.

---

#### horizontalAlignment?: _HorizontalAlignment_

Should the grid not take up the entire grid container, you can use
this to align the entire grid horizontally.

---

#### layout?: _GridLayout_

Describes the layout of your grid in one of three possible options.

### String Representation
Describes a fixed layout of areas within the grid. If you're completely unfamiliar with grid, it's recommended
you read this short section on [grid-area](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-area)
as a primer. This prop's string representation option is greatly inspired by that CSS rule.

With this option, you define the layout with a template string that looks like a table. Keep in mind that this option
describes your layout as a set of fixed areas, which means your grid won't be responsive. If you need a responsive grid
and you want to use this option, consider using it in conjunction with something like the `useBreakpoint`
hook to swap layouts on-the-fly based on screen size.

The first row of the layout table describes the sizing for the
**columns**. These values can be anything that's a valid size for a grid column or HTML element. You can also leave cells
blank to have the component assume `auto` sizing. This first row for column sizing should have an empty cell at the start of the row.
The empty cell keeps the column sizes in line with the rest of the table. This cell is ignored, so you can leave it blank or
put something like an `X` in it if you prefer.

For defining rows in the layout, you start the row with the sizing for that row. Similarly to the column sizing, this accepts
any valid size for a grid row or HTML element. This cell is the reason the column sizing row has an empty leading cell;
the colum sizing row isn't a real row and therefore doesn't have a need for a row size.

As you define the rest of the row, use the names for grid areas that you'll eventually pass to this `Grid`'s child `GridArea`s.
If a particular cell in the grid will be empty, you can either specify `.` for the name or leave the cell blank. It's recommended
you name your areas after the content they'll contain. Some common examples are `main`, `header`, `footer`, `sidebar`, etc. These
names aren't special and you're free to name your areas whatever you want.

The resulting string should look like a table/grid and give you a very plain and simple representation of how the grid
will be laid out that's verifiable at a glance.

##### Example
```tsx
<Grid
  layout={`
        | 100px  | 1fr    | 100px
   auto | header | header | header
   1fr  | .      | main   | sidebar
        | footer | footer | footer
  `}
>
   <GridArea name="header" />
   <GridArea name="main" />
   <GridArea name="sidebar" />
   <GridArea name="footer" />
</Grid>
```

That example will yield a grid where there are 3 columns and 3 rows. The first and last columns will have a width of
`100px`. The middle column will have a width of `1fr`. `fr` is a unit for flexible sizes that works to say that the size
should take up a certain amount of the remaining space. You can read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout).
Here, we have the middle column taking up all the remaining space that's left after the browser allocates screen space
for the fixed `100px` columns on either side of the middle column.

For our 3 rows, the first row is taken up entirely by an area called `header`. These names can be whatever you want, as long
as they match up with the `GridArea`s you put inside your `Grid`. The first row in the example is sized with `auto`, which
will typically make the row take up no more space than it needs to fit its content. Our second row has an empty area in the
first column (`.` represents an empty grid cell), followed by an area called `main`, and then an area called `sidebar`. This row is allowed to take up any remaining
area not allocated to the other two rows because its size is `1fr`. The final row specifies no size, so `Grid` will assume
`auto`. This row is taken up entirely by an area called `footer`.

This is a rough visualisation of how this layout's rows and columns may look on a screen if we were to outline its rows/columns:
```
       100px         1fr           100px
       ---------------------------------
  auto |   |                       |   |
       |---|-----------------------|---|
       |   |                       |   |
  1fr  |   |                       |   |
       |   |                       |   |
       |---|-----------------------|---|
  auto |   |                       |   |
       ---------------------------------
```

### Array Representation
If you don't like the string representation of the layout, you can also use the array representation. It follows similar
rules and suggestions as the string representation. The only real difference is that for the column sizing row,
you don't need to have an empty first cell.

To get the same layout achieved in the string representation example with the array representation, you'd do:

##### Example
```tsx
<Grid
   layout={[
     ['100px', '1fr', '100px'], // Column sizing
     ['auto', 'header', 'header', 'header'], // Row 1
     ['1fr', '', 'main', 'sidebar'], // Row 2; the first area could be '.', but blank assumes '.'
     ['', 'footer', 'footer', 'footer'], // Row 3
   ]}
>
   <GridArea name="header" />
   <GridArea name="main" />
   <GridArea name="sidebar" />
   <GridArea name="footer" />
</Grid>
```

### Object Representation
This option allows you to just define your number of rows and columns and their sizes. This option is good
to use when you'd like to rely on the grid's `flow` to automatically decide how to layout its children.
In contrast to the other options, you do _not_ define fixed areas in your layout. This allows the grid to
be responsive by default, but requires more work on your part if you have a preference of general areas within the
grid that you want your `GridArea`s to use.

As a side note, even though you technically forego the definition of areas with this option, it's recommended
(but not required) to still use `GridArea`s as the direct children of the grid to group your content islands.
That also gives you a consistent place (the `GridArea`s) to place any preferences on how certain content islands
span across the available rows/columns. This is made simpler by the `row` and `column` props of `GridArea`.

If you don't want to use `GridArea`s, you can use the `gridRow` and `gridColumn` styles on the direct children of the grid to specify whether
certain children should have fixed slots in the grid.

Regardless of whether you use `GridArea`s or something else as direct children, items will automatically flow in the grid
to attempt to be responsive while obeying the sizing you specify.

To get a similar base layout without fixed areas as the previous two examples, we can do the following:

##### Example
```tsx
<Grid
   layout={{
     columnSizing: '100px 1fr 100px',
     rowSizing: 'auto 1fr 1fr auto',
   }}
>
   <GridArea row="1" column="1 / span 3" /> // Header
   <GridArea /> // Main
   <GridArea /> // Sidebar
   <GridArea row="3" column="1 / span 3" /> // Footer
</Grid>
```

Note that we're only defining preferences for slots within the grid for our header and footer
and allowing the flow of the grid to determine where to place the content of the middle row. We've also added an additional
row to the middle to give the main content space to move around as needed, giving the final
layout a total of 4 available rows, 2 of which are allocated to the main content space. The top
row is still reserved for the header, and the bottom row is still reserved for the footer.

Keep in mind that this option is minimally parsed, so you'll need to take care that the strings you provide
are well-formed and complete.

---

#### rowSpacing?: _string_

The space between rows.

---

#### spacing?: _string_

Spacing that applies for the spacing between both columns and rows. The more specific `rowSpacing`
and `columnSpacing` props will take precedence.

---

#### verticalAlignment?: _VerticalAlignment_

Should the grid not take up the entire grid container, you can use
this to align the entire grid vertically.