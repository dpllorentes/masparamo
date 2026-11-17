import { categories } from '@/data/categories';
import { cx } from '@/lib/cx';
import type { CategoryFilter as Filter } from '@/types/catalog';
import styles from './CategoryFilter.module.css';

interface Props {
  value: Filter;
  onChange: (value: Filter) => void;
  className?: string;
}

export function CategoryFilter({ value, onChange, className }: Props) {
  return (
    <div className={cx(styles.group, className)} role="group" aria-label="Filtrar catálogo">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          className={styles.chip}
          aria-pressed={value === c.id}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
