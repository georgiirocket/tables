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

import { columData } from './data';

/**
 * Base table component
 */
const BaseTable: FC = () => {
  const { baseEntities } = dataStore((state) => state);
  const { sorting, setSorting, globalFilter, setGlobalFilter, columnFilters, setColumnFilters } =
    baseFiltersStore((state) => state);

  /**
   * Handle row click
   */
  const onRowClick = (rowId: string): void => {
    alert(`Row id: ${rowId}`);
  };

  const table = useReactTable({
    data: baseEntities,
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
    // ...settingHandlers,
    state: { globalFilter, columnFilters, sorting },
    getRowId: (item) => String(item.id),
  });

  return <CommonTable table={table} methods={{ onRowClick }} />;
};

export default BaseTable;