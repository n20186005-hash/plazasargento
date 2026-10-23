import astroWorker from '@astrojs/cloudflare/entrypoints/server';

// Astro middleware runs after the adapter's static-asset fast path.
// Keep the existing apex protocol policy ahead of that path as well.
export default {
  fetch(request, env, context) {
    const url = new URL(request.url);
    if (url.hostname === 'plazasargento.com' && url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.href, 308);
    }
    return astroWorker.fetch(request, env, context);
  },
};
