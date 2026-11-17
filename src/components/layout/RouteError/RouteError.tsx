import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { buttonClass } from '@/components/ui';
import { Footer } from '../Footer/Footer';

/** Pantalla de último recurso si una ruta falla (p. ej. un chunk no carga). */
export function RouteError() {
  const error = useRouteError();
  const detail = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : null;

  return (
    <>
      <main
        className="container"
        style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}
      >
        <div>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: 12 }}>Algo salió mal</h1>
          <p style={{ color: 'var(--muted)', margin: '0 0 22px' }}>
            {detail ?? 'No pudimos cargar esta página. Intenta de nuevo.'}
          </p>
          <Link className={buttonClass('solid')} to="/" reloadDocument>
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
