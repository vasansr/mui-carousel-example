# react-material-ui-carousel SSR example

This example is the same as the example in the GitHub repo of react-material-ui-carousel. The purpose is to demonstrate a issue in the library. I have added code for Server Side Rendering over and above the basic example.

## How to demonstrate

Install all dependencies:

`$ npm install`

Compile both server and browser app:

`$ npx webpack --mode=production`

Run the application

`$ node dist/server.bundle.js`

Point your browser to http://localhost:8000.

## The issue

1. Observe that the navigation button links are seen below the item, whereas they shouuld be on the sides.

[Screenshot](item-1-issue.png)

2. Swipe/click on next button to go to the second item. Observe that the item is shown one item-height below where it should be, covering the navigation buttons.

[Screenshot](item-1-issue.png)

## Conditions for the issue to appear:

1. The issue disappears if the webpack mode is changed to `development`. But this is not suitable for production deployments.

2. The issue also disappears if we use `render()`, rather than `hydrate()`. This is not recommended due to degraded performance.

## Environment

- Node.js version: reproducible on v12.19.0 as well as v16.13.1, not tested on other versions.
- Library version: 3.1.1
- Other dependents version can be found in `package.json`
