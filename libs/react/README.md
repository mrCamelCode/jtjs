**Disclaimer**: These docs are auto-generated from data produced by [react-docgen](https://github.com/reactjs/react-docgen). react-docgen occasionally struggles with some TS syntax. In the cases where the docgen couldn't correctly discover a type, you'll see `??` in place of the type. The docgen also isn't great when it comes to displaying unions and function signatures. 

That being said, JTJS is fully typed. If you ever need further details on something you see in these docs, you can use the hints from your IDE of choice to get more robust type information.

Separately, these docs currently only include documentation on components. This library also exports a number of hooks to make your life easier. If you're curious about those, just look at code completion for function names starting with `use` in your IDE of choice.
# Components
- [BaseLabelledInput](#baselabelledinput)

- [Button](#button)

- [Checkbox](#checkbox)

- [Collapsible](#collapsible)

- [ColorInput](#colorinput)

- [Contentbox](#contentbox)

- [Flexbox](#flexbox)

- [FormGroup](#formgroup)

- [Heading](#heading)

- [Icon](#icon)

- [InlineText](#inlinetext)

- [Input](#input)

- [Label](#label)

- [LabelledCheckbox](#labelledcheckbox)

- [LabelledCheckboxGroup](#labelledcheckboxgroup)

- [LabelledColorInput](#labelledcolorinput)

- [LabelledInput](#labelledinput)

- [LabelledMaskedMultilineTextInput](#labelledmaskedmultilinetextinput)

- [LabelledMaskedTextInput](#labelledmaskedtextinput)

- [LabelledMultilineTextInput](#labelledmultilinetextinput)

- [LabelledRadio](#labelledradio)

- [LabelledRadioGroup](#labelledradiogroup)

- [LabelledSelect](#labelledselect)

- [LabelledTextInput](#labelledtextinput)

- [LabelledToggle](#labelledtoggle)

- [Link](#link)

- [LoadIndicator](#loadindicator)

- [LoadView](#loadview)

- [MaskedMultilineTextInput](#maskedmultilinetextinput)

- [MaskedTextInput](#maskedtextinput)

- [MultilineTextInput](#multilinetextinput)

- [Radio](#radio)

- [Select](#select)

- [Table](#table)

- [Text](#text)

- [TextInput](#textinput)

- [ThemeToggle](#themetoggle)

- [Toggle](#toggle)

- [Tooltip](#tooltip)

- [Tooltipped](#tooltipped)
## `BaseLabelledInput`
[Components ⬆️](#components)
### Description
The base for a labelled input. It's unlikely you want to use this unless you're
creating your own custom input component. It's more likely that you want to use one
of the more specific and already-created `Labelled...` components.
### Props
`label?: string = ''`


`labelPosition?: LabelPosition = LabelPosition.Before` - What position the label text appears relative to the input.


`labelProps?: LabelProps`


`labelTextProps?: InlineTextProps = {}`




## `Button`
[Components ⬆️](#components)
### Description
A wrapper for the base button component.

The `type` prop is set to "button" by default, but can be overridden. This is to avoid having buttons
work unexpectedly as submit buttons when you use them in a form.
### Props
`enableMouseTracking?: boolean = false` - (Optional, defaults to `false`) Whether the position of the mouse is tracked when it's over the button.
This can be useful in creating effects with the background of the button that are based on the mouse
position, but could be expensive if you have a lot of other things going on in your app.

If you want to use the mouse position yourself, the current position of the mouse can be tracked in the CSS
as variables scoped to the button. The variables are `--jtjs-mouse-pos-x` and `--jtjs-mouse-pos-y`.


`onChangeMousePosition?: signature` - What to do when the position of the mouse changes while hovering over the button. Only triggered when
`enableMouseTracking` is `true`.

<span style="color: #3d80e3; font-weight: bold">@param</span> mousePosition - The current mouse position, relative to the bounding box of the button. Coordinates of (-1, -1)
imply that the mouse is no longer over the button.




## `Checkbox`
[Components ⬆️](#components)
### Description
Wraps the base input component with a default `type` of `"checkbox"`.
### Props
`onChangeChecked?: signature` - Handler for when the user attempts to change the value of the checkbox.

<span style="color: #3d80e3; font-weight: bold">@param</span> checked - What the user wants the current checked value to be.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.




## `Collapsible`
[Components ⬆️](#components)
### Description
A wrapper that allows its children to be collapsed by clicking on the heading of the
Collapsible. To support accessibility, the Collapsible can be controlled by navigating
to and activating the chevron button in the heading of the Collapsible.

By default, the Collapsible will remove its children from the DOM when the content
is collapsed. If you need to retain some state in the children of the Collapsible
even when it's collapsed, you can modify the collapse behaviour with the `collapseBehaviour`
prop.
### Props
`direction?: union` - (Optional, defaults to `row`) The direction that the contents of the Flexbox
flow.


`reverseDirection?: boolean` - (Optional, defaults to `false`) Whether the flow direction of the Flexbox's
contents should be reversed.


`horizontalAlignment?: union`


`verticalAlignment?: union`


`wrap?: boolean` - (Optional, defaults to `false`) Whether the contents of the Flexbox should
wrap.


`reverseWrap?: boolean`


`spacing?: string` - (Optional, defaults to `0.5rem`) How much space to put between the contents of
the Flexbox.


`filled?: boolean` - (Optional, defaults to `false`). Whether the box should have a marker class that indicates it should be filled
(have a background color).


`heading?: ReactNode` - The heading that appears for the Collapsible. It's recommended to always put something here so it's clear
what the Collapsible is for when it's collapsed.


`collapseBehaviour?: HideBehaviour = HideBehaviour.Remove` - (Optional, defaults to {<span style="color: #3d80e3; font-weight: bold">@link</span> HideBehaviour.Remove}) How the Collapsible hides its content when collapsed.


`defaultIsCollapsed?: boolean` - Whether the collapsible starts collapsed. This will only apply if the Collapsible is uncontrolled. If you're
setting `isCollapsed` to control the Collapsible, just make your initial value for `isCollapsed` the default
you want.


`isCollapsed?: boolean` - Whether the collapsible is currently collapsed. Setting this makes the Collapsible controlled and you
must keep this value updated. Use `onChangeCollapsed` to listen for state change requests.


`onChangeCollapsed?: signature` - What to do when the user indicates they want to change whether the Collapsible is collapsed.

<span style="color: #3d80e3; font-weight: bold">@param</span> isCollapsed - Whether the Collapsible should be collapsed.




## `ColorInput`
[Components ⬆️](#components)
### Props
`onChangeColor?: signature` - Handler for when the user changes the color of the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> color - The color, as a hex string. Note that browsers do not support an alpha channel
for the color input.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original event.




## `Contentbox`
[Components ⬆️](#components)
### Description
A simple wrapper meant to house related content.
### Props
`direction?: union` - (Optional, defaults to `row`) The direction that the contents of the Flexbox
flow.


`reverseDirection?: boolean` - (Optional, defaults to `false`) Whether the flow direction of the Flexbox's
contents should be reversed.


`horizontalAlignment?: union`


`verticalAlignment?: union`


`wrap?: boolean` - (Optional, defaults to `false`) Whether the contents of the Flexbox should
wrap.


`reverseWrap?: boolean`


`spacing?: string` - (Optional, defaults to `0.5rem`) How much space to put between the contents of
the Flexbox.


`filled?: boolean = false` - (Optional, defaults to `false`). Whether the box should have a marker class that indicates it should be filled
(have a background color).




## `Flexbox`
[Components ⬆️](#components)
### Description
A wrapper that allows for rapid and simple assembly of layouts by leveraging flex.

Intended to be used purely for layout. Flexboxes aren't intended to have any styling associated with them besides the inline
styles the component generates to express the flex options determined from the provided props.
### Props
`direction?: union = 'row'` - (Optional, defaults to `row`) The direction that the contents of the Flexbox
flow.


`reverseDirection?: boolean = false` - (Optional, defaults to `false`) Whether the flow direction of the Flexbox's
contents should be reversed.


`horizontalAlignment?: union = 'left'`


`verticalAlignment?: union = 'top'`


`wrap?: boolean = true` - (Optional, defaults to `false`) Whether the contents of the Flexbox should
wrap.


`reverseWrap?: boolean = false`


`spacing?: string = '0.5rem'` - (Optional, defaults to `0.5rem`) How much space to put between the contents of
the Flexbox.




## `FormGroup`
[Components ⬆️](#components)
### Description
A light wrapper around a `fieldset`. Used to group related form controls and inputs together.
### Props
`inlineItems?: boolean = false` - (Optional, defaults to `false`) Whether the items in the group should be inline.
If this is `false`, each item in the group will be on its own line.




## `Heading`
[Components ⬆️](#components)
### Description
Wraps the base heading elements and uses the appropriate element depending on the `importance` of the Heading.
### Props
`importance?: union = 3` - (Optional, defaults to 3) The importance of the heading. This will be used to determine the appropriate
heading element to use and should generally denote relative importance of the heading on the page.




## `Icon`
[Components ⬆️](#components)
### Description
Renders an icon from FontAwesome. Note that for this component to work, you MUST either:
1. Import FontAwesome via a URL like this: https://use.fontawesome.com/releases/v5.15.4/css/all.css
1. Include FontAwesome in your project yourself another way

If your icon doesn't seem to be appearing and you've verified that you're including FontAwesome
in your project, try verifying and changing the `iconType`.
### Props
`icon: string` - The name of the icon. This must match the name of the icon in FontAwesome, minus the
`fa` prefix (which is added for you).

<span style="color: #3d80e3; font-weight: bold">@example</span>
```tsx
<Icon iconType="solid" icon="address-card" />
```


`iconType?: union = 'solid'` - (Optional, defaults to `'solid'`) The type of icon. This affects the style of the icon pulled from FontAwesome.




## `InlineText`
[Components ⬆️](#components)
### Props
`italic?: boolean = false`


`bold?: boolean = false`




## `Input`
[Components ⬆️](#components)
### Description
A light wrapper for the `input` element with very little default configuration.
Usually, you won't want to use this directly and would probably prefer using
something like the Checkbox, Radio, or TextInput components.


## `Label`
[Components ⬆️](#components)


## `LabelledCheckbox`
[Components ⬆️](#components)
### Props
`onChangeChecked?: signature` - Handler for when the user attempts to change the value of the checkbox.

<span style="color: #3d80e3; font-weight: bold">@param</span> checked - What the user wants the current checked value to be.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition = LabelPosition.After` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledCheckboxGroup`
[Components ⬆️](#components)
### Description
A group of related checkbox inputs.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `value` that's not `undefined`.
### Props
`options: Array`


`value?: Array` - The value the group should have. This is an array of all the names of the checkboxes that are currently
checked.


`defaultValue?: Array` - The default value for the checkbox group to have. This only has an effect when the component is uncontrolled. If you
want to default a controlled group, just set your `value`'s initial value to be your default.


`onChangeSelection?: signature` - Handler for when the user attempts to change their selected items in the checkbox group.

<span style="color: #3d80e3; font-weight: bold">@param</span> selectedValues - The names of the checkboxes that should be checked.
<span style="color: #3d80e3; font-weight: bold">@param</span> selectedValue - The name of the checkboxes that was checked.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`labelProps?: ComponentPropsWithoutRef = {}`


`label?: ?? = ''`


`labelPosition?: ?? = LabelPosition.Before`


`labelTextProps?: ?? = {}`




## `LabelledColorInput`
[Components ⬆️](#components)
### Props
`onChangeColor?: signature` - Handler for when the user changes the color of the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> color - The color, as a hex string. Note that browsers do not support an alpha channel
for the color input.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledInput`
[Components ⬆️](#components)
### Props
`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledMaskedMultilineTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
<span style="color: #3d80e3; font-weight: bold">@param</span> rawText - The raw input text with no filtering.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {<span style="color: #3d80e3; font-weight: bold">@link</span> maskText}. Because this component is intended
to allow multiline text, your regex does _not_ need to explicitly allow newlines.

<span style="color: #3d80e3; font-weight: bold">@example</span>
```ts
const onlyNumbersMask = /\d/;
```


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledMaskedTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
<span style="color: #3d80e3; font-weight: bold">@param</span> rawText - The raw input text with no filtering.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {<span style="color: #3d80e3; font-weight: bold">@link</span> maskText}.

<span style="color: #3d80e3; font-weight: bold">@example</span>
```ts
const onlyNumbersMask = /\d/;
```


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledMultilineTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> text - The text of the input.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledRadio`
[Components ⬆️](#components)
### Props
`onChangeChecked?: signature` - Handler for when the user attempts to change the checked value of this radio button.


`label?: string`


`labelPosition?: LabelPosition = LabelPosition.After` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledRadioGroup`
[Components ⬆️](#components)
### Description
A group of related radio inputs.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `value` that's not `undefined`.
### Props
`options: Array`


`name?: string`


`value?: T`


`defaultValue?: T` - The default value for the radio group to have. This only has an effect when the component is uncontrolled. If you
want to default a controlled group, just set your `value`'s initial value to be your default.


`onChangeSelection?: signature` - Handler for when the user attempts to change their selection in the radio group.

<span style="color: #3d80e3; font-weight: bold">@param</span> optionValue - The value of the option that was selected.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`labelProps?: ComponentPropsWithoutRef = {}`


`label?: ?? = ''`


`labelPosition?: ?? = LabelPosition.Before`


`labelTextProps?: ?? = {}`




## `LabelledSelect`
[Components ⬆️](#components)
### Props
`options?: Array` - The options to show in the dropdown.


`onChangeSelection?: signature` - Handler for when the user attempts to change their selection in the dropdown.

<span style="color: #3d80e3; font-weight: bold">@param</span> optionValue - The value of the option that was selected from the dropdown.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> text - The text of the input.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`




## `LabelledToggle`
[Components ⬆️](#components)
### Props
`defaultIsOn?: boolean`


`isOn?: boolean` - Whether the toggle is currently on.


`onToggle?: signature` - Handler for when the user tries to change whether the toggle is on.

<span style="color: #3d80e3; font-weight: bold">@param</span> isOn - The state the user is trying to put the toggle in.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event. If the user interaced with the
toggle via a click, this will be a MouseEvent. If the user interacted with
the toggle via the keyboard, this will be a KeyboardEvent.


`disabled?: boolean` - Whether the toggle is disabled.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps = {}`




## `Link`
[Components ⬆️](#components)
### Props
`external?: boolean` - (Optional, defaults to `false`) Whether the link is external. An external
link will be accompanied by a small icon if using JTJS' styling.

Will also request that the browser open the link in a new tab. This can be
disabled with `disableExternalNewTab`.


`disableExternalNewTab?: boolean` - (Optional, defaults to `false`) Whether the feature of opening links marked
`external` in a new tab should be disabled.




## `LoadIndicator`
[Components ⬆️](#components)
### Description
Default load indicator. Appearance is driven by JTJS' theme package, but you
can style the elements yourself instead if you prefer.


## `LoadView`
[Components ⬆️](#components)
### Description
A wrapper that will show its content based on its `isLoading` prop.
### Props
`isLoading: boolean` - Whether the content of the load view is loading. When `true`, the `LoadIndicator` component will be
shown to the user (if no `loadingComponent` is provided). When `false`, the children of the view
will be displayed as-is.


`loadingComponent?: ReactNode` - (Optional, defaults to `LoadIndicator`) What to show to the user when the view is loading.




## `MaskedMultilineTextInput`
[Components ⬆️](#components)
### Description
Receives user input in the form of text. Allows masking the input to limit accepted characters.

You can choose whether you control this component, but if you don't control it, the component will
control the underlying input for you. This allows a provided mask to still apply to
the user input.
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
<span style="color: #3d80e3; font-weight: bold">@param</span> rawText - The raw input text with no filtering.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {<span style="color: #3d80e3; font-weight: bold">@link</span> maskText}. Because this component is intended
to allow multiline text, your regex does _not_ need to explicitly allow newlines.

<span style="color: #3d80e3; font-weight: bold">@example</span>
```ts
const onlyNumbersMask = /\d/;
```




## `MaskedTextInput`
[Components ⬆️](#components)
### Description
Receives user input in the form of text. Allows masking the input to limit accepted characters.

You can choose whether you control this component, but if you don't control it, the component will
control the underlying input for you. This allows a provided mask to still apply to
any input.
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
<span style="color: #3d80e3; font-weight: bold">@param</span> rawText - The raw input text with no filtering.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {<span style="color: #3d80e3; font-weight: bold">@link</span> maskText}.

<span style="color: #3d80e3; font-weight: bold">@example</span>
```ts
const onlyNumbersMask = /\d/;
```




## `MultilineTextInput`
[Components ⬆️](#components)
### Description
A light wrapper around a `textarea`.
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> text - The text of the input.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.


`rows?: ?? = 5`




## `Radio`
[Components ⬆️](#components)
### Description
A wrapper for the base input component with a default `type` of `"radio"`.
### Props
`onChangeChecked?: signature` - Handler for when the user attempts to change the checked value of this radio button.




## `Select`
[Components ⬆️](#components)
### Description
A wrapper for the native select component. Provides the ability to define the options as a
prop.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `value` that's not `undefined`.
### Props
`options?: Array` - The options to show in the dropdown.


`onChangeSelection?: signature` - Handler for when the user attempts to change their selection in the dropdown.

<span style="color: #3d80e3; font-weight: bold">@param</span> optionValue - The value of the option that was selected from the dropdown.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.




## `Table`
[Components ⬆️](#components)
### Description
Provides a simple way to create tables, with the ability to greatly customize
when needed.
### Props
`columnHeaders: Array`


`title?: string` - The title of the table. This should be a descriptive but short name describing
what the table is for.


`rows?: Array` - The rows of the table. If this is provided, then any `children` provided to the Table
are ignored and the Table is auto-generated from the data provided here.


`disableEmptyTag?: boolean = false` - (Optional, defaults to `false`) By default, a short message is shown when the Table doesn't
have any data. The Table has no data when there are no `children` and no `rows`. You can use this
to disable that short message.


`emptyTagText?: string = 'No data available'` - (Optional, defaults to `'No data available'`) The short message that shows when the Table has
no data. Has no effect if `disableEmptyTag` is `true`.


`useVerticalColumnHeaders?: boolean = false`


`maxHeight?: string = ''` - The max height of the Table. When this is set, a scrollbar will automatically be added
to the Table when necessary, and the column headers will become sticky.

<span style="color: #3d80e3; font-weight: bold">@example</span>
```ts
'20rem'
'800px'
```




## `Text`
[Components ⬆️](#components)
### Props
`italic?: boolean = false`


`bold?: boolean = false`




## `TextInput`
[Components ⬆️](#components)
### Description
A wrapper for the base input component with a default `type` of `"text"`. Useful
for single line text input. If you want to allow multiple lines of input, try
using `MultilineTextInput`.
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

<span style="color: #3d80e3; font-weight: bold">@param</span> text - The text of the input.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event.




## `ThemeToggle`
[Components ⬆️](#components)
### Description
A specialty control for toggling between two theme selections (light and dark).

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `mode` that's not `undefined` and it must be a {<span style="color: #3d80e3; font-weight: bold">@link</span> ThemeMode}.
### Props
`onToggle?: signature`


`mode?: ThemeMode`




## `Toggle`
[Components ⬆️](#components)
### Description
A control that can be interacted with to switch between being on and off.

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `isOn` that's not `undefined` and it must be a `boolean`.

Note that because a Toggle has no backing element in HTML, you must style this element for it
to have any appearance. JTJS' theme library contains default styling for Toggles you can
use as a base.
### Props
`defaultIsOn?: boolean`


`isOn?: boolean` - Whether the toggle is currently on.


`onToggle?: signature` - Handler for when the user tries to change whether the toggle is on.

<span style="color: #3d80e3; font-weight: bold">@param</span> isOn - The state the user is trying to put the toggle in.
<span style="color: #3d80e3; font-weight: bold">@param</span> event - The original simulated event. If the user interaced with the
toggle via a click, this will be a MouseEvent. If the user interacted with
the toggle via the keyboard, this will be a KeyboardEvent.


`disabled?: boolean` - Whether the toggle is disabled.




## `Tooltip`
[Components ⬆️](#components)
### Description
<span style="color: #3d80e3; font-weight: bold">@private</span>

You shouldn't be using this yourself. If you want to add a tooltip to an
element, wrap it in a `Tooltipped`.
### Props
`italic?: boolean`


`bold?: boolean`




## `Tooltipped`
[Components ⬆️](#components)
### Description
Displays a tooltip when the wrapper is hovered or receives focus. To be accessible,
the guidelines outlined [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
were followed as closely as possible.

This is a wrapper, and you should be aware of what you're wrapping and what the wrapper is in. See
the `inline` prop for more information on possible tweaks you may have to make to avoid invalid markup.
### Props
`tooltip: string` - The text to display for the tooltip.


`inline?: boolean = false` - (Optional, defaults to `false`) Whether the container for the wrapper uses an inline element
(span). This can be used for easy shorthand when you wrap an inline element with a tooltip, or
when this wrapper appears in an element where `div` is not a valid child, since by default
the wrapper is implemented with a `div`.

Note that setting this to `true` changes the wrapper from a `div` to a `span`. If you set this to `true`,
ensure you're wrapping only elements that can exist in a `span`.


`showDelayMs?: number = 500` - (Optional, defaults to `500`) The number of milliseconds that must pass
before the tooltip appears.


`hideDelayMs?: number = 250` - (Optional, defaults to `250`) The number of milliseconds that must pass
before the tooltip disappears. Note, it is recommended that you *DON'T*
make this less than 250. The delay exists partially to allow the user time to hover
over the tooltip to keep it alive. The tooltip remaining visible when
the tooltip itself is hovered is a requirement according to the Mozilla
accessibility guidelines for tooltips.


`disableWrapperFocus?: boolean = false` - (Optional, defaults to `false`) Whether the wrapper for the tooltip can be
focused. You should disable wrapper focus when the element you're giving a
tooltip to can receive focus on its own. Since the inner element can receive
focus, allowing the wrapper to have focus serves no purpose, but it makes
keyboard navigation more difficult.



