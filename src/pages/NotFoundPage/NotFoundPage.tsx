import { ButtonLink } from '@/components/ui';

export default function NotFoundPage() {
  return (
    <main
      id="contenido"
      className="container"
      style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}
    >
      <div>
        <h1 style={{ fontSize: 'clamp(2.2rem,5.5vw,3.6rem)', marginBottom: 12 }}>Página no encontrada</h1>
        <p style={{ color: 'var(--muted)', margin: '0 0 22px' }}>
          El enlace que seguiste no existe o cambió de lugar.
        </p>
        <ButtonLink variant="solid" to="/">
          Volver al inicio
        </ButtonLink>
        <span style={{ display: 'inline-block', width: 10 }} />
        <ButtonLink variant="solid" to="/catalogo">
          Ver catálogo
        </ButtonLink>
      </div>
    </main>
  );
}
