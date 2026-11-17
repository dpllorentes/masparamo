import type { CSSProperties } from 'react';
import logoSrc from '@/assets/images/logomasparamo.png';
import { site } from '@/config/site';
import { cx } from '@/lib/cx';
import styles from './Logo.module.css';

interface Props {
  className?: string;
}

/** Logo +PARAMO; toma el color del texto que lo rodea (`currentColor`). */
export function Logo({ className }: Props) {
  return (
    <span
      className={cx(styles.logo, className)}
      style={{ '--logo-src': `url(${logoSrc})` } as CSSProperties}
      role="img"
      aria-label={site.name}
    />
  );
}
