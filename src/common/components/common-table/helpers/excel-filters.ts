import { FilterFn } from '@tanstack/table-core'
import { isString, every } from 'lodash'
import { sort } from 'fast-sort'

export const emptyString: string = 'empty'

/**
 * Create new excel filter value
 */
export const createNewExcelFilterValue = (
  value: string,
  flag: boolean,
  filterValues?: string[],
): string[] | string => {
  if (!filterValues?.length) {
    return [value]
  }

  if (flag) {
    return [...filterValues, value]
  }

  const result = filterValues.filter((item) => item !== value)

  return !result.length ? '' : result
}

/**
 * Column filters
 */
export const columnFilterFn: FilterFn<any> = (
  row,
  columnId,
  filterValues?: string[],
): boolean => {
  if (!filterValues) {
    return true
  }

  let rowValue = String(row.getValue(columnId)) as string

  if (!rowValue) {
    rowValue = emptyString
  }

  return Boolean(filterValues.find((item) => rowValue === item))
}

/**
 * Sorting array string
 */
export const sortStringArray = (
  arr: unknown[],
  option: 'desc' | 'asc',
): unknown[] => {
  const isStr = every(arr, isString)

  if (isStr) {
    return sort<unknown>(arr).by({
      ...(option === 'desc' ? { desc: true } : { asc: true }),
      comparer: new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base',
      }).compare,
    })
  }

  return sort<unknown>(arr).by({
    ...(option === 'desc' ? { desc: true } : { asc: true }),
  })
}
