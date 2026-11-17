/**
 * Importadores de las páginas. Se comparten entre la definición de rutas
 * (`lazy`) y los enlaces que precargan al pasar el cursor, así el chunk
 * ya está en caché cuando el usuario hace clic → navegación instantánea.
 */
export const loadHomePage = () => import('@/pages/HomePage/HomePage');
export const loadCatalogPage = () => import('@/pages/CatalogPage/CatalogPage');
export const loadNotFoundPage = () => import('@/pages/NotFoundPage/NotFoundPage');

export const preload = {
  home: loadHomePage,
  catalog: loadCatalogPage,
} as const;
