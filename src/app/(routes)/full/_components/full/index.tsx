'use client';

import { FC } from 'react';
import {
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from '@tanstack/table-core';
import { useReactTable } from '@tanstack/react-table';

import CommonTable from '@/common/components/common-table';
import { baseFiltersStore, dataStore } from '@/common/stores';
import MenuTable from '@/common/components/common-table/components/shared/menu';

import { columData } from './data';

/**
 * Full table component
 */
const FullTable: FC = () => {
  const { updateData, updateTableEntities } = dataStore((state) => state);
  const { sorting, setSorting, globalFilter, setGlobalFilter, columnFilters, setColumnFilters } =
    baseFiltersStore((state) => state);

  /**
   * On row click
   * @param id
   */
  const onRowClick = (id: string): void => {
    alert(`Row id: ${id}`);
  };

  const table = useReactTable({
    data: updateTableEntities,
    columns: columData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    globalFilterFn: 'includesString',
    columnResizeMode: 'onChange',
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    state: { globalFilter, columnFilters, sorting },
    getRowId: (item) => String(item.id),
  });

  return (
    <CommonTable
      table={table}
      methods={{ onRowClick, onUpdateData: updateData }}
      params={{ excelName: 'full' }}
      components={{ menu: MenuTable }}
    />
  );
};

export default FullTable;
