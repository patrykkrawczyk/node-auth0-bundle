# node-auth0-bundle

Welcome!

This repositroy holds a bundled Auth0 Management API for Node.JS based on the official repository: https://github.com/auth0/node-auth0

If you ever faced issues with any of the transitive dependencies this is the way to go.

Solves issues like:

* `require function is used in a way, in which dependencies cannot be statically extracted`
* `formidable package errors`
* `Require is not a function`

To use it simply add to your project `node-auth0-bundle.js` file from the `dist` directory.

`import { ManagementClient } from './libs/node-auth0-bundle'`

`import { AuthenticationClient } from './libs/node-auth0-bundle'`
