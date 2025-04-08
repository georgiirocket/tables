Implementation of tables with TanStack Table

## TanStack Table

[TanStack Table](https://tanstack.com/table/latest)

TanStack Table is a powerful tool for creating and reusing tables on the web.

This repository shows a basic implementation of stylesheets.

Feel free to copy, add and use this

## Tools used

-  Next.js
-  Hero UI
-  TanStack Table
-  Tailwind
-  Dexie
-  Framer Motion
-  Zustand


## Examples

-  [Base usage](https://tables-pi-woad.vercel.app)
-  [With indexDB](https://tables-pi-woad.vercel.app/with-index-db)
-  [With first index](https://tables-pi-woad.vercel.app/with-first-index-column)
-  [With total row](https://tables-pi-woad.vercel.app/with-total-row)
-  [With menu](https://tables-pi-woad.vercel.app/with-menu)
-  [With menu](https://tables-pi-woad.vercel.app/with-menu)
-  [With data updating](https://tables-pi-woad.vercel.app/update-data)
-  [Many entities](https://tables-pi-woad.vercel.app/many-entities)
-  [Full functionally](https://tables-pi-woad.vercel.app/full)

## Base example:

data.tsx

```ts
export type IColumn = ColumnDef<IEntity>[];

export const columData: IColumn = [
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
    meta: { headerName: 'Price' },
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
```

index.tsx (table component)

```jsx
const BaseTable: FC = () => {
    const { baseEntities } = dataStore((state) => state);
    const { sorting, setSorting, globalFilter, setGlobalFilter, columnFilters, setColumnFilters } =
      baseFiltersStore((state) => state);

    const table = useReactTable({
      data: baseEntities,
      columns: columData,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      globalFilterFn: 'includesString',
      columnResizeMode: 'onChange',
      onGlobalFilterChange: setGlobalFilter,
      onColumnFiltersChange: setColumnFilters,
      onSortingChange: setSorting,
      state: { globalFilter, columnFilters, sorting },
      getRowId: (item) => String(item.id),
    });

    return <CommonTable table={table} />;
  };
```

## Node version

- node - 22.13.0
- npm - 10.9.2
