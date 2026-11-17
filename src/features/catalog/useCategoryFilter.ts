import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { CategoryFilter } from '@/types/catalog';
import { isCategoryFilter } from './filterProducts';

const PARAM = 'categoria';

interface Options {
  /**
   * `true`: el filtro vive en la URL (`?categoria=velas`), así es compartible
   * y sobrevive a recargas / navegación atrás-adelante.
   * `false`: estado local (útil en secciones embebidas como la del inicio).
   */
  syncWithUrl?: boolean;
}

export function useCategoryFilter({ syncWithUrl = false }: Options = {}) {
  const [params, setParams] = useSearchParams();
  const [localFilter, setLocalFilter] = useState<CategoryFilter>('all');

  const urlValue = params.get(PARAM);
  const urlFilter: CategoryFilter = isCategoryFilter(urlValue) ? urlValue : 'all';
  const active = syncWithUrl ? urlFilter : localFilter;

  const setFilter = useCallback(
    (next: CategoryFilter) => {
      if (!syncWithUrl) {
        setLocalFilter(next);
        return;
      }
      setParams(
        (prev) => {
          const copy = new URLSearchParams(prev);
          if (next === 'all') copy.delete(PARAM);
          else copy.set(PARAM, next);
          return copy;
        },
        { replace: true, preventScrollReset: true },
      );
    },
    [setParams, syncWithUrl],
  );

  return useMemo(() => [active, setFilter] as const, [active, setFilter]);
}
