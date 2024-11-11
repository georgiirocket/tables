'use client';

import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { ITableContext } from '../types';

interface IUseTableVirtualizer {
  table: ITableContext['table'];
  estimateSize?: number;
  staticHeight?: number;
}

/**
 * Table virtualizer
 */
const useTableVirtualizer = ({ table, estimateSize = 33, staticHeight }: IUseTableVirtualizer) => {
  const tableRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => estimateSize,
    getScrollElement: () => tableRef.current,
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => (staticHeight ? staticHeight : element?.getBoundingClientRect().height)
        : undefined,
    overscan: 5,
  });

  return { tableRef, rowVirtualizer };
};

export default useTableVirtualizer;
