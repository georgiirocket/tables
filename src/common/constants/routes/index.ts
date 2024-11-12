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
    description: 'Row index (clickable)',
  },
  {
    path: '/with-total-row',
    name: 'With total row',
    description: 'Counting in a number column',
  },
  {
    path: '/many-entities',
    name: 'Many entities',
    description: '1000 entities (virtual scroll)',
  },
  {
    path: '/full',
    name: 'Full',
    description: 'Full functionally',
  },
];
