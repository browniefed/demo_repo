<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Intro to React
===

## Questions/Issues

* ?

## Background

* Cycle of Thin and Thick Clients
	* Mainframe days - "dumb terminal"
	* Rise of PC (Windows95) - "client-server", "thick-client" (windows apps)
	* Rise of Internet - "dumb browser", server rendered pages
	* Rise of Mobile and HTML5 - "web app", powerful client
	* Next?
		* Everything is a client/server, nodes on the Internet
			* Realtime, connected
		* What class of server do you need?
		* IoT - not just for humans :)

* Single Page Applications
	* View changes are programmatic, browser not refreshing
	* Talk to servers

* Frontend Libraries and Frameworks
	* What do they do?
		* Render and Manipulate the DOM
	* But what do they help me do?
		* Keep the DOM up to date
		* Respond to user interactions
	* Reactive programming
		* Offer developers API for declaring or describing:
			* how the data and html should be combined (interpolation)
			* data changes
		* Syncing data to UI happens "automagically"

* JavaScript (, HTML, CSS)
	* New language features
	* Optimizations and other production enhancements
	* Requires a build system
	* Requires a server to run development

* End result for "Modern Front End Development":
	1. Amount and complexity of programming logic for the app is great
		* Advanced JavaScript
		* Modularity and Organization
	1. Build system layer
	1. Application layer
		* React offers a whole new paradigm
	1. Let focus on build or app, but not both. 
	1. App more relevent to start with. Then you can care about details of build system
	1. Enter `create-react-app`...

## Why React?
* JS FTW!
* Community
* Build System

## Today's Learning Objectives

* Use `create-react-app` to develop and run a React app
* Use JavaScript and `jsx` to render to DOM
* Use jsx as a javascript expression in conjunction with plain JavaScript
* Understand core React concepts: 
    * JSX "html in JavaScript"
    * `state` and `props`
    * Components
    * Render cycle

## Overview

