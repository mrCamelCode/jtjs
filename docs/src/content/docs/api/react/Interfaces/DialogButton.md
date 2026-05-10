---
title: DialogButton
description: Generated API documentation for DialogButton.
---

`Interface` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/a4753a6198a13acff4aff934659d53df8116570c/libs/react/lib/components/dialogs/dialog.model.ts#L3)

### Properties

#### text: _string_

---

#### beforeCloseOnClick?: _Function_

Runs if `closeDialogOnClick` is `true` and the dialog is processing the click
of this button.

---

#### buttonProps?: _Omit<ButtonProps, "children">_

---

#### closeDialogOnClick?: _boolean_

Whether the dialog should automatically close when the button is clicked.
The close will happen immediately. If you need to do some processing before
the close or want to block the close entirely, use `beforeCloseOnClick` in
conjunction with this property.