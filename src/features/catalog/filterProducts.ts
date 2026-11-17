import { categories } from '@/data/categories';
import type { CategoryFilter, Product } from '@/types/catalog';

const validFilters = new Set<string>(categories.map((c) => c.id));

export function isCategoryFilter(value: string | null | undefined): value is CategoryFilter {
  return value != null && validFilters.has(value);
}

export function filterProducts(list: readonly Product[], filter: CategoryFilter): readonly Product[] {
  return filter === 'all' ? list : list.filter((p) => p.category === filter);
}
