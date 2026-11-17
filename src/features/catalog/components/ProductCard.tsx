import { memo } from 'react';
import { WhatsAppLink } from '@/components/ui';
import { cx } from '@/lib/cx';
import { formatPrice } from '@/lib/format';
import type { Product } from '@/types/catalog';
import styles from './ProductCard.module.css';

export type ProductCardVariant = 'compact' | 'full';

interface Props {
  product: Product;
  variant?: ProductCardVariant;
}

function ProductCardBase({ product, variant = 'compact' }: Props) {
  const NameTag = variant === 'full' ? 'h3' : 'span';

  return (
    <figure className={cx(styles.card, variant === 'full' && styles.full)}>
      {product.image ? (
        <img
          className={styles.media}
          src={product.image}
          alt={product.imageAlt ?? product.name}
          style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
          loading="lazy"
          decoding="async"
          width={600}
          height={450}
        />
      ) : (
        <div
          className={cx(styles.media, styles.placeholder, styles[product.placeholder ?? 'salvia'])}
          role="img"
          aria-label={`${product.name}: foto próximamente`}
        >
          Foto próximamente
        </div>
      )}
      <figcaption className={styles.caption}>
        <NameTag className={styles.name}>
          {product.name}
          <br />
          <b className={styles.price}>{formatPrice(product.price)}</b>
        </NameTag>
        <WhatsAppLink
          className={styles.order}
          message={product.waMessage}
          aria-label={`Pedir ${product.name} por WhatsApp`}
        >
          Pedir
        </WhatsAppLink>
      </figcaption>
    </figure>
  );
}

export const ProductCard = memo(ProductCardBase);
