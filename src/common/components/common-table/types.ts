import { Table } from '@tanstack/table-core';

export interface ITableContextParams {
  isTotalRow?: boolean;
  isCountColumn?: boolean;
  isTextNowrap?: boolean;
  isSettingLoading?: boolean;
}

export interface ITableContextMethods {
  onRowClick?: (rowId: string) => void;
  onUpdateData?: () => Promise<void> | void;
}

export interface ITableContext {
  table: Table<unknown>;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  methods?: ITableContextMethods;
  params?: ITableContextParams;
}

export type ICommonTableProps = Pick<ITableContext, 'table' | 'methods' | 'params'>;
