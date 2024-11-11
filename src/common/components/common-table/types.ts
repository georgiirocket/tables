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

export interface ITableClassNames {
  wrapper?: string;
}

export interface ITableContext {
  table: Table<any>;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  methods?: ITableContextMethods;
  params?: ITableContextParams;
  classNames?: ITableClassNames;
}

export type ICommonTableProps = Pick<ITableContext, 'table' | 'methods' | 'params' | 'classNames'>;
