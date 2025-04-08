'use client'

import { Column } from '@tanstack/table-core'
import { FC } from 'react'
import { TiFilter } from 'react-icons/ti'
import { clsx } from 'clsx'

/**
 * Filter button component
 */
const FilterButton: FC<{ column: Column<unknown, unknown> }> = ({ column }) => {
  const isColumnFilters = Boolean(column.getFilterValue())

  return (
    <TiFilter
      className={clsx('size-[24px] cursor-pointer', {
        ['text-primary']: isColumnFilters,
      })}
    />
  )
}

export default FilterButton
