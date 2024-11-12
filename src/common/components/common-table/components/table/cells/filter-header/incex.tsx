'use client';

import { FC } from 'react';
import { HeaderContext } from '@tanstack/table-core';

import ColumnFilter from './column-filter';

/**
 * Filter header cell
 * @param context
 * @constructor
 */
const FilterHeaderCell: FC<HeaderContext<any, any>> = (context) => {
  return <ColumnFilter header={context.header} />;
};

export default FilterHeaderCell;
