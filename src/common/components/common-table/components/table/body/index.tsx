'use client';

import { FC } from 'react';
import { Row } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';
import { clsx } from 'clsx';
import { Virtualizer } from '@tanstack/react-virtual';

import { useTableContext } from '@/common/components/common-table/providers';

import RowCellSticky from './row-cell-sticky';

/**
 * Table header component
 */
const TableBody: FC<{ rowVirtualizer: Virtualizer<HTMLDivElement, Element> }> = ({
  rowVirtualizer,
}) => {
  const { table, params } = useTableContext();
  const { rows } = table.getRowModel();

  return (
    <div className="grid relative" style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const row = rows[virtualRow.index] as Row<unknown>;
        const rowIndex = virtualRow.index + 1;

        return (
          <div
            data-index={virtualRow.index}
            ref={(node) => rowVirtualizer.measureElement(node)}
            key={row.id}
            className="w-full flex absolute py-[0.5rem] pr-[1rem] gap-[1rem] hover:bg-table-hover rounded-medium"
            style={{ transform: `translateY(${virtualRow.start}px)` }}
          >
            {params?.isCountColumn && <RowCellSticky id={row.id} rowIndex={rowIndex} />}
            {row.getVisibleCells().map((cell) => {
              return (
                <div
                  key={cell.id}
                  style={{ minWidth: cell.column.getSize() }}
                  className={clsx(
                    'flex flex-1 items-center break-words first:ml-[5px] scroll-bar-2',
                    'text-balance',
                    {
                      '!text-nowrap !overflow-x-auto': params?.isTextNowrap,
                    },
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableBody;
