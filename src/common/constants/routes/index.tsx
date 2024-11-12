import { ReactNode } from 'react';
import { MdUpdate } from 'react-icons/md';
import { ImMenu2 } from 'react-icons/im';

export interface IRoute {
  path: string;
  name: string;
  description?: string | ReactNode;
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
    path: '/with-menu',
    name: 'With menu',
    description: (
      <span>
        With menu. Press <ImMenu2 className="size-[20px] inline" />
      </span>
    ),
  },
  {
    path: '/update-data',
    name: 'Update data',
    description: (
      <span>
        Update data. Press <MdUpdate className="size-[20px] inline" />
      </span>
    ),
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
