# Estado de entrega

El proyecto contiene la implementación Astro/Tailwind/TypeScript, páginas legales, SEO/Schema, mapa, identidad visual y recursos locales.

## Limitaciones del entorno de generación

1. El entorno de ejecución bloqueó DNS/salida de red hacia `registry.npmjs.org`, por lo que no fue posible ejecutar una instalación real con pnpm ni validar `pnpm check` / `pnpm build` en este entorno.
2. El mismo bloqueo impidió descargar los binarios originales de las fotografías CC BY-SA localizadas en Wikimedia Commons. Los JPG incluidos son respaldos visuales locales claramente identificados y deben sustituirse por las fotografías documentales indicadas en `PHOTO_CREDITS.md` antes de una publicación que exija fotografía real.
3. Debido a que pnpm no pudo ejecutarse, el `pnpm-lock.yaml` incluido refleja las versiones directas fijadas pero no pudo regenerarse/verificarse con resolución transitiva. No debe considerarse un lockfile de CI validado.

No se debe interpretar este paquete como una compilación CI aprobada hasta repetir los pasos de `SELF_CHECK.txt` en un entorno con acceso al registro npm y sustituir las imágenes de respaldo por los originales licenciados.
