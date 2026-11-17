/**
 * Configuración global de la marca. Única fuente de verdad para datos
 * de contacto y textos que se repiten en varias vistas.
 */
export const site = {
  name: '+PARAMO',
  tagline: 'Regalos personalizados',
  slogan: 'Detalles que conectan.',
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE ?? '573225332037',
  instagram: {
    handle: '@masparamo',
    url: 'https://www.instagram.com/masparamo',
  },
  coverage: 'Bogotá y envíos nacionales',
} as const;

export const pageTitle = (title?: string) =>
  title ? `${site.name} | ${title}` : `${site.name} | ${site.tagline}`;
