'use client'

import { FC } from 'react'
import { Row } from '@tanstack/table-core'
import { flexRender } from '@tanstack/react-table'
import { Virtualizer } from '@tanstack/react-virtual'

import { useTableContext } from '@/common/components/common-table/providers'

/**
 * Table header component
 */
const TableBody: FC<{
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>
}> = ({ rowVirtualizer }) => {
  const { table } = useTableContext()
  const { rows } = table.getRowModel()

  return (
    <div
      className="relative grid"
      style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const row = rows[virtualRow.index] as Row<unknown>

        return (
          <div
            data-index={virtualRow.index}
            ref={(node) => rowVirtualizer.measureElement(node)}
            key={row.id}
            className="absolute flex w-full gap-[1rem] rounded-medium py-[0.5rem] pr-[1rem] hover:bg-table-hover"
            style={{ transform: `translateY(${virtualRow.start}px)` }}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <div
                  key={cell.id}
                  style={{ minWidth: cell.column.getSize() }}
                  className="scroll-bar-2 flex flex-1 items-center text-balance break-words first:ml-[5px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default TableBody
