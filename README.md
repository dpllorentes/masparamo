# +PARAMO — Regalos personalizados

SPA en **React 18 + Vite + TypeScript** con navegación fluida (React Router 6, data router).
Conserva el diseño final aprobado: inicio "Regalos personalizados" y página de "Catálogo".

## Empezar

Requiere Node.js 18+ (recomendado 20 LTS).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build de producción en dist/
npm run preview    # sirve dist/
npm test           # pruebas unitarias (vitest)
npm run lint
```

Copia `.env.example` a `.env` para cambiar el número de WhatsApp.

## Arquitectura

```
src/
├─ app/                 Composición: router, rutas lazy, precarga, metadatos de ruta
├─ config/site.ts       Datos de marca y contacto (única fuente de verdad)
├─ data/                Contenido tipado: productos, servicios, ocasiones, FAQ, imágenes
├─ types/               Modelos de dominio
├─ lib/                 Utilidades puras (WhatsApp, formato de precio, cx) + tests
├─ hooks/               useScrollManager, useRouteMeta
├─ components/
│  ├─ ui/               Primitivas del sistema: Button, WhatsAppLink
│  └─ layout/           RootLayout, SiteHeader (overlay | bar), Footer, WhatsAppFab, RouteError
├─ features/
│  ├─ catalog/          Filtro por categoría (sincronizado con la URL), ProductCard, ProductGrid
│  └─ home/sections/    Hero, Services, ComboPromo, Occasions, CatalogPreview, Testimonials, FAQ, ContactArc
├─ pages/               Páginas de ruta (cargadas bajo demanda)
└─ styles/global.css    Tokens de marca y utilidades
```

### Decisiones clave

- **Rutas lazy + precarga al pasar el cursor**: cada página es un chunk; los enlaces
  al catálogo/inicio lo descargan en `pointerenter`/`focus`, así el clic es instantáneo.
  Una barra de progreso fina aparece si la descarga tarda.
- **Scroll gestionado**: arriba al cambiar de ruta, restauración al volver atrás,
  desplazamiento suave a `#ocasiones` / `#faq`, y sin saltos al cambiar filtros.
- **Filtro en la URL** (`/catalogo?categoria=velas`): compartible y compatible con atrás/adelante.
  El inicio usa el mismo componente con estado local.
- **Header por ruta**: cada ruta declara `handle.header` (`overlay` sobre el hero o `bar`)
  y `handle.title` para `document.title`.
- **CSS Modules + tokens**: estilos aislados por componente, mismos colores, tipografías,
  radios y breakpoints del diseño original.
- **WhatsApp con `href` real**: accesible, abrible en otra pestaña, sin interceptar clics.
- **Despliegue SPA**: incluye `public/_redirects` (Netlify) y `vercel.json` para que
  las rutas profundas funcionen al recargar.
