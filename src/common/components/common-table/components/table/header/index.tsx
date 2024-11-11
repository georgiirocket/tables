'use client';

import { FC } from 'react';

import { useTableContext } from '@/common/components/common-table/providers';

import FilterHeaderCell from './filter-cell';
import TotalGroup from './total-group';

/**
 * Table header component
 */
const TableHeader: FC = () => {
  const { table, params } = useTableContext();
  const headerGroups = table.getHeaderGroups();

  return (
    <div className="grid sticky top-0 left-0 z-20 bg-table-header-color py-[0.5rem] pr-[1rem] gap-[0.5rem]">
      {headerGroups.map((headerGroup) => (
        <div key={headerGroup.id}>
          <div className="w-full flex gap-[1rem]">
            {params?.isCountColumn && (
              <div className="w-[100px] pl-[0.5rem] sticky left-0 to-0 bg-table-header-color z-20 flex items-center">
                #
              </div>
            )}
            {headerGroup.headers.map((header) => (
              <FilterHeaderCell key={header.id} header={header} />
            ))}
          </div>
          {params?.isTotalRow && <TotalGroup headerGroup={headerGroup} />}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
