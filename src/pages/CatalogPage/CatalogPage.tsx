import { useMemo } from 'react';
import { WhatsAppLink } from '@/components/ui';
import { products } from '@/data/products';
import { CategoryFilter, filterProducts, ProductGrid, useCategoryFilter } from '@/features/catalog';
import styles from './CatalogPage.module.css';

export default function CatalogPage() {
  const [filter, setFilter] = useCategoryFilter({ syncWithUrl: true });
  const visible = useMemo(() => filterProducts(products, filter), [filter]);

  return (
    <>
      <div className={styles.head}>
        <h1>Catálogo</h1>
        <p>Elige tu pieza y escríbenos. Te mostramos el diseño antes de producir.</p>
      </div>

      <main id="contenido" className="container">
        <CategoryFilter className={styles.filter} value={filter} onChange={setFilter} />
        <ProductGrid products={visible} filter={filter} variant="full" />
      </main>

      <section className={styles.cta} aria-labelledby="cta-title">
        <h2 id="cta-title">¿No encuentras lo que buscas?</h2>
        <WhatsAppLink
          variant="solid"
          message="Hola +PARAMO, quiero cotizar algo que no está en el catálogo."
        >
          Escríbenos
        </WhatsAppLink>
      </section>
    </>
  );
}
