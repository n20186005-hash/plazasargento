import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Único punto de configuración del dominio. Puede dejarse como '' sin romper el build.
const site = 'https://plazasargento.com';

export default defineConfig({
  site: site || undefined,
  output: 'server',
  trailingSlash: 'always',
  session: false,
  adapter: cloudflare({ imageService: 'passthrough' }),
  integrations: site ? [sitemap({ filter: page => !page.includes('/404') })] : [],
  vite: { plugins: [tailwindcss()] }
});
