'use client';

import { FC } from 'react';
import { HeaderContext } from '@tanstack/table-core';

/**
 * Filter header cell
 * @constructor
 */
const CountHeaderCell: FC<HeaderContext<any, any>> = () => {
  return (
    <div className="w-[100px] pl-[0.5rem] sticky left-0 to-0 bg-table-header-color z-20 flex items-center">
      #
    </div>
  );
};

export default CountHeaderCell;
