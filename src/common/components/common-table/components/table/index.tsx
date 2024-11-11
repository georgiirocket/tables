'use client';

import { FC } from 'react';

import useTableVirtualizer from '@/common/components/common-table/hooks/use-table-virtualizer';
import { useTableContext } from '@/common/components/common-table/providers';

import TableHeader from './header';
import TableBody from './body';

/**
 * Table component
 */
const Table: FC = () => {
  const { table } = useTableContext();
  const { tableRef, rowVirtualizer } = useTableVirtualizer({ table });

  return (
    <div ref={tableRef} className="size-full overflow-auto relative">
      <div className="grid">
        <TableHeader />
        <TableBody rowVirtualizer={rowVirtualizer} />
      </div>
    </div>
  );
};

export default Table;
