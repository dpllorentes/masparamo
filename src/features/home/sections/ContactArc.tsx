import { WhatsAppLink } from '@/components/ui';
import { site } from '@/config/site';
import styles from './ContactArc.module.css';

export function ContactArc() {
  return (
    <section className={styles.wrap} aria-labelledby="contacto-title">
      <div className={styles.arc}>
        <h2 className={styles.title} id="contacto-title">
          Hablemos de tu regalo
        </h2>
        <p className={styles.text}>
          Escríbenos y te respondemos con ideas y precios. {site.coverage}.
        </p>
        <WhatsAppLink variant="default" message="Hola +PARAMO, quiero hablar de un regalo.">
          Escribir por WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}
