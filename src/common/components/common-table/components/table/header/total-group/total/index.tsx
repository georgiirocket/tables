'use client'

import { FC, useMemo } from 'react'
import { sum, toNumber, round } from 'lodash'

import { useTableContext } from '@/common/components/common-table/providers'

/**
 * Total component with round
 */
const Total: FC<{ columnId: string }> = ({ columnId }) => {
  const { table } = useTableContext()
  const { rows } = table.getRowModel()

  const value = useMemo<number>(() => {
    try {
      const values = rows.map((row) => {
        row.getValue(columnId)

        return toNumber(row.getValue(columnId))
      })

      return round(sum(values), 2)
    } catch (e) {
      console.error(e)

      return NaN
    }
  }, [rows])

  return <div className="break-all pr-[5px] pt-[0.5rem]">{value}</div>
}

export default Total
