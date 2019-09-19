# Todo MVC refactor to Stencil web components

There are three projects within the packages folder

todo-mvc-apps - this project is for the TodoApp applications we will be changing to use web components. Currently, there are two versions on for Vue and another for React.

todo-mvc-stencil-web-components - this project is where we will create todo web components written using Stencil

todo-mvc-cypress-tests - this project contains the integration tests for the TodoApp written using Cypress.io

To get set up using this repo is to run

```bash
npm install
npm run bootstrap
```

this will install the dependencies for all of the projects

## refactoring Todo MVC

Six components will be replaced in the Todo MVC Refactor

1. todo-count
2. todo-toggle
3. todo-filter
4. todo-input
5. todo-item
6. todo-list
