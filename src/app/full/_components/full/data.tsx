import { ColumnDef } from '@tanstack/table-core';

import { columnFilterFn } from '@/common/components/common-table/helpers/excel-filters';
import { IEntity } from '@/common/stores/data';
import FilterHeaderCell from '@/common/components/common-table/components/table/cells/filter-header/incex';
import ImageCell from '@/common/components/common-table/components/table/cells/image-cell/incex';
import DescriptionCell from '@/common/components/common-table/components/table/cells/description-cell/incex';
import CountHeaderCell from '@/common/components/common-table/components/table/cells/count-header/incex';
import CountCell from '@/common/components/common-table/components/table/cells/count-cell/incex';

export type IColumn = ColumnDef<IEntity>[];

export const columData: IColumn = [
  {
    accessorKey: 'id',
    header: CountHeaderCell,
    cell: CountCell,
    size: 100,
    enableGlobalFilter: false,
    meta: { headerName: 'No.' },
  },
  {
    accessorKey: 'image',
    header: 'Photo',
    cell: ImageCell,
    size: 180,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    size: 180,
  },
  {
    accessorKey: 'price',
    header: FilterHeaderCell,
    filterFn: columnFilterFn,
    size: 100,
    meta: { headerName: 'Price', isTotal: true },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: DescriptionCell,
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
