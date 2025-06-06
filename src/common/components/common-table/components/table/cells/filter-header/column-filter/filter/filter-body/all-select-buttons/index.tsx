'use client'

import { FC } from 'react'
import { FaMinusSquare } from 'react-icons/fa'
import { MdLibraryAddCheck } from 'react-icons/md'
import { Button } from '@heroui/button'
import { Column } from '@tanstack/table-core'

interface IContainButton {
  column: Column<unknown, unknown>
  sortedUniqueValues: string[]
}

/**
 * All select buttons
 */
const AllSelectButtons: FC<IContainButton> = ({
  column,
  sortedUniqueValues,
}) => {
  /**
   * Reset values
   */
  const handleReset = (): void => {
    column.setFilterValue('')
  }

  /**
   * Add values
   */
  const handleAddValues = (): void => {
    if (!sortedUniqueValues.length) {
      return
    }

    const filters = column.getFilterValue() as string[] | undefined
    column.setFilterValue(
      filters ? [...filters, ...sortedUniqueValues] : sortedUniqueValues,
    )
  }

  return (
    <>
      <Button isIconOnly size="sm" className="w-full" onPress={handleAddValues}>
        <MdLibraryAddCheck className="h-[20px] w-[20px]" />
      </Button>
      <Button isIconOnly size="sm" className="w-full" onPress={handleReset}>
        <FaMinusSquare className="h-[20px] w-[20px]" />
      </Button>
    </>
  )
}

export default AllSelectButtons
