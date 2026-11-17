import { WhatsAppLink } from '@/components/ui';
import { occasions } from '@/data/home';
import styles from './Occasions.module.css';

export function Occasions() {
  return (
    <section className="section section--tinted" id="ocasiones" aria-labelledby="ocasiones-title">
      <div className="container">
        <h2 className="section-title" id="ocasiones-title">
          Regalos para cada ocasión
        </h2>
        <div className={styles.grid}>
          {occasions.map((o) => (
            <WhatsAppLink key={o.id} className={styles.card} message={o.waMessage}>
              <h3>{o.title}</h3>
              <p>{o.description}</p>
            </WhatsAppLink>
          ))}
        </div>
      </div>
    </section>
  );
}
