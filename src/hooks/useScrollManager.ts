import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const positions = new Map<string, number>();
const MAX_HASH_ATTEMPTS = 30;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToHash(hash: string, smooth: boolean) {
  const id = decodeURIComponent(hash.slice(1));
  let attempts = 0;

  // Reintenta durante unos frames por si la sección aún se está montando.
  const tick = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: smooth && !prefersReducedMotion() ? 'smooth' : 'auto', block: 'start' });
      return;
    }
    if (++attempts < MAX_HASH_ATTEMPTS) requestAnimationFrame(tick);
  };
  tick();
}

/**
 * Gestión de scroll para la SPA:
 * - PUSH/REPLACE a otra ruta → arriba del todo.
 * - POP (atrás/adelante) → restaura la posición que tenía esa entrada.
 * - Enlaces con `#hash` → desplazamiento suave a la sección.
 * - Cambios solo de `?query` (p. ej. filtros) → no mueve la página.
 */
export function useScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // Guarda la posición de la entrada actual mientras el usuario hace scroll.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => positions.set(location.key, window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.key]);

  useLayoutEffect(() => {
    const samePath = prevPath.current === location.pathname;
    prevPath.current = location.pathname;

    if (navigationType === 'POP' && positions.has(location.key)) {
      window.scrollTo(0, positions.get(location.key) ?? 0);
      return;
    }
    if (location.hash) {
      scrollToHash(location.hash, samePath);
      return;
    }
    if (samePath) return;
    window.scrollTo(0, 0);
  }, [location.key, location.pathname, location.hash, navigationType]);
}