### JSX
* Gets transpiled to JavaScript (that creates vdom)
* Try [babeljs.io/repl](http://babeljs.io/repl) to see what JSX gets turned into
* Offers declarative construct on top of React.createElement calls
* Enables full usage of Javascript
* Any normal JS expressions may be used
	* Variables, closures, etc.
	* Calling other functions
* Write valid jsx
	* tags (xml)
	* [To the Docs!](https://facebook.github.io/react/docs/introducing-jsx.html)
	* [To the Docs Again!](https://facebook.github.io/react/docs/jsx-in-depth.html)

### ReactDOM.render

* Render content to DOM
* (Re-Render content to DOM, but probably don't need to...)

### Key Concepts

* Manage `state` and `props`
* Data flows down, events flow up
* Components
    * "Dumb" components are pure functions that take `props`
    * `extends Component`
        * Need state
        * Need life cycle methods (not today)
    * `extends PureComponent`
        * (Probably not today)
* Understand React render cycle

### React rendering

* Render process
    * Virtual DOM
    * Tree Diff ([Reconciliation](https://facebook.github.io/react/docs/reconciliation.html))
    * Update DOM
* Rerender is same process
* Lists
    * Using `.map()` to handle lists of things
    * Using `key` to map between data and DOM
* What is effect on rendering do to data changes?
    * We will explore in depth...

## Agenda

* Use snapshot testing to test component outputs
	* Using `react-test-renderer`
	* Using `enzyme`
* Testing state changes
	* Use component API via `.instance()`
	* Also have `.setState()` and `.setProps()`
	* Trigger callbacks by calling function

## Agenda

* Build a movie app with master detail
* Go over image gallery lab

# Prop Types, Immutability

## Agenda

* Use propTypes to assert and validate expected props
    * (defaultProps)
* Spread Operator
* Copy Props to State
* Component "Mounting", `key` and changes
* Component LifeCycle
    * mount vs props update
* Use immutability to change data "the react way"
* Handle env variables we don't want to check in
* Container Components separate:
    * fetching data
    * rendering data



## Agenda

* Forms and editing data
* Uncontrolled components "Pull the value"
    * form `onSubmit`
    * `ref`
* Controlled components
    * all changes handled with state change
    * matching `value` set and `onChange`
* Examples

## React `this.children`

* Markup
* Functions

## Agenda

* `this.children`
    * HTML
    * "with" pattern Control Component

## Agenda

* React Router v4
    * `Router`
        * Wrapper for entire app under control of the "Router"
        * Usually `BrowserRouter`
            * Server needs to handle various paths as `index.html`
        * `HashRouter` for "static"
    * `Link`
        * Used to cause the route to change
        * Use the `to` attribute
        * Use `match` param to link dynamically
    * `Route`
        * Dynamic rendering based on the "path" of the current url
        * Injects `match` prop automagically!
        * `path` matched "starts with"
            * doesn't include query part
            * use `exact` to match exact
        * Use `match` param to link dynamically
    * `Switch`
        * Groups a set of Routes allowing only to match
        * Otherwise each Route evaluates independently
        * Don't need if alternatives are mutually exclusive
        * Can provide "default `Route` with no path
        * Can include `Redirect`
    * `Router` rendering
        1. `component` - specify a valid `function` or `class` name
        1. `render` - supply a function
    * Params
        * "Capture" parts of the url as params
        * Familiar `:id` syntax
        * Accessible via `match.params.id`
        * Always a `string`
    * Subroutes
        * Use `match.url`
        * recurse ftw!
    * `Redirect`
        * return from a render method to "redirect"
        * or redefine an existing route
    * `Prompt`
        * Conditionally prevents navigation away from a route
    * Wrapping `Route` in component
        * `Route` can be nested, don't have to be together
    * Multiple `Route` components can exist across app the update different
    parts of the app

## Agenda

* CSS in a Component world
    * per-component css
* scss (sass) 
    * [setup](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
        
        * ~~we loose hot reloading :(~~
        * use VSCode settings to not show css files
        * remember, you still import the `.css` file in the component
        
    * nesting FTW!
    * variables
    * importing
    * (functions and more!)
* What about scoping?
    * this is the big challenge/800lb gorilla
    * [eject?](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)
    * [CSS Modules FTW!](https://glenmaddern.com/articles/css-modules)
* What about css in js?
    * [styled components](https://www.styled-components.com/) FTW!
    * [getting started](https://github.com/kitze/create-react-app-styled-components)


## Redux

![flow](https://julienrenaux.fr/wp-content/uploads/2016/05/redux_diagram.png)

[`react-redux` - Redux for React](http://redux.js.org/docs/basics/UsageWithReact.html)

### Three Principals

1. Single source of truth
    > The state of your whole application is stored in an object tree within a single store.
1. State is read-only
    > The only way to change the state is to emit an action, an object describing what happened.
1. Changes are made with pure functions
    > To specify how the state tree is transformed by actions, you write pure reducers.

### Store

* Single store for the app
* Create using:
    ```js
    const store = createStore(reducer);
    ```
* But what is reducer???
    * Reducer takes `state` and `action`
    * Returns new state ("reduces" state based on action)
* Use `const CONST` because actions are used in both:
    * reducer (to know "what" action)
    * actions (returned as `type`)
* "connect" to component (via container)
    * `mapStateToProps` for each new state (from the store) what should the props be?
    * `dispatch` the things that sends ("dispatches") "action" requests
        * Usage: `dispatch(action())`
        * `mapDispatchToProps` what "actions" aka eventHandlers should be passed to the component (container)?
        * helper: `bindActionCreators`
        * if omitted, `dispatch` is passed directly as a prop

## Redux

* Why?
    * Avoid bugs in complex apps
    * State maintenance enforced as separate layer than view
    * Simplified data model (single store)
    * Enforce "Smart" vs "Dumb" Components 
    * Redux goodies: time travel, undo, etc.

* Redux is simple, moving parts are complex
* Not part of react, just an app state management library

### Core API

#### Store

1. Combination of state and reducers (which take actions)
1. State is immutable

* `createStore(reducer[, initialState, applyMiddleware])`
    * optional: `initialState`, `applyMiddleware`
* Store methods are generally handled by adapter to the view (`react-redux`):
    * `dispatch` - send an action to the store reducer
    * `subscribe(listener)` - be notified when store state "changes"
    * `getState()` - get the current store state

So, we need a reducer...

#### Reducers

Perform discrete change of store (by creating a new state) based on an action. 

Best practice in react/redux is immutability: Create a new state object.

```js
function reducer(state, action) {
    // choose based on action
    switch(action.type) {

    }
    // best practice (and for multiple reducers) return state
    return state // or use default on switch
}
```

Very simple `counter` example

#### Actions

Must use `type`, other props are up to you, but "standard" is to use `payload`)

#### Back to Reducers

Don't need to be in one file. Use `combineReducers`. These are "segmented" by part of the
store that you need. They don't have access (by default) to rest of store. 

(Typically this is a good thing, but we'll see with thunks and async where it makes sense, and then provide a way to pass more data from store if needed.)

**BUT**, all actions still flow through all reducers because one action may require changes to multiple parts of the state.

```js
// file: ./reducers/index.js

import { combineReducers } from 'redux';
// sibling files in "./reducers":
import stores from './stores';
import store from './store';
import pets from './pets';

export default combineReducers({
  stores,
  store,
  pets
});

// file: ./index.js
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

```

Multiple reducers can respond to the same action. 

TODO Example `HIDE_COMPLETED`:
1. `settings` reducer creates new state of `setting.showCompleted`
1. `todos` reducer creates new state of `visibleTodos`

#### Middleware

Use `applyMiddleware` to add middleware to your dispatch

* middleware can intercept or modify each action
* you probably won't create, but use via `npm i <middleware>`

Three levels of "functions":
1. middleware definition (`store`)
1. returned function for chaining (`next`)
1. function that takes each action (`action`)
    
* `logger` example
* [`thunk` middleware](https://github.com/gaearon/redux-thunk) is the answer for async!
    * Allows us to specify a function `dispatch => {}` as an action
    * That function gets called with dispatch and then we can do 
    multiple calls at multiple times
    * Full signature is `(dispatch, getState) => {}`

## Auth

Steps:
* Server
  * User model
  * Auth Routes
  * (protect with `ensureAuth` middleware) but lets start with getting token
* App
  * Store
    * Add user, userError state to the store
    * Reducers for auth workflows:
      * `user` - track the logged in user
      * `token` - track our token
      * `userError` - an errors in the auth process
    * Added `constants` (based on what we came up with in reducers)
    * Added tests for `reducers`
    * Added `actions`
      * async actions based on authenticating and getting user
      * `verify`, `signin`, `signup`, `signout`
    * Add some Routing logic and signin form
    * Add new reducers to root reducer

# Additional possible topics

## Create a component library

## Tour of cool react component


    




