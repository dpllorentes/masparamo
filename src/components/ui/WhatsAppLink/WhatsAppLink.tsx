import type { AnchorHTMLAttributes } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { buttonClass, type ButtonVariant } from '../Button/buttonClass';

interface WhatsAppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Mensaje prellenado que se envía al chat. */
  message: string;
  /** Si se indica, se pinta con el estilo de botón-píldora. */
  variant?: ButtonVariant;
}

/**
 * Enlace a WhatsApp con mensaje prellenado. Usa un `href` real (accesible,
 * se puede abrir en otra pestaña o copiar) en lugar de interceptar el clic.
 */
export function WhatsAppLink({ message, variant, className, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={variant ? buttonClass(variant, className) : className}
      {...rest}
    >
      {children}
    </a>
  );
}
