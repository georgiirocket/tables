'use client';

import { Column, Row } from '@tanstack/table-core';
import { ChangeEvent, FC } from 'react';
import { Switch } from '@heroui/switch';

import { createNewExcelFilterValue } from '@/common/components/common-table/helpers/excel-filters';

import useFilterTable from './use-filter-table';

interface IFilterTable {
  column: Column<any, any>;
  sortedUniqueValues: string[];
}

/**
 * Filter column table component
 */
const FilterColumnTable: FC<IFilterTable> = ({ column, sortedUniqueValues }) => {
  const excelFilters = (column.getFilterValue() ?? []) as string[];

  const { table, tableRef, rowVirtualizer } = useFilterTable(sortedUniqueValues as string[]);

  const { rows } = table.getRowModel();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, value } = e.target;

    column.setFilterValue(
      createNewExcelFilterValue(value, checked, column.getFilterValue() as string[]),
    );
  };

  return (
    <div ref={tableRef} className="w-full h-[180px] overflow-auto relative">
      <div className="w-full pr-[10px]" style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const row = rows[virtualRow.index] as Row<unknown>;
          const visibleCells = row.getVisibleCells();

          return (
            <div
              key={row.id}
              className="absolute will-change-transform"
              data-index={virtualRow.index}
              ref={(node) => rowVirtualizer.measureElement(node)}
              style={{ transform: `translateY(${virtualRow.start}px)` }}
            >
              {visibleCells.map((cell) => {
                const item = cell.getValue() as string;
                const isSelected = excelFilters.find((excelItem) => excelItem === item);

                return (
                  <div
                    key={cell.id}
                    className="w-full h-[30px] grid grid-cols-[auto_1fr] items-center"
                  >
                    <Switch
                      id={cell.id}
                      size="sm"
                      value={item}
                      isSelected={Boolean(isSelected)}
                      onChange={handleChange}
                    />
                    <p className="overflow-hidden text-ellipsis text-nowrap">{item}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColumnTable;
