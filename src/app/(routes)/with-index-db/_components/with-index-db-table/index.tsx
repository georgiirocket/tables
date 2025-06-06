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
import useSaveTableSetting from '@/common/components/common-table/hooks/use-save-table-setting'

import { columData } from './data'

/**
 * With index db table component
 */
const WithIndexDbTable: FC = () => {
  const { baseEntities } = dataStore((state) => state)
  const {
    sorting,
    setSorting,
    globalFilter,
    setGlobalFilter,
    columnFilters,
    setColumnFilters,
  } = baseFiltersStore((state) => state)

  const { isPendingSettings, settingState, settingHandlers } =
    useSaveTableSetting('with-index-db')

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
    ...settingHandlers,
    state: { ...settingState, globalFilter, columnFilters, sorting },
    getRowId: (item) => String(item.id),
  })

  return <CommonTable table={table} params={{ isPendingSettings }} />
}

export default WithIndexDbTable
