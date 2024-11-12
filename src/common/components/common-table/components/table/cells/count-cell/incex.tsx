'use client';

import { FC } from 'react';
import { CellContext } from '@tanstack/table-core';

/**
 * Count cell
 * @param context
 * @constructor
 */
const CountCell: FC<CellContext<any, any>> = ({ cell }) => {
  const { row } = cell.getContext();

  return <div>{row.index + 1}</div>;
};

export default CountCell;
