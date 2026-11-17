import { cx } from '@/lib/cx';
import type { CategoryFilter, Product } from '@/types/catalog';
import { ProductCard, type ProductCardVariant } from './ProductCard';
import styles from './ProductGrid.module.css';

interface Props {
  products: readonly Product[];
  /** Se usa como `key` para relanzar la animación de entrada al cambiar de filtro. */
  filter: CategoryFilter;
  variant?: ProductCardVariant;
}

export function ProductGrid({ products, filter, variant = 'compact' }: Props) {
  return (
    <>
      <div className={cx(styles.grid, variant === 'full' && styles.full)} aria-live="polite">
        {products.length === 0 ? (
          <p className={styles.empty}>No hay productos en esta categoría todavía.</p>
        ) : (
          products.map((p) => <ProductCard key={`${filter}-${p.id}`} product={p} variant={variant} />)
        )}
      </div>
      <p className={styles.note}>Valores de referencia. El precio final depende del diseño y la cantidad.</p>
    </>
  );
}
