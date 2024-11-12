'use client';

import { FC } from 'react';

import { useTableContext } from '@/common/components/common-table/providers';

/**
 * Menu component
 * @constructor
 */
const MenuComponent: FC = () => {
  const { components, table } = useTableContext();

  if (!components?.menu) {
    return null;
  }

  return <components.menu table={table} />;
};

export default MenuComponent;
