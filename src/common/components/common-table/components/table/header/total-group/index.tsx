'use client';

import { FC } from 'react';
import { clsx } from 'clsx';
import { HeaderGroup } from '@tanstack/table-core';

import Total from './total';

/**
 * Total group
 * @param headerGroup
 * @constructor
 */
const TotalGroup: FC<{ headerGroup: HeaderGroup<unknown> }> = ({ headerGroup }) => {
  return (
    <div className="w-full flex gap-[1rem]">
      {headerGroup.headers.map((header) => {
        if (!header.column.columnDef.meta?.isTotal) {
          return (
            <div
              className="flex flex-col flex-1 gap-[5px]"
              style={{ minWidth: header.getSize() }}
              key={`${header.id}_total_row`}
            />
          );
        }

        return (
          <div
            key={`${header.id}_total_row`}
            className={clsx('flex flex-col flex-1 gap-[5px]', 'overflow-auto scroll-bar-height-4')}
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
