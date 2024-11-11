'use client';

import { FC } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { clsx } from 'clsx';

import { useTableContext } from '@/common/components/common-table/providers';

/**
 * Reset filters button
 */
const ResetFilterButton: FC = () => {
  const { table } = useTableContext();
  const { globalFilter, columnFilters, sorting } = table.getState();
  const isFilters =
    Boolean(globalFilter) || Boolean(columnFilters.length) || Boolean(sorting.length);

  /**
   * Handle reset all filters
   */
  const handleResetAllFilters = (): void => {
    table.resetGlobalFilter();
    table.resetColumnFilters();
    table.resetSorting();
  };

  return (
    <FaTrashAlt
      className={clsx('cursor-pointer shrink-0', { ['text-primary']: isFilters })}
      onClick={handleResetAllFilters}
    />
  );
};

export default ResetFilterButton;
