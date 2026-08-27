import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Único punto de configuración del dominio. Puede dejarse como '' sin romper el build.
const site = 'https://plazasargento.com';

export default defineConfig({
  site: site || undefined,
  output: 'server',
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
