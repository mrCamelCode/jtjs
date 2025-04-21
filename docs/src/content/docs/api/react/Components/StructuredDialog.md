---
title: StructuredDialog
description: Generated API documentation for StructuredDialog.
---

`Component` | [Source Code](https://github.com/mrCamelCode/jtjs-react/blob/0e141e63e22c212c71ce52ba40f0472cc9028516/lib/components/dialogs/StructuredDialog.tsx#L23)

`extends` DialogProps

Props Inheritance Hierarchy: _ComponentPropsWithRef<"dialog">_ -> _DialogProps_

Base component for a dialog with a standard structure. A structured dialog has, from top to bottom:

1. An optional (though strongly recommended) title. This should describe what the dialog is for.
2. An area for your content.
3. An area for buttons. These buttons could be anything you need. Some examples would be a "Cancel" button to cancel
any actions done in the dialog or an "Okay" button for a confirmation dialog, etc.

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

#### buttons?: _DialogButton[]_

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

#### title?: _string_