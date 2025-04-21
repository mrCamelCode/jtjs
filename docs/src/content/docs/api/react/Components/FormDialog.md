---
title: FormDialog
description: Generated API documentation for FormDialog.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/dialogs/FormDialog.tsx#L34)

`extends` Omit<StructuredDialogProps, "buttons">

Props Inheritance Hierarchy: _Omit<StructuredDialogProps, "buttons">_

A special `StructuredDialog` that provides the user with a button to cancel the form and abandon it.
Your application shouldn't save or submit any information in this event.

Because your form would exist within the dialog content you specify and forms are highly implementation-specific,
JTJS doesn't offer a submit button by default with this dialog. This component exists largely for convenience
and making your JSX semantic when you do decide to put a form in a dialog.

It's likely you'll want to close the dialog after the user successfully submits your form.
To do so, keep a `ref` to the `FormDialog` and pass it to the `closeDialog` function.

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

#### cancelButton?: _FormDialogButton_

The data for the button that represents cancelling the form. Defaults to
a button with text `Cancel` that closes the dialog when clicked. Use `onCancel` to
control what to do when this button is clicked and control whether the dialog should
close when the button is clicked.

Prefer using `onCancel` rather than setting `cancelButton.buttonProps.onClick`, since
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

#### onCancel?: _Function_

What to do when the form is abandoned.

---

#### title?: _string_