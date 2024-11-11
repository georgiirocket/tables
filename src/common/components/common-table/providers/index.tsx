'use client';

import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

import { ITableContext, ICommonTableProps } from '../types';

/**
 * Table context
 */
const TableContext = createContext<ITableContext>(undefined!);

/**
 * Table providers
 */
const TableProvider: FC<PropsWithChildren<ICommonTableProps>> = ({
  table,
  children,
  params,
  methods,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  /**
   * Toggle full screen
   */
  const toggleFullScreen = (): void => setIsFullScreen((prevState) => !prevState);

  return (
    <TableContext.Provider value={{ table, isFullScreen, toggleFullScreen, methods, params }}>
      {children}
    </TableContext.Provider>
  );
};

/**
 * Use table context
 */
const useTableContext = (): ITableContext => {
  if (!TableContext) {
    throw new Error('Missing table context');
  }

  return useContext(TableContext);
};

export { TableProvider, useTableContext };
