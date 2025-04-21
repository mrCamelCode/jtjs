---
title: generateSelectOptions
description: Generated API documentation for generateSelectOptions.
---

`Function` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/react/lib/components/input/base/Select.tsx#L87)

---

generateSelectOptions(currentlySelectedValue: _T_, options: _(SelectOption<any> | SelectOptionGroup<any>)[]_, allowEmpty: _boolean_, allowEmptyAfterSelection: _boolean_): _NonNullable<SelectProps["options"]>_

---

Convenience function for generating your select options when you'd like to introduce the possibility of having
an empty option.

### Parameters

#### currentlySelectedValue: _T_

The value that's currently selected.

---

#### options: _(SelectOption<any> | SelectOptionGroup<any>)[]_

The options for the select.

---

#### allowEmpty: _boolean_

Whether an empty selection is available. The empty value will have a value of `''`.

---

#### allowEmptyAfterSelection: _boolean_

Whether the empty selection is available after a selection has been made.
This only has an affect if `allowEmpty` is true.