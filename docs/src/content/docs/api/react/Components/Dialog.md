---
title: Dialog
description: Generated API documentation for Dialog.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/dialogs/Dialog.tsx#L53)

`extends` ComponentPropsWithRef<"dialog">

Props Inheritance Hierarchy: _ComponentPropsWithRef<"dialog">_

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