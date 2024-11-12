import '@tanstack/react-table';
import { RowData } from '@tanstack/table-core';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    containMode?: 'includes' | 'startWith';
    isTotal?: boolean;
    headerName?: string;
    headerDescription?: string;
  }
}
