'use client'

import { FC } from 'react'
import { HeaderContext } from '@tanstack/table-core'

/**
 * Filter header cell
 * @constructor
 */
const CountHeaderCell: FC<HeaderContext<any, any>> = () => {
  return (
    <div className="to-0 sticky left-0 z-20 flex w-[100px] items-center bg-table-header-color pl-[0.5rem]">
      #
    </div>
  )
}

export default CountHeaderCell
