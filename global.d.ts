import '@tanstack/react-table';
import { RowData } from '@tanstack/table-core';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    isParts?: boolean;
    containMode?: 'includes' | 'startWith';
    isTotal?: boolean;
    isCustomCell?: boolean;
    isCustomHeader?: boolean;
    headerDescription?: string;
    isGraph?: boolean;
    isGraphPrimary?: boolean;
    className?: string;
    colors?: {
      yellow?: boolean;
      lessRed?: boolean;
      green?: boolean;
      violet?: boolean;
    };
  }
}
