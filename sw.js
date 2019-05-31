importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/109151ee4503c567b1ae.js",
    "revision": "6675e335370c1730b5d4e254b494b691"
  },
  {
    "url": "/_nuxt/2deaf16475ddf74f61ce.js",
    "revision": "b47310a31e094eacfcee289be7ddd520"
  },
  {
    "url": "/_nuxt/945970c18487a4131fef.js",
    "revision": "e4001ecdcae9d58be2572a1ebc261e7d"
  },
  {
    "url": "/_nuxt/ae3030bd33570d9111bd.js",
    "revision": "e4bf3343ea0ab2a5478fd2797894b4c2"
  },
  {
    "url": "/_nuxt/dcf0d5ec5cfa17376430.js",
    "revision": "f6f2a9bb964bafe4345a395492dc7843"
  }
], {
  "cacheId": "blockbook.ovh",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
