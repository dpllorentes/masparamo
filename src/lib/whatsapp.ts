import { site } from '@/config/site';

/** Construye un enlace `wa.me` con el mensaje codificado. */
export function buildWhatsAppUrl(message: string, phone: string = site.whatsappPhone): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
