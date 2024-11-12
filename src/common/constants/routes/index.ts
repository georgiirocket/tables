export interface IRoute {
  path: string;
  name: string;
  description?: string;
}

/**
 * Routes
 */
export const routes: IRoute[] = [
  {
    path: '/',
    name: 'Base',
    description: 'Base implementation',
  },
  {
    path: '/with-index-db',
    name: 'With index db',
    description: 'Change order column and reload page',
  },
  {
    path: '/with-first-index-column',
    name: 'With first index',
  },
  {
    path: '/many-entities',
    name: 'Many entities',
  },
  {
    path: '/full',
    name: 'Full',
  },
];
