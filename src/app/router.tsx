import type { ComponentType } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout/RootLayout';
import { RouteError } from '@/components/layout/RouteError/RouteError';
import { loadCatalogPage, loadHomePage, loadNotFoundPage } from './preload';
import type { RouteHandle } from './routeHandle';

/** Adapta un módulo con `default` export al contrato `lazy` de React Router. */
const asLazy = (loader: () => Promise<{ default: ComponentType }>) => async () => ({
  Component: (await loader()).default,
});

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        lazy: asLazy(loadHomePage),
        handle: { header: 'overlay' } satisfies RouteHandle,
      },
      {
        path: 'catalogo',
        lazy: asLazy(loadCatalogPage),
        handle: { title: 'Catálogo', header: 'bar' } satisfies RouteHandle,
      },
      {
        path: '*',
        lazy: asLazy(loadNotFoundPage),
        handle: { title: 'Página no encontrada', header: 'bar' } satisfies RouteHandle,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
