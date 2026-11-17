import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { useRouteMeta } from '@/hooks/useRouteMeta';
import { useScrollManager } from '@/hooks/useScrollManager';
import { Footer } from '../Footer/Footer';
import { SiteHeader } from '../SiteHeader/SiteHeader';
import { WhatsAppFab } from '../WhatsAppFab/WhatsAppFab';
import styles from './RootLayout.module.css';

export function RootLayout() {
  const { header } = useRouteMeta();
  const { pathname } = useLocation();
  const navigation = useNavigation();
  useScrollManager();

  return (
    <>
      <a className={styles.skip} href="#contenido">
        Saltar al contenido
      </a>
      {navigation.state === 'loading' && <div className={styles.progress} role="progressbar" aria-label="Cargando" />}
      <SiteHeader variant={header} />
      {/* La `key` reinicia la animación de entrada en cada cambio de ruta. */}
      <div key={pathname} className={styles.page}>
        <Outlet />
      </div>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
