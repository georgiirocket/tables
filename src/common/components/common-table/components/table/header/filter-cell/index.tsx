'use client';

import { FC } from 'react';
import { Header } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';

import ColumnFilter from './column-filter';

/**
 * Filter header component
 * @constructor
 */
const FilterCell: FC<{ header: Header<unknown, unknown> }> = ({ header }) => {
  const isCustomHeader = header.column.columnDef.meta?.isCustomHeader;

  return (
    <div
      data-header-table-id={header.id}
      className="table-header-cell"
      style={{ minWidth: header.getSize() }}
    >
      {isCustomHeader && flexRender(header.column.columnDef.header, header.getContext())}
      {!isCustomHeader && <ColumnFilter header={header} />}
    </div>
  );
};

export default FilterCell;
