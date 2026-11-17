import { WhatsAppLink } from '@/components/ui';
import { site } from '@/config/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{site.tagline}</h1>
        <p className={styles.slogan}>{site.slogan}</p>
        <WhatsAppLink variant="light" message="Hola +PARAMO, quiero cotizar un regalo.">
          Cotizar por WhatsApp
        </WhatsAppLink>
      </div>
    </header>
  );
}
