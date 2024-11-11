'use client';

import { FC } from 'react';

import { useTableContext } from '@/common/components/common-table/providers';

import FilterCell from './filter-cell';
import TotalGroup from './total-group';

/**
 * Table header component
 */
const TableHeader: FC = () => {
  const { table, params } = useTableContext();
  const headerGroups = table.getHeaderGroups();

  return (
    <div className="table-header">
      {headerGroups.map((headerGroup) => (
        <div key={headerGroup.id}>
          <div className="table-header-group">
            {params?.isCountColumn && <div className="table-header-numeral">#</div>}
            {headerGroup.headers.map((header) => (
              <FilterCell key={header.id} header={header} />
            ))}
          </div>
          {params?.isTotalRow && <TotalGroup headerGroup={headerGroup} />}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
