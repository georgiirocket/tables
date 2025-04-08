'use client'

import { useMemo } from 'react'
import { getCoreRowModel } from '@tanstack/table-core'
import { useReactTable } from '@tanstack/react-table'

import useTableVirtualizer from '@/common/components/common-table/hooks/use-table-virtualizer'

export interface IDataValue {
  key: string
}

/**
 * Create data as array with object [{key: 'something'}]
 * For virtual filter items
 */
export const createFilterData = (data: string[]): IDataValue[] => {
  return data.map((item) => ({ key: item }))
}

const column = {
  accessorKey: 'key',
}

/**
 * Filter virtualizer
 */
const useFilterTable = (preData: string[]) => {
  const data = useMemo(() => createFilterData(preData), [preData])

  const table = useReactTable({
    data: data,
    columns: [column],
    getCoreRowModel: getCoreRowModel(),
  })

  const { tableRef, rowVirtualizer } = useTableVirtualizer({
    table: table as never,
    estimateSize: 30,
    staticHeight: 30,
  })

  return { table, tableRef, rowVirtualizer }
}

export default useFilterTable
