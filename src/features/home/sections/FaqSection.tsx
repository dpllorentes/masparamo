import { faqs } from '@/data/home';
import styles from './FaqSection.module.css';

export function FaqSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 className="section-title" id="faq-title">
          Preguntas frecuentes
        </h2>
        <div className={styles.list}>
          {faqs.map((f) => (
            <details key={f.id} className={styles.item}>
              <summary className={styles.summary}>{f.question}</summary>
              <p className={styles.answer}>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
