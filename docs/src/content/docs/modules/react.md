---
title: '@jtjs/react'
description: A summary page of @jtjs/react.
---

[API](/api/react) | [Package](https://www.npmjs.com/package/@jtjs/react)

**Environment**: Browser

`@jtjs/react` is a React component library that seeks to provide many of the base components every project needs so that you can get right to writing the business-driven parts of your application! 

### A Delightfully Usable Component Library

JTJS follows a number of design philosophies that keep components supremely usable:

#### Lightly wrap whenever possible 

Components resolve to simple JSX. As much as possible, a component is a 1:1 wrapping of something else, so you can easily treat the component as a single unit. Whenever available, native browser/HTML features are used instead of contriving some hacked-together component that emulates a `select` with 15 divs and 342 aria attributes. If `select` already exists, we just use it. 

Additionally, in cases where accessibility is needed because there _isn't_ a native backing for a common use case (like tooltips), JTJS handles the accessibility for you as much as it can. Provide what the component asks you to and you can breathe easy!

All of this significantly reduces complexity and makes your application functional and accessible by default without reinventing the wheel when there's already a perfectly good wheel available.

#### At least as usable as what's being wrapped

Components that logically extend other components (`Input`, `TextInput`, `AsyncButton`, `Flexbox`, `Collapsible` etc.) _don't swallow any props_. They seek to _augment and extend_ the functionality they're wrapping, not hide it. Isn't it incredibly annoying when you're using a component library and you can't pass a certain prop down to a component because they're destructuring 157 different props by name and manually passing them down and they _just so happened_ to miss the one you actually care about? It's definitely never happened to us ever. <span style="font-size: 0.5em; font-style: italic">quietly seethes</span>

`@jtjs/react` doesn't have that problem. If a JTJS component is logically a `button`, you can pass _anything_ to it that you could pass to a `button`. That includes forwarding `ref`s down when it makes sense to (so your form library that relies on `ref`s actually works!).

Components should exist to make your JSX more semantic, provide extended functionality relevant to specific use cases, and provide nice defaults. They _shouldn't_ exist to make a bunch of assumptions about how your application is structured.

#### Customizable 

All components in `@jtjs/react` are well-classed, giving you full control over custom styling. 

By default, `@jtjs/react` is decoupled from any specific styling. You have complete control over how the components appear to your users.

If you want a headstart on styling, you can include `@jtjs/theme` in your project and already have a beautiful app! For more specific needs, everything can be overridden.

#### Hella handy

How much time have you wasted writing custom CSS just for the sake of layout? What a pain! `@jtjs/react` provides extremely powerful and intuitive layout components like [Flexbox](/api/react/components/flexbox), [Grid](/api/react/components/grid), and others. You don't realize how much of your CSS is just finagling layouts until you remove it as a concern! Finally, you can vertically center that text with one line of code instead of hacking in some flaky solution you scraped together from 3 css-tricks articles and 2 SO posts. 

