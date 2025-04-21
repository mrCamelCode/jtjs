---
title: '@jtjs/event'
description: A summary page of @jtjs/event.
---

[API](/api/event) | [Package](https://www.npmjs.com/package/@jtjs/event)

**Environment**: Any

`@jtjs/event` provides a simple but powerful object-oriented event implementation. It has no dependencies, is extremely lightweight, and is fully typed.

### How to Use

1. Create your event:

   ```ts
   import { Event } from '@jtjs/event';

   type ThemeChangeHandler = (themeName: string) => void;

   const onThemeChange = new Event<ThemeChangeHandler>();
   ```

1. Subscribe to your event...

   - Until you unsubscribe:

     ```ts
     onThemeChange.subscribe((themeName) => {
       console.log(`Theme changed to ${themeName}!`);
     });
     ```

   - For just one trigger:
     ```ts
     onThemeChange.once((themeName) => {
       console.log('Just once!');
     });
     ```

1. Trigger your event:

   ```ts
   onThemeChange.trigger('light');
   ```

1. Unsubscribe from your event...

   - With the return from `subscribe`:

     ```ts
     const unsub = onThemeChange.subscribe((themeName) => {
       console.log('beep boop');
     });

     unsub();
     ```

   - With the reference to your handler:

     ```ts
     const handler = (themeName: string) => {
       console.log('beep boop');
     };

     onThemeChange.subscribe(handler);

     onThemeChange.unsubscribe(handler);
     ```
