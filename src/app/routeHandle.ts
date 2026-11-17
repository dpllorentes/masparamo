export type HeaderVariant = 'overlay' | 'bar';

/** Metadatos por ruta, leídos por el layout vía `useMatches()`. */
export interface RouteHandle {
  title?: string;
  header: HeaderVariant;
}

export function isRouteHandle(value: unknown): value is RouteHandle {
  return typeof value === 'object' && value !== null && 'header' in value;
}
