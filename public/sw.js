/* Plaza Sargento Lores PWA service worker.
 * Pages: network-first (fall back to cache when offline).
 * Static assets (images, css, js, fonts, manifest): cache-first.
 */
const CACHE = 'plaza-sargento-v1';
const STATIC = /\.(?:html?|css|js|mjs|json|webmanifest|png|jpe?g|gif|svg|webp|avif|woff2?|ico|otf|ttf)$/i;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (STATIC.test(url.pathname)) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && res.status === 200) {
          const copy = res.clone();
          (await caches.open(CACHE)).put(req, copy);
        }
        return res;
      } catch (e) {
        return cached || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.status === 200) {
        const copy = res.clone();
        (await caches.open(CACHE)).put(req, copy);
      }
      return res;
    } catch (e) {
      const cached = await caches.match(req);
      if (cached) return cached;
      return (await caches.match('/')) || Response.error();
    }
  })());
});
