import { cx } from '@/lib/cx';
import styles from './Button.module.css';

export type ButtonVariant = 'default' | 'light' | 'solid';

const variantClass: Record<ButtonVariant, string | undefined> = {
  default: undefined,
  light: styles.light,
  solid: styles.solid,
};

/** Clase del botón-píldora; reutilizable en cualquier elemento interactivo. */
export const buttonClass = (variant: ButtonVariant = 'default', extra?: string) =>
  cx(styles.btn, variantClass[variant], extra);
