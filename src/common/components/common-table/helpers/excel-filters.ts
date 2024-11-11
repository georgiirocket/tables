import { FilterFn } from '@tanstack/table-core';
import { isString, every } from 'lodash';
import { sort } from 'fast-sort';

export const emptyString: string = 'empty';

/**
 * Create new excel filter value
 */
export const createNewExcelFilterValue = (
  value: string,
  addFlag: boolean,
  filterValue?: string[],
): string[] | string => {
  if (!filterValue?.length) {
    return [value];
  }

  if (addFlag) {
    return [...filterValue, value];
  }

  const result = filterValue.filter((item) => item !== value);

  return !result.length ? '' : result;
};

/**
 * Column filters
 */
export const columnFilterFn: FilterFn<string> = (
  row,
  columnId,
  filterValue?: string[],
): boolean => {
  if (!filterValue) {
    return true;
  }

  let rowValue = String(row.getValue(columnId)) as string;

  if (!rowValue) {
    rowValue = emptyString;
  }

  return Boolean(filterValue.find((item) => rowValue === item));
};

/**
 * Sorting array string
 */
export const sortStringArray = (arr: unknown[], option: 'desc' | 'asc'): unknown[] => {
  const isStr = every(arr, isString);

  if (isStr) {
    return sort<unknown>(arr).by({
      ...(option === 'desc' ? { desc: true } : { asc: true }),
      comparer: new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' }).compare,
    });
  }

  return sort<unknown>(arr).by({
    ...(option === 'desc' ? { desc: true } : { asc: true }),
  });
};
