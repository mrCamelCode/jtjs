**This project is a work in progress**

# JTJS

A collection of libraries written by a lover of JS/TS, built specifically to make loving JS/TS easier. Whip up working and beautiful prototypes in minutes instead of hours; complete full applications in weeks instead of months. Libraries included are:

## @jtjs/browser

Provides utilities useful for any browser and any framework (or lack thereof).

## @jtjs/data

Includes several useful data structure implementations that are absent from the JS standard API such as a LinkedList, Queues, and Stacks. Trees are planned to be added.

## @jtjs/theme

A style library that can give you a huge boost in getting your view up to snuff. Automatically incorporates any custom theming setup from @jtjs/view. These styles also include stylish input styling that doesn't harm the accessibility of the inputs and animations to keep your views looking sleek and modern.

## @jtjs/event

An object-oriented event implementation that makes it painless to incorporate event-driven systems in your application. You'll find these events used throughout JTJS.

## @jtjs/networking

A simple networking library that provides networking clients that can be used on the client and server side. The clients are simple enough to avoid stepping on your toes, but powerful enough to take care of the common boilerplate code associated with making network calls in JS.

## @jtjs/react

A library essential for any consumer of JTJS building an app with React. With extremely powerful components like `Flexbox` and hooks like `useBreakpoint` and `useTheme`, you can create professional and scalable UIs in moments without all the boilerplate. Also includes a full set of input components, and all components work seamlessly with JTJS' theming solution so you don't have to even think about how to implement that light/dark toggle you wanted. To take off even faster, full modern styling is available with the @jtjs/theme library so you don't have to make yet another Bootstrap app that looks like every other Bootstrap app (but you could if you wanted). All components are marked with a class for simple styling, whether you want to write your own or override any that you may have included with @jtjs/theme. 

In my own use of @jtjs/react, I've found it _significantly_  reduces the amount of boilerplate in my projects (no need to write all those basic components!), and drastically reduces the amount of custom styling I have to write to get my pages in the layout I want. Using `Flexbox` reduces the cognitive and work load of getting your layout to be how you want with props that let you describe your layout in plain English. 

> "A component should be helpful but focused, without any more markup than what's absolutely necessary. A wrapper component should be _at least_ as useful as the component it's wrapping."

That's the design philosophy of all components in this library. If it wraps a base component (like an input), it shouldn't be at the cost of that component's functionality or customizability. If you ever need to do something that a JTJS wrapper component doesn't have a nifty prop available for, no problem! You can always pass any props the base component takes.

## @jtjs/view

A library focused on providing convenient utilities for any view-based application, regardless of framework. This library includes the theming solution for JTJS that lets you add and switch between any number of custom color themes.
