'use client'

import { FC } from 'react'
import { CellContext } from '@tanstack/table-core'
import { FaFolder } from 'react-icons/fa'

import { useTableContext } from '@/common/components/common-table/providers'

/**
 * Count cell
 * @param context
 * @constructor
 */
const CountCell: FC<CellContext<any, any>> = ({ cell }) => {
  const { row } = cell.getContext()
  const id = cell.getValue() as string
  const { methods } = useTableContext()

  const isCanClick = typeof methods?.onRowClick === 'function'

  /**
   * Handle row click
   */
  const handleRowClick = (): void => {
    void methods?.onRowClick?.(id)
  }

  return (
    <div className="flex items-center gap-2">
      {isCanClick && (
        <FaFolder
          className="size-[18px] cursor-pointer"
          onClick={handleRowClick}
        />
      )}
      <span>{row.index + 1}</span>
    </div>
  )
}

export default CountCell
