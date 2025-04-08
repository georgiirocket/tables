'use client'

import { Column } from '@tanstack/table-core'
import { useCallback, useMemo, useState } from 'react'
import { debounce } from 'lodash'

import {
  emptyString,
  sortStringArray,
} from '@/common/components/common-table/helpers/excel-filters'

/**
 * Filter data
 */
const useFilterData = (column: Column<unknown, unknown>) => {
  const columnContainMode = column.columnDef.meta?.containMode ?? 'includes'

  const [valueFilter, setValueFilter] = useState('')
  const [sortMode, setSortMode] = useState<'asc' | 'desc'>('asc')
  const [containMode, setContainMode] = useState<'includes' | 'startWith'>(
    columnContainMode,
  )

  /**
   * Sorted Unique Values
   */
  const sortedUniqueValues: string[] = useMemo(() => {
    const result = Array.from(column.getFacetedUniqueValues().keys())

    return sortStringArray(result, sortMode).map((item) => {
      const newItem = String(item)

      return !newItem ? emptyString : newItem
    })
  }, [column.getFacetedUniqueValues(), sortMode])

  /**
   * Data by sort mode
   */
  const data = useMemo(() => {
    if (!valueFilter) {
      return sortedUniqueValues
    }

    if (containMode === 'includes') {
      return sortedUniqueValues.filter((item) =>
        item.toLowerCase().includes(valueFilter.toLowerCase()),
      )
    }

    return sortedUniqueValues.filter((item) =>
      item.toLowerCase().startsWith(valueFilter.toLowerCase()),
    )
  }, [sortedUniqueValues, containMode, valueFilter])

  /**
   * Toggle sort mode
   */
  const handleToggleSortMode = () => {
    setSortMode((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
  }

  /**
   * Toggle contain mode
   */
  const handleToggleContainMode = () => {
    setContainMode((prevState) =>
      prevState === 'startWith' ? 'includes' : 'startWith',
    )
  }

  /**
   * Set filter value
   */
  const onDebounceFn = useCallback(
    debounce((value: string) => {
      setValueFilter(value)
    }, 1000),
    [setValueFilter],
  )

  return {
    valueFilter,
    onDebounceFn,
    data,
    handleToggleSortMode,
    sortMode,
    containMode,
    handleToggleContainMode,
  }
}

export default useFilterData
