# Plaza Sargento Lores — guía independiente

Guía independiente y sin fines de lucro desarrollada con Astro + Tailwind CSS + TypeScript, preparada para Cloudflare Workers.

## Requisitos
- Node.js 24.19.0
- pnpm 11.23.0

## Desarrollo
```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Dominio
El dominio se configura una sola vez en `astro.config.mjs`, constante `site`. Si se deja como cadena vacía, el build sigue funcionando, se omiten URLs absolutas y no se activa `@astrojs/sitemap`.

## Fuentes visuales
La fotografía real identificada para el proyecto es `Plaza Sargento Lores (Iquitos).jpg`, autor LLs, CC BY-SA 4.0, Wikimedia Commons. En el entorno de generación no fue posible descargar binarios externos por bloqueo de red; los JPG incluidos en `/public/images` son respaldos visuales locales para impedir imágenes rotas y deben reemplazarse por fotografías licenciadas antes de publicación si se exige fotografía documental estricta.
