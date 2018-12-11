# Server #
Serves index page with application resources and handles cms calls on behalf of the client.

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

## Responsibilities ##
- Display index page with application component, global styles, fonts
- Api calls to cms