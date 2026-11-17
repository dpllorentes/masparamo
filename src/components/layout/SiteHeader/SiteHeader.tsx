import { Link, NavLink } from 'react-router-dom';
import { preload } from '@/app/preload';
import type { HeaderVariant } from '@/app/routeHandle';
import { Logo, WhatsAppLink } from '@/components/ui';
import { site } from '@/config/site';
import { cx } from '@/lib/cx';
import styles from './SiteHeader.module.css';

const prefetchCatalog = () => void preload.catalog();
const prefetchHome = () => void preload.home();

interface Props {
  variant: HeaderVariant;
}

export function SiteHeader({ variant }: Props) {
  return variant === 'overlay' ? <OverlayNav /> : <BarNav />;
}

function OverlayNav() {
  return (
    <nav className={styles.overlay} aria-label="Principal">
      <div className={cx('container', styles.inner)}>
        <Link className={styles.logo} to="/" aria-label={`${site.name}, inicio`}>
          <Logo />
        </Link>
        <div className={styles.links}>
          <NavLink
            to="/catalogo"
            className={({ isActive }) => cx(styles.link, isActive && styles.active)}
            onPointerEnter={prefetchCatalog}
            onFocus={prefetchCatalog}
          >
            Catálogo
          </NavLink>
          <Link className={styles.link} to={{ pathname: '/', hash: '#ocasiones' }}>
            Ocasiones
          </Link>
          <Link className={styles.link} to={{ pathname: '/', hash: '#faq' }}>
            Preguntas
          </Link>
          <WhatsAppLink variant="light" message="Hola +PARAMO, quiero hacer un pedido.">
            Pedir
          </WhatsAppLink>
        </div>
      </div>
    </nav>
  );
}

function BarNav() {
  return (
    <nav className={styles.bar} aria-label="Principal">
      <div className={cx('container', styles.inner)}>
        <Link
          className={styles.logo}
          to="/"
          aria-label={`${site.name}, inicio`}
          onPointerEnter={prefetchHome}
          onFocus={prefetchHome}
        >
          <Logo />
        </Link>
        <Link className={styles.back} to="/" onPointerEnter={prefetchHome} onFocus={prefetchHome}>
          ← Volver al inicio
        </Link>
      </div>
    </nav>
  );
}
