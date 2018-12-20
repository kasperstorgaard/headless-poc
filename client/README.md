# Client #
Renders the application through a set of pages and reusable components/styles.

## Setup ##

Before you install dependencies, you will also need to get a link to the server package, since the model types are defined there:
Go to the server folder, then run `npm link`.
Afterwards, go back to the client folder, and run `npm link headless-poc-server`.

Then, you can install dependencies like normal:
`npm install`

To start the development task, run:
```npm start```

This will kick off a webpack task that bundles up scripts, which are then served by client.

## Responsibilities ##
- provide global reusable style variables.
- provide global reusable "blocks" - small groups of BEM namespaced styles.
- render the application shell.
- render page-level components.
- client-side routing.
- service-worker caching logic.
- provide partial components that handle a certain subset of cms data.
- provide different app grid layouts to use on different pages.
- provide a webserver for presentation/documentation of the shared styles/components.

## TODO ##
- setup small webserver to showcase shared styles/components.
