import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { buttonClass, type ButtonVariant } from './buttonClass';

interface ButtonLinkProps extends Omit<LinkProps, 'className'> {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

/** Botón-píldora del sistema que navega dentro de la SPA. */
export function ButtonLink({ variant, className, ...rest }: ButtonLinkProps) {
  return <Link className={buttonClass(variant, className)} {...rest} />;
}

interface ButtonAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

/** Botón-píldora del sistema para enlaces externos. */
export function ButtonAnchor({ variant, className, ...rest }: ButtonAnchorProps) {
  return <a className={buttonClass(variant, className)} {...rest} />;
}
