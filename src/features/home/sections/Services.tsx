import { preload } from '@/app/preload';
import { ButtonLink, WhatsAppLink } from '@/components/ui';
import { services } from '@/data/home';
import { formatPrice } from '@/lib/format';
import styles from './Services.module.css';

const prefetchCatalog = () => void preload.catalog();

export function Services() {
  return (
    <section className="section section--tinted" id="velas" aria-labelledby="servicios-title">
      <div className="container">
        <h2 className="section-title" id="servicios-title">
          Qué puedes personalizar
        </h2>
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.id} className={styles.card}>
              <img
                src={s.image}
                alt={s.imageAlt}
                style={s.imagePosition ? { objectPosition: s.imagePosition } : undefined}
                loading="lazy"
                decoding="async"
                width={600}
                height={330}
              />
              <h3>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              <p className={styles.price}>Desde {formatPrice(s.priceFrom)}</p>
              <WhatsAppLink variant="default" message={s.waMessage}>
                Cotizar
              </WhatsAppLink>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          {/* Navegación SPA a la página de catálogo; se precarga al pasar el cursor. */}
          <ButtonLink
            to="/catalogo"
            variant="solid"
            className={styles.toggle}
            onPointerEnter={prefetchCatalog}
            onFocus={prefetchCatalog}
          >
            Ver más
            <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
