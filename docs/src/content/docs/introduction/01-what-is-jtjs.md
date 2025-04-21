---
title: What is JTJS?
description: An explanation of JTJS.
---

Well gee, I'm glad you asked!

JTJS is a suite of development libraries written in TypeScript. The suite is developed and maintained by [JT](https://github.com/mrCamelCode) (hence the name). It was created because JT got sick of recreating the same base things over and over in almost every project he started and decided it was high time to create libraries to handle those responsibilities. The suite has since grown to cover a decent amount of ground, especially if you're planning to make a React application.

JTJS libraries live under the [@jtjs](https://www.npmjs.com/search?q=%40jtjs) namespace and are intended to be modular. Each library focuses on a particular set of concerns. Some modules (like [@jtjs/react](https://www.npmjs.com/package/@jtjs/react)) have peer dependencies on other JTJS packages since some concerns overlap. In the specific case of `@jtjs/react`, the peer dependencies exist to give nice React wrappers around services that exist in other JTJS modules that are commonly useful in a React application. But, should you not want those particular features of `@jtjs/react`, you don't have to use them!

 As much as possible, JTJS attempts to have no dependencies outside of other JTJS modules. 