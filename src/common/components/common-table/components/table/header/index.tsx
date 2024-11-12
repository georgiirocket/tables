'use client';

import { FC } from 'react';
import { flexRender } from '@tanstack/react-table';

import { useTableContext } from '@/common/components/common-table/providers';

import TotalGroup from './total-group';

/**
 * Table header component
 */
const TableHeader: FC = () => {
  const { table } = useTableContext();
  const headerGroups = table.getHeaderGroups();

  const isTotalCount = headerGroups
    .map((group) => group.headers)
    .flat(1)
    .some((header) => header.column.columnDef.meta?.isTotal);

  return (
    <div className="grid sticky top-0 left-0 z-20 bg-table-header-color py-[0.5rem] pr-[1rem] gap-[0.5rem]">
      {headerGroups.map((headerGroup) => (
        <div key={headerGroup.id}>
          <div className="w-full flex gap-[1rem] items-center">
            {headerGroup.headers.map((header) => (
              <div
                key={header.id}
                className="flex flex-col flex-1 gap-[5px]"
                style={{ minWidth: header.getSize() }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
            ))}
          </div>
          {isTotalCount && <TotalGroup headerGroup={headerGroup} />}
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
