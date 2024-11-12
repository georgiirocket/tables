import { ColumnDef } from '@tanstack/table-core';

import { columnFilterFn } from '@/common/components/common-table/helpers/excel-filters';
import { IEntity } from '@/common/stores/data';
import FilterHeaderCell from '@/common/components/common-table/components/table/cells/filter-header/incex';

export type IColumn = ColumnDef<IEntity>[];

export const columData: IColumn = [
  {
    accessorKey: 'title',
    header: 'Title',
    // filterFn: columnFilterFn,
    size: 180,
  },
  {
    accessorKey: 'price',
    header: FilterHeaderCell,
    filterFn: columnFilterFn,
    size: 100,
    meta: { headerName: 'Price' },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    filterFn: columnFilterFn,
    size: 250,
  },
  {
    accessorKey: 'category',
    header: FilterHeaderCell,
    filterFn: columnFilterFn,
    size: 150,
    meta: { headerName: 'Category' },
  },
];
