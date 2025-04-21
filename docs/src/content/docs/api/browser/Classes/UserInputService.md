---
title: UserInputService
description: Generated API documentation for UserInputService.
---

`Class` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/browser/lib/services/user-input.service.ts#L7)

### Constructors

#### new UserInputService()

### Properties

#### `static` onKeyUp: _Event<UserInputKeyEventHandler>_

Triggered on the single instance where a key goes from being down to being
up.

By the time this is triggered, the service has been updated to reflect
the new key event.

---

#### `static` onKeyPressed: _Event<UserInputKeyEventHandler>_

Triggered continuously so long as a key is pressed.

By the time this is triggered, the service has been updated to reflect
the new key event.

---

#### `static` onKeyDown: _Event<UserInputKeyEventHandler>_

Triggered on the single instance where a key goes from being up to
being down.

By the time this is triggered, the service has been updated to reflect
the new key event.

### Methods

#### isKeyUp(key: _string_): _boolean_

##### Returns
Whether the specified key is currently released.

---

#### isKeyPressed(key: _string_): _boolean_

##### Returns
Whether the specified key is currently pressed.

---

#### isChordPressedExclusively(keys: _string[]_): _boolean_

##### Returns
Whether only the keys necessary for the specified chord are pressed.

---

#### isChordPressed(keys: _string[]_): _boolean_

##### Returns
Whether the specified chord is currently pressed. Note that other
keys could also be pressed. If you want to know if _only_ the keys necessary
for this chord are pressed, use UserInputService.isChordPressedExclusively.