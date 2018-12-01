# Server #
Basic express server side rendered application

## Setup ##
Pretty basic node setup, just
`npm install`,
and then
`npm start` to start the server.

## Background ##
The server in this project sits between the cms and the client.
It fetches all relevant data for the user from CMS, and renders it into views.
Those views/partials are then cached until the CMS content changes.
It doesn't handle complex client interactions and ui though,
as that is handled by the client separately.

## Responsibilities ##
- Routing
- Rendering views
- Pulling in client-side scripts/styles