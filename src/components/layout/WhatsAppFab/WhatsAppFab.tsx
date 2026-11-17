import { WhatsAppLink } from '@/components/ui';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon/WhatsAppIcon';
import styles from './WhatsAppFab.module.css';

export function WhatsAppFab() {
  return (
    <WhatsAppLink
      className={styles.fab}
      message="Hola +PARAMO, quiero cotizar un regalo."
      aria-label="Escribir por WhatsApp"
      title="Escribir por WhatsApp"
    >
      <WhatsAppIcon size={30} />
    </WhatsAppLink>
  );
}
