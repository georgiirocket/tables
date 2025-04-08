'use client'

import { FC } from 'react'
import { flexRender } from '@tanstack/react-table'

import { useTableContext } from '@/common/components/common-table/providers'

import TotalGroup from './total-group'

/**
 * Table header component
 */
const TableHeader: FC = () => {
  const { table } = useTableContext()
  const headerGroups = table.getHeaderGroups()

  const isTotalCount = headerGroups
    .map((group) => group.headers)
    .flat(1)
    .some((header) => header.column.columnDef.meta?.isTotal)

  return (
    <div className="sticky left-0 top-0 z-20 grid gap-[0.5rem] bg-table-header-color py-[0.5rem] pr-[1rem]">
      {headerGroups.map((headerGroup) => (
        <div key={headerGroup.id}>
          <div className="flex w-full items-center gap-[1rem]">
            {headerGroup.headers.map((header) => (
              <div
                key={header.id}
                data-header-table-id={header.id}
                className="flex flex-1 flex-col gap-[5px]"
                style={{ minWidth: header.getSize() }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </div>
            ))}
          </div>
          {isTotalCount && <TotalGroup headerGroup={headerGroup} />}
        </div>
      ))}
    </div>
  )
}

export default TableHeader
