import { Table } from '@tanstack/table-core';
import { ComponentType } from 'react';

export interface ITableContextParams {
  isPendingSettings?: boolean;
  excelName?: string;
}

export interface ITableContextMethods {
  onRowClick?: (rowId: string) => void;
  onUpdateData?: () => Promise<void> | void;
}

export interface ITableClassNames {
  wrapper?: string;
}

export interface ITableComponents {
  menu?: ComponentType<{ table: ITableContext['table'] }>;
}

export interface ITableContext {
  table: Table<any>;
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  methods?: ITableContextMethods;
  params?: ITableContextParams;
  classNames?: ITableClassNames;
  components?: ITableComponents;
}

export type ICommonTableProps = Pick<
  ITableContext,
  'table' | 'methods' | 'params' | 'classNames' | 'components'
>;
