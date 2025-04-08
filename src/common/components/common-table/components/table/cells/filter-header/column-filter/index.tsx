'use client'

import { Header } from '@tanstack/table-core'
import { FC } from 'react'

import ColumnInput from './input'
import SortButton from './sort-button'
import FilterButton from './filter'
import ResizeColumn from './resize-column'

/**
 * Column filter
 */
const ColumnFilter: FC<{ header: Header<unknown, unknown> }> = ({ header }) => {
  const column = header.column

  return (
    <div className="grid grid-cols-[1fr_auto_auto_auto] items-center">
      <ColumnInput column={column} />
      <SortButton column={column} />
      <FilterButton column={column} />
      <ResizeColumn header={header} />
    </div>
  )
}

export default ColumnFilter
