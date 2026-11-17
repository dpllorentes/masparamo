import { describe, expect, it } from 'vitest';
import { filterProducts, isCategoryFilter } from '@/features/catalog/filterProducts';
import { products } from '@/data/products';
import { formatPrice } from './format';
import { buildWhatsAppUrl } from './whatsapp';

describe('formatPrice', () => {
  it('usa separador de miles colombiano', () => {
    expect(formatPrice(38000)).toBe('$38.000');
  });
});

describe('buildWhatsAppUrl', () => {
  it('codifica el mensaje y limpia el número', () => {
    expect(buildWhatsAppUrl('Hola & chao', '+57 322 533 2037')).toBe(
      'https://wa.me/573225332037?text=Hola%20%26%20chao',
    );
  });
});

describe('filterProducts', () => {
  it('devuelve todo con "all"', () => {
    expect(filterProducts(products, 'all')).toHaveLength(products.length);
  });

  it('filtra por categoría', () => {
    const velas = filterProducts(products, 'velas');
    expect(velas.length).toBeGreaterThan(0);
    expect(velas.every((p) => p.category === 'velas')).toBe(true);
  });

  it('valida filtros desconocidos', () => {
    expect(isCategoryFilter('mugs')).toBe(true);
    expect(isCategoryFilter('zapatos')).toBe(false);
    expect(isCategoryFilter(null)).toBe(false);
  });
});
