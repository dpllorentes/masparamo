import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { isRouteHandle, type RouteHandle } from '@/app/routeHandle';
import { pageTitle } from '@/config/site';

const FALLBACK: RouteHandle = { header: 'bar' };

/** Devuelve el `handle` de la ruta más profunda y sincroniza `document.title`. */
export function useRouteMeta(): RouteHandle {
  const matches = useMatches();
  const handle = [...matches].reverse().find((m) => isRouteHandle(m.handle))?.handle;
  const meta = isRouteHandle(handle) ? handle : FALLBACK;

  useEffect(() => {
    document.title = pageTitle(meta.title);
  }, [meta.title]);

  return meta;
}
