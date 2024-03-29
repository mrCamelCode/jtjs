**Disclaimer**: These docs are auto-generated from data produced by
[react-docgen](https://github.com/reactjs/react-docgen). react-docgen
occasionally struggles with some TS syntax. In the cases where the docgen
couldn't correctly discover a type, you'll see `??` in place of the type.
The docgen also isn't great when it comes to displaying unions, function signatures, and arrays.

Arrays will be shown as `Array`. JTJS always types its arrays, so look to your IDE
for more type information on those arrays.

That being said, JTJS is fully typed. If you ever need further details
on something you see in these docs, you can use the hints from your IDE of choice to
get more robust type information.

Separately, these docs currently only include documentation on components.
This library also exports a number of hooks to make your life easier. If you're curious
about those, just look at code completion for function names starting with `use` in your IDE of choice.
    
# Components
- [AcknowledgmentDialog](#acknowledgmentdialog)

- [AsyncButton](#asyncbutton)

- [BaseLabelledInput](#baselabelledinput)

- [Button](#button)

- [Checkbox](#checkbox)

- [Collapsible](#collapsible)

- [ColorInput](#colorinput)

- [ConfirmationDialog](#confirmationdialog)

- [Contentbox](#contentbox)

- [Dialog](#dialog)

- [Flexbox](#flexbox)

- [FormDialog](#formdialog)

- [FormGroup](#formgroup)

- [Heading](#heading)

- [Icon](#icon)

- [InlineFeedbackMessage](#inlinefeedbackmessage)

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

- [StructuredDialog](#structureddialog)

- [Table](#table)

- [Text](#text)

- [TextInput](#textinput)

- [ThemeToggle](#themetoggle)

- [Toggle](#toggle)

- [Tooltip](#tooltip)

- [Tooltipped](#tooltipped)
## `AcknowledgmentDialog`
[Components ⬆️](#components)
### Description
A special `StructuredDialog` that provides the user with a button to acknowledge something. In contrast
to a `ConfirmationDialog`, an `AcknowledgmentDialog` doesn't give the user an option to reject the contents
of the dialog. These kinds of dialogs are useful for statements of fact that you want to be sure the user sees.

Some examples of such would be:
1. Legal notices that require acceptance.
1. Making the user aware of necessary cookies your site uses.
1. Warning the user of something on your site, like patterns that may affect those with epilepsy.

The dialog will automatically close if the handler for the action (`onAcknowledge`) evaluates to `true`.
### Props
`acknowledgeButton?: Omit` - The data for the button that represents acknowledging the contents of the dialog. Defaults to
a button with text `Okay` that closes the dialog when clicked. Use `onAcknowledge` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onAcknowledge` rather than setting `acknowledgeButton.buttonProps.onClick`, since
that gives you more control over the autoclose operation.


`onAcknowledge?: DialogButton['beforeCloseOnClick']` - What to do when the prompt is acknowledged.




## `AsyncButton`
[Components ⬆️](#components)
### Description
A specialized button that assumes that its `onClick` handler is async and will wait for it to finish. While waiting,
the button is disabled.

While the async task is running, the button will have the `jtjs-async-button-working` class attached to it if you'd
like to assign special styles for that state.
### Props
`enableMouseTracking?: boolean` - (Optional, defaults to `false`) Whether the position of the mouse is tracked when it's over the button.
This can be useful in creating effects with the background of the button that are based on the mouse
position, but could be expensive if you have a lot of other things going on in your app.

If you want to use the mouse position yourself, the current position of the mouse can be tracked in the CSS
as variables scoped to the button. The variables are `--jtjs-mouse-pos-x` and `--jtjs-mouse-pos-y`.


`onChangeMousePosition?: signature` - What to do when the position of the mouse changes while hovering over the button. Only triggered when
`enableMouseTracking` is `true`.

@param mousePosition - The current mouse position, relative to the bounding box of the button. Coordinates of (-1, -1)
imply that the mouse is no longer over the button.


`isPerformingAsyncTask?: boolean = false` - Whether the async button should behave as though it's performing its async task. This will be used in conjunction
with any async `onClick` and the button will show as performing its async task if an `onClick` handler is running
or this is `true`.




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


`error?: string`


`warn?: string`


`info?: string`




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

@param mousePosition - The current mouse position, relative to the bounding box of the button. Coordinates of (-1, -1)
imply that the mouse is no longer over the button.




## `Checkbox`
[Components ⬆️](#components)
### Description
Wraps the base input component with a default `type` of `"checkbox"`.
### Props
`onChangeChecked?: signature` - Handler for when the user attempts to change the value of the checkbox.

@param checked - What the user wants the current checked value to be.
@param event - The original simulated event.




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


`collapseBehaviour?: HideBehaviour = HideBehaviour.Remove` - (Optional, defaults to {@link HideBehaviour.Remove}) How the Collapsible hides its content when collapsed.


`defaultIsCollapsed?: boolean` - Whether the collapsible starts collapsed. This will only apply if the Collapsible is uncontrolled. If you're
setting `isCollapsed` to control the Collapsible, just make your initial value for `isCollapsed` the default
you want.


`isCollapsed?: boolean` - Whether the collapsible is currently collapsed. Setting this makes the Collapsible controlled and you
must keep this value updated. Use `onChangeCollapsed` to listen for state change requests.


`onChangeCollapsed?: signature` - What to do when the user indicates they want to change whether the Collapsible is collapsed.

@param isCollapsed - Whether the Collapsible should be collapsed.




## `ColorInput`
[Components ⬆️](#components)
### Props
`onChangeColor?: signature` - Handler for when the user changes the color of the input.

@param color - The color, as a hex string. Note that browsers do not support an alpha channel
for the color input.
@param event - The original event.




## `ConfirmationDialog`
[Components ⬆️](#components)
### Description
A special `StructuredDialog` that provides the user with a button to accept or reject a confirmation
of something. This is suitable when you'd like the user to verify they want to perform the action
that triggered the dialog. Usually, it's because the action has consequences that are difficult
or impossible to reverse, or it's a significant operation.

The dialog will automatically close if the handler for the action (`onAccept`/`onReject`) evaluates to `true`.
### Props
`acceptButton?: Omit` - The data for the button that represents accepting the confirmation. Defaults to
a button with text `Okay` that closes the dialog when clicked. Use `onAccept` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onAccept` rather than setting `acceptButton.buttonProps.onClick`, since
that gives you more control over the autoclose operation.


`rejectButton?: Omit` - The data for the button that represents rejecting the confirmation. Defaults to
a button with text `Cancel` that closes the dialog when clicked. Use `onReject` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onReject` rather than setting `rejectButton.buttonProps.onClick`, since
that gives you more control over the autoclose operation.


`onAccept?: DialogButton['beforeCloseOnClick']` - What to do when the confirmation prompt is accepted.


`onReject?: DialogButton['beforeCloseOnClick']` - What to do when the confirmation prompt is rejected.




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




## `Dialog`
[Components ⬆️](#components)
### Description
Base component for a dialog, with an option for whether it's a modal. Use the `show` prop to control whether the
dialog is currently visible.

This dialog component gives you the most control over what's in the dialog, but that also means you're responsible
for setting up the structure of the contents of the dialog. If you're looking for a component that handles more of
the common dialog use cases for you, it's recommended to use the other dialog components, like
`ConfirmationDialog` and `AcknowledgmentDialog`. If you want some structure to a custom dialog but don't want to
implement all of that yourself, consider using `StructuredDialog`.

**Note**: The use of dialogs in an application should be minimal. They're generally unfriendly to accessibility and tend
to look bad on mobile. If you're considering using a dialog/modal, you should seriously consider your design
and evaluate whether the use of a dialog/modal is really a requirement. With that said, if you do decide you want this,
JTJS does what it can to make the dialog itself accessible and friendly to the browser.
### Props
`show: boolean` - Whether the dialog should be showing. You should be using this to control when the dialog
is visible, as opposed to conditionally rendering.

@example
```tsx
// DO:
<Dialog show={someShowState} onClose={() => setSomeShowState(false)} />

// DON'T:
{someShowState && (<Dialog />)}
```


`isModal?: boolean = false` - Whether the dialog is a modal. A modal is a dialog that goes on top of the rest of the page in the center of the
screen regardless of where it exists in the DOM. Visually, everything behind the modal is darkened. Elements
behind the modal cannot be interacted with until the modal is closed.


`hideBehaviour?: HideBehaviour = HideBehaviour.Remove` - (Optional, defaults to {@link HideBehaviour.Remove}) How the dialog handles its children when it's not shown. If
{@link HideBehaviour.Hide}, the children of the dialog remain mounted when the dialog is hidden.
If {@link HideBehaviour.Remove}, the children of the dialog will be unmounted when the dialog is hidden.

Consider setting this to {@link HideBehaviour.Hide} if the children of the dialog need to maintain some kind of \
state in between separate showings of the dialog.




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




## `FormDialog`
[Components ⬆️](#components)
### Description
A special `StructuredDialog` that provides the user with a button to cancel the form and abandon it.
Your application shouldn't save or submit any information in this event.

Because your form would exist within the dialog content you specify and forms are highly implementation-specific,
JTJS doesn't offer a submit button by default with this dialog. This component exists largely for convenience
and making your JSX semantic when you do decide to put a form in a dialog.

It's likely you'll want to close the dialog after the user successfully submits your form.
To do so, keep a `ref` to the `FormDialog` and pass it to the `closeDialog` function.
### Props
`cancelButton?: Omit` - The data for the button that represents cancelling the form. Defaults to
a button with text `Cancel` that closes the dialog when clicked. Use `onCancel` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onCancel` rather than setting `cancelButton.buttonProps.onClick`, since
that gives you more control over the autoclose operation.


`onCancel?: DialogButton['beforeCloseOnClick']` - What to do when the form is abandoned.




## `FormGroup`
[Components ⬆️](#components)
### Description
A light wrapper around a `fieldset`. Used to group related form controls and inputs together.
### Props
`inlineItems?: boolean = false` - (Optional, defaults to `false`) Whether the items in the group should be inline.
If this is `false`, each item in the group will be on its own line.


`error?: string`


`warn?: string`


`info?: string`




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

@example
```tsx
<Icon iconType="solid" icon="address-card" />
```


`iconType?: union = 'solid'` - (Optional, defaults to `'solid'`) The type of icon. This affects the style of the icon pulled from FontAwesome.




## `InlineFeedbackMessage`
[Components ⬆️](#components)
### Description
Feedback for the user. Useful in forms and in reaction to user actions.
### Props
`italic?: boolean`


`bold?: boolean`


`messageType: InlineFeedbackMessageType` - The type/severity of the message's contents.




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

@param checked - What the user wants the current checked value to be.
@param event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition = LabelPosition.After` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




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

@param selectedValues - The names of the checkboxes that should be checked.
@param selectedValue - The name of the checkboxes that was checked.
@param event - The original simulated event.


`labelProps?: ComponentPropsWithoutRef = {}`


`label?: ?? = ''`


`labelPosition?: ?? = LabelPosition.Before`


`labelTextProps?: ?? = {}`




## `LabelledColorInput`
[Components ⬆️](#components)
### Props
`onChangeColor?: signature` - Handler for when the user changes the color of the input.

@param color - The color, as a hex string. Note that browsers do not support an alpha channel
for the color input.
@param event - The original event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledInput`
[Components ⬆️](#components)
### Props
`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledMaskedMultilineTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

@param treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
@param rawText - The raw input text with no filtering.
@param event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {@link maskText}. Because this component is intended
to allow multiline text, your regex does _not_ need to explicitly allow newlines.

@example
```ts
const onlyNumbersMask = /\d/;
```


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledMaskedTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

@param treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
@param rawText - The raw input text with no filtering.
@param event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {@link maskText}.

@example
```ts
const onlyNumbersMask = /\d/;
```


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledMultilineTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

@param text - The text of the input.
@param event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledRadio`
[Components ⬆️](#components)
### Props
`onChangeChecked?: signature` - Handler for when the user attempts to change the checked value of this radio button.


`label?: string`


`labelPosition?: LabelPosition = LabelPosition.After` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




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

@param optionValue - The value of the option that was selected.
@param event - The original simulated event.


`labelProps?: ComponentPropsWithoutRef = {}`


`label?: ?? = ''`


`labelPosition?: ?? = LabelPosition.Before`


`labelTextProps?: ?? = {}`




## `LabelledSelect`
[Components ⬆️](#components)
### Props
`options?: Array` - The options to show in the dropdown.


`onChangeSelection?: signature` - Handler for when the user attempts to change their selection in the dropdown.

@param optionValue - The value of the option that was selected from the dropdown.
@param event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledTextInput`
[Components ⬆️](#components)
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

@param text - The text of the input.
@param event - The original simulated event.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps`


`error?: string`


`warn?: string`


`info?: string`




## `LabelledToggle`
[Components ⬆️](#components)
### Props
`defaultIsOn?: boolean`


`isOn?: boolean` - Whether the toggle is currently on.


`onToggle?: signature` - Handler for when the user tries to change whether the toggle is on.

@param isOn - The state the user is trying to put the toggle in.
@param event - The original simulated event. If the user interaced with the
toggle via a click, this will be a MouseEvent. If the user interacted with
the toggle via the keyboard, this will be a KeyboardEvent.


`disabled?: boolean` - Whether the toggle is disabled.


`label?: string`


`labelPosition?: LabelPosition` - What position the label text appears relative to the input.


`labelProps?: LabelProps = {}`


`labelTextProps?: InlineTextProps = {}`


`error?: string`


`warn?: string`


`info?: string`




## `Link`
[Components ⬆️](#components)
### Props
`external?: boolean = false` - (Optional, defaults to `false`) Whether the link is external. An external
link will be accompanied by a small icon if using JTJS' styling.

Will also request that the browser open the link in a new tab. This can be
disabled with `disableExternalNewTab`.


`disableExternalNewTab?: boolean = false` - (Optional, defaults to `false`) Whether the feature of opening links marked
`external` in a new tab should be disabled.




## `LoadIndicator`
[Components ⬆️](#components)
### Description
Default load indicator. Resolves to `span`s inside a `div` container.

Note that this component has no visual appearance without styling. You must style this element for it
to have any appearance. `@jtjs/theme` includes styles for this element if you don't want to write
your own, or want a base to work from.

If you'd like to style the component yourself, the structure of the resolved markup is:
```
.jtjs-loading-dots-container
 .jtjs-loading-dot.jtjs-loading-dot-1
 .jtjs-loading-dot.jtjs-loading-dot-2
```


## `LoadView`
[Components ⬆️](#components)
### Description
A wrapper that will show its content based on its `isLoading` prop.
### Props
`isLoading: boolean` - Whether the content of the load view is loading. When `true`, the `LoadIndicator` component will be
shown to the user (if no `loadingComponent` is provided). When `false`, the children of the view
will be displayed as-is.


`loadingComponent?: ReactNode = <LoadIndicator />` - (Optional, defaults to `LoadIndicator`) What to show to the user when the view is loading.


`useSimpleLoadIndicator?: boolean = false` - (Optional, defaults to `false`) Whether to use a simple load indicator that's just an {@link InlineText} that says
`Loading...`. This option can be useful if you're not using `@jtjs/theme` since the default {@link LoadIndicator}
used by the `LoadView` has no appearance without styling (be it from `@jtjs/theme` or your own custom styling).

If this is `true`, it will supersede anything passed to `loadingComponent`.

@example
```tsx
// Will display: Loading...
<LoadView useSimpleLoadIndicator isLoading />

// Will display: Loading...
<LoadView useSimpleLoadIndicator loadingComponent={<MyVeryCoolAndIntricateLoadingIndicator />} />

// Will display nothing unless you're either using `@jtjs/theme` or you have your own styling for the LoadIndicator's
// resolved HTML.
<LoadView isLoading />
```




## `MaskedMultilineTextInput`
[Components ⬆️](#components)
### Description
Receives user input in the form of text. Allows masking the input to limit accepted characters.

You can choose whether you control this component, but if you don't control it, the component will
control the underlying input for you. This allows a provided mask to still apply to
the user input.
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

@param treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
@param rawText - The raw input text with no filtering.
@param event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {@link maskText}. Because this component is intended
to allow multiline text, your regex does _not_ need to explicitly allow newlines.

@example
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

@param treatedText - The input text after going through all the necessary filtering.
This includes applying the mask (if provided) and removing any newlines if the input is not multiline.
@param rawText - The raw input text with no filtering.
@param event - The original simulated event.


`mask?: RegExp` - Mask to apply to the input. The masking is applied using {@link maskText}.

@example
```ts
const onlyNumbersMask = /\d/;
```




## `MultilineTextInput`
[Components ⬆️](#components)
### Description
A light wrapper around a `textarea`.
### Props
`onChangeText?: signature` - Handler for when the user attempts to change the input.

@param text - The text of the input.
@param event - The original simulated event.


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

@param optionValue - The value of the option that was selected from the dropdown.
@param event - The original simulated event.




## `StructuredDialog`
[Components ⬆️](#components)
### Description
Base component for a dialog with a standard structure. A structured dialog has, from top to bottom:

1. An optional (though strongly recommended) title. This should describe what the dialog is for.
2. An area for your content.
3. An area for buttons. These buttons could be anything you need. Some examples would be a "Cancel" button to cancel
any actions done in the dialog or an "Okay" button for a confirmation dialog, etc.
### Props
`show: boolean` - Whether the dialog should be showing. You should be using this to control when the dialog
is visible, as opposed to conditionally rendering.

@example
```tsx
// DO:
<Dialog show={someShowState} onClose={() => setSomeShowState(false)} />

// DON'T:
{someShowState && (<Dialog />)}
```


`isModal?: boolean` - Whether the dialog is a modal. A modal is a dialog that goes on top of the rest of the page in the center of the
screen regardless of where it exists in the DOM. Visually, everything behind the modal is darkened. Elements
behind the modal cannot be interacted with until the modal is closed.


`hideBehaviour?: HideBehaviour` - (Optional, defaults to {@link HideBehaviour.Remove}) How the dialog handles its children when it's not shown. If
{@link HideBehaviour.Hide}, the children of the dialog remain mounted when the dialog is hidden.
If {@link HideBehaviour.Remove}, the children of the dialog will be unmounted when the dialog is hidden.

Consider setting this to {@link HideBehaviour.Hide} if the children of the dialog need to maintain some kind of \
state in between separate showings of the dialog.


`title?: string = ''`


`buttons?: Array = []`




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

@example
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

@param text - The text of the input.
@param event - The original simulated event.




## `ThemeToggle`
[Components ⬆️](#components)
### Description
A specialty control for toggling between two theme selections (light and dark).

Can be controlled or uncontrolled. If you intend to control the component, you must provide
a `mode` that's not `undefined` and it must be a {@link ThemeMode}.
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
to have any appearance. `@jtjs/theme` library contains default styling for Toggles you can
use as a base.

If you'd like to style the component yourself, the structure of the resolved markup is:
```
.jtjs-toggle.jtjs-toggle-{on/off}
  .jtjs-toggle-knob
```
### Props
`defaultIsOn?: boolean`


`isOn?: boolean` - Whether the toggle is currently on.


`onToggle?: signature` - Handler for when the user tries to change whether the toggle is on.

@param isOn - The state the user is trying to put the toggle in.
@param event - The original simulated event. If the user interaced with the
toggle via a click, this will be a MouseEvent. If the user interacted with
the toggle via the keyboard, this will be a KeyboardEvent.


`disabled?: boolean` - Whether the toggle is disabled.




## `Tooltip`
[Components ⬆️](#components)
### Description
@private

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



