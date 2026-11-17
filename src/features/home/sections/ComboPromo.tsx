import { WhatsAppLink } from '@/components/ui';
import { images } from '@/data/images';
import { cx } from '@/lib/cx';
import styles from './ComboPromo.module.css';

export function ComboPromo() {
  return (
    <section className="section" aria-labelledby="combo-title">
      <div className={cx('container', styles.split)}>
        <div>
          <h2 className={styles.title} id="combo-title">
            Regalos que se quedan
          </h2>
          <p className={styles.text}>
            Armamos combos con vela, mug y un detalle escrito a mano. Cuéntanos para quién es y para
            cuándo, y te mostramos el diseño antes de producir.
          </p>
          <WhatsAppLink variant="default" message="Hola +PARAMO, quiero armar un combo.">
            Armar mi combo
          </WhatsAppLink>
        </div>
        <img
          className={styles.image}
          src={images.combo}
          alt="Caja de regalo con vela y mug"
          loading="lazy"
          decoding="async"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
