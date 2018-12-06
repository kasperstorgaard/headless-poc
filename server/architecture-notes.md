# Architecture notes #
Document to jot down thoughts and pro/cons of different approaches/decisions.

## Overall Approaches ##
- Server side rendering (SSR)
- Client side rendering (CSR)
- Hybrid SSR/CSR

## SSR ##
Fully server side rendered page, with a bit of js sprinkled for custom flows.

### PRO ###
- Fast fist load
- easy caching
- SEO just works
- Proven frameworks/patterns

### CON ###
- slower second page load
- harder to write custom flows
- potential performance hits
- less of an "app" feeling

## CSR ##
Fully client side rendered application in javascript.

### PRO ###
- App shell gives super fast initial load
- Easier to write complex ui behaviors
- App-like feel/transitions
- One language

### CON ###
- Caching not straightforward, needs service worker
- SEO requires custom setup
- Relative new apis/approach

## Hybrid ##
SSR initial load, hotswapping SSR partials from client,
client complex behaviors

### PRO ###
- Fast initial load
- SEO just works
- Separation of concerns: static pages on server,
  complex ui/component on client

### CON ###
- Needs custom routing setup, hotswap, partials
- Not well documented