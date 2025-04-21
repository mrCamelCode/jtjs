---
title: AcknowledgmentDialog
description: Generated API documentation for AcknowledgmentDialog.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/dialogs/AcknowledgmentDialog.tsx#L35)

`extends` Omit<StructuredDialogProps, "buttons">

Props Inheritance Hierarchy: _Omit<StructuredDialogProps, "buttons">_

A special `StructuredDialog` that provides the user with a button to acknowledge something. In contrast
to a `ConfirmationDialog`, an `AcknowledgmentDialog` doesn't give the user an option to reject the contents
of the dialog. These kinds of dialogs are useful for statements of fact that you want to be sure the user sees.

Some examples of such would be:
1. Legal notices that require acceptance.
1. Making the user aware of necessary cookies your site uses.
1. Warning the user of something on your site, like patterns that may affect those with epilepsy.

The dialog will automatically close if the handler for the action (`onAcknowledge`) evaluates to `true`.

### Properties

#### show: _boolean_

Whether the dialog should be showing. You should be using this to control when the dialog
is visible, as opposed to conditionally rendering.

##### Example
```tsx
// DO:
<Dialog show={someShowState} onClose={() => setSomeShowState(false)} />

// DON'T:
{someShowState && (<Dialog />)}
```

---

#### acknowledgeButton?: _AcknowledgmentDialogButton_

The data for the button that represents acknowledging the contents of the dialog. Defaults to
a button with text `Okay` that closes the dialog when clicked. Use `onAcknowledge` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onAcknowledge` rather than setting `acknowledgeButton.buttonProps.onClick`, since
that gives you more control over the autoclose operation.

---

#### hideBehaviour?: _HideBehaviour_

(Optional, defaults to HideBehaviour.Remove) How the dialog handles its children when it's not shown. If
HideBehaviour.Hide, the children of the dialog remain mounted when the dialog is hidden.
If HideBehaviour.Remove, the children of the dialog will be unmounted when the dialog is hidden.

Consider setting this to HideBehaviour.Hide if the children of the dialog need to maintain some kind of \
state in between separate showings of the dialog.

---

#### isModal?: _boolean_

Whether the dialog is a modal. A modal is a dialog that goes on top of the rest of the page in the center of the
screen regardless of where it exists in the DOM. Visually, everything behind the modal is darkened. Elements
behind the modal cannot be interacted with until the modal is closed.

---

#### onAcknowledge?: _Function_

What to do when the prompt is acknowledged.

---

#### title?: _string_