'use client'

import { FC } from 'react'
import {
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from '@tanstack/table-core'
import { useReactTable } from '@tanstack/react-table'

import CommonTable from '@/common/components/common-table'
import { baseFiltersStore, dataStore } from '@/common/stores'

import { columData } from './data'

/**
 * With index db table component
 */
const WithFirstIndexColumnTable: FC = () => {
  const { baseEntities } = dataStore((state) => state)
  const {
    sorting,
    setSorting,
    globalFilter,
    setGlobalFilter,
    columnFilters,
    setColumnFilters,
  } = baseFiltersStore((state) => state)

  /**
   * On row click
   * @param id
   */
  const onRowClick = (id: string): void => {
    alert(`Row id: ${id}`)
  }

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
    state: { globalFilter, columnFilters, sorting },
    getRowId: (item) => String(item.id),
  })

  return <CommonTable table={table} methods={{ onRowClick }} />
}

export default WithFirstIndexColumnTable
