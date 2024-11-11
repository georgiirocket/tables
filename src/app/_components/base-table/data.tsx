import { ColumnDef } from '@tanstack/table-core';

import { columnFilterFn } from '@/common/components/common-table/helpers/excel-filters';
import { IEntity } from '@/common/stores/data';

export type IColumn = ColumnDef<IEntity>[];

export const columData: IColumn = [
  {
    accessorKey: 'title',
    header: 'Title',
    filterFn: columnFilterFn,
    size: 180,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    filterFn: columnFilterFn,
    size: 100,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    filterFn: columnFilterFn,
    size: 250,
  },
  {
    accessorKey: 'category',
    header: 'Description',
    filterFn: columnFilterFn,
    size: 150,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    filterFn: columnFilterFn,
    size: 180,
  },
  {
    accessorKey: 'price',
    header: 'Price',
    filterFn: columnFilterFn,
    size: 100,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    filterFn: columnFilterFn,
    size: 250,
  },
  {
    accessorKey: 'category',
    header: 'Description',
    filterFn: columnFilterFn,
    size: 150,
  },
];
