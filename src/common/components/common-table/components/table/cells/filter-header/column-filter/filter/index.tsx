'use client'

import { Column } from '@tanstack/table-core'
import { FC } from 'react'
import { Card, CardBody } from '@heroui/card'
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover'

import FilterBody from './filter-body'
import FilterButton from './filter-button'

/**
 * Sorted button
 */
const Filter: FC<{ column: Column<unknown, unknown> }> = ({ column }) => {
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <div>
          <FilterButton column={column} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Card className="w-[250px]">
          <CardBody>
            <FilterBody column={column} />
          </CardBody>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

export default Filter
