---
title: UserActivityService
description: Generated API documentation for UserActivityService.
---

`Class` | [Source Code](https://github.com/mrCamelCode/jtjs/blob/ddfaeb1a2c9bf793372bb41076f65f452b124091/libs/browser/lib/services/user-activity.service.ts#L15)

Provides tracking and listening for user activity. Useful for detecting when the
user isn't actively doing something on the page.

### Constructors

#### new UserActivityService()

### Properties

#### `static` onChangeActivityState: _Event<OnChangeActivityStateListener>_

Event that is invoked when the user's activity changes from being active to inactive, or
vice versa.

---

#### `static` onActivity: _Event<OnActivityListener>_

Event that is invoked whenever user activity is detected. Note that any subscribers
to this event will be triggered every single time there's activity. So, should the user
move their mouse, subscribers will be triggered for every move detected by the browser
along the user's mouse's path.

Activity is triggered when the user moves their mouse, clicks their mouse, or upon releasing a keypress.

### Accessors

#### `static` activityTimeoutDuration: _number_

---

#### `static` activityState: _ActivityState_