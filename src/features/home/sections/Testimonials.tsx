import { testimonials } from '@/data/home';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className="section section--tinted" aria-labelledby="testimonios-title">
      <div className="container">
        <h2 className="section-title" id="testimonios-title">
          Lo que dicen nuestros clientes
        </h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <blockquote key={t.id} className={styles.quote}>
              <p>“{t.quote}”</p>
              <cite>
                {t.author}, {t.city}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
