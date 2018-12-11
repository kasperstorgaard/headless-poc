# Server #
Basic express server side rendered application

## Setup ##
First of all, let's install dependencies:
```
npm install
```

Next up, we want to generate key files and a project file in the `/secret` folder,
which is ignored from source control.
The build will look for these files and fail if they are not present.

To generate a certificate, use your preferred method, or run this:
```
openssl req -x509 -out secret/server.crt -keyout secret/server.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
When you are done, make sure to open the server.crt file and trust it.
You will probably also need to restart your browser for this to take effect.

Last thing is to add a project.json file to the `/secret` folder that contains your Kentico cloud id:
```
{
  "key": "2342340-totally-legit-id"
}
```

Then to start the server, simply run
```
npm start
```

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