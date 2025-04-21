---
title: ConfirmationDialog
description: Generated API documentation for ConfirmationDialog.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/dialogs/ConfirmationDialog.tsx#L45)

`extends` Omit<StructuredDialogProps, "buttons">

Props Inheritance Hierarchy: _Omit<StructuredDialogProps, "buttons">_

A special `StructuredDialog` that provides the user with a button to accept or reject a confirmation
of something. This is suitable when you'd like the user to verify they want to perform the action
that triggered the dialog. Usually, it's because the action has consequences that are difficult
or impossible to reverse, or it's a significant operation.

The dialog will automatically close if the handler for the action (`onAccept`/`onReject`) evaluates to `true`.

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

#### acceptButton?: _ConfirmationDialogButton_

The data for the button that represents accepting the confirmation. Defaults to
a button with text `Okay` that closes the dialog when clicked. Use `onAccept` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onAccept` rather than setting `acceptButton.buttonProps.onClick`, since
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

#### onAccept?: _Function_

What to do when the confirmation prompt is accepted.

---

#### onReject?: _Function_

What to do when the confirmation prompt is rejected.

---

#### rejectButton?: _ConfirmationDialogButton_

The data for the button that represents rejecting the confirmation. Defaults to
a button with text `Cancel` that closes the dialog when clicked. Use `onReject` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onReject` rather than setting `rejectButton.buttonProps.onClick`, since
that gives you more control over the autoclose operation.

---

#### title?: _string_