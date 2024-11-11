'use client';

import { FC } from 'react';
import { clsx } from 'clsx';
import { HeaderGroup } from '@tanstack/table-core';

import { useTableContext } from '@/common/components/common-table/providers';

import Total from './total';

/**
 * Total group
 * @param headerGroup
 * @constructor
 */
const TotalGroup: FC<{ headerGroup: HeaderGroup<unknown> }> = ({ headerGroup }) => {
  const { params } = useTableContext();

  return (
    <div className="table-header-group">
      {params?.isCountColumn && <div className="table-header-numeral" />}
      {headerGroup.headers.map((header) => {
        if (!header.column.columnDef.meta?.isTotal) {
          return (
            <div
              className="table-header-cell"
              style={{ minWidth: header.getSize() }}
              key={`${header.id}_total_row`}
            />
          );
        }

        return (
          <div
            key={`${header.id}_total_row`}
            className={clsx('table-header-cell', 'table-header-total-cell')}
            style={{ minWidth: header.getSize() }}
          >
            <Total columnId={header.column.id as string} />
          </div>
        );
      })}
    </div>
  );
};

export default TotalGroup;
