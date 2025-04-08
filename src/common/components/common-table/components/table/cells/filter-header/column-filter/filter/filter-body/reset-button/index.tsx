'use client'

import { Column } from '@tanstack/table-core'
import { FC } from 'react'
import { Button } from '@heroui/button'

/**
 * Reset column filter
 */
const ResetButton: FC<{ column: Column<unknown, unknown> }> = ({ column }) => {
  /**
   * Handle reset
   */
  const handleReset = (): void => {
    column.setFilterValue('')
  }

  return (
    <Button size="sm" color="primary" onPress={handleReset}>
      Reset
    </Button>
  )
}

export default ResetButton
