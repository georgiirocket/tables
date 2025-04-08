'use client'

import { Column } from '@tanstack/table-core'
import { FC } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { BiSortAZ } from 'react-icons/bi'
import { BiSortZA } from 'react-icons/bi'

/**
 * Sorted button
 */
const SortButton: FC<{ column: Column<unknown, unknown> }> = ({ column }) => {
  const sorted = column.getIsSorted()

  if (!sorted) {
    return (
      <BiSortAlt2
        className="size-[24px] cursor-pointer"
        onClick={column.getToggleSortingHandler()}
      />
    )
  }

  return sorted === 'asc' ? (
    <BiSortAZ
      className="size-[24px] cursor-pointer text-primary"
      onClick={column.getToggleSortingHandler()}
    />
  ) : (
    <BiSortZA
      className="size-[24px] cursor-pointer text-primary"
      onClick={column.getToggleSortingHandler()}
    />
  )
}

export default SortButton
