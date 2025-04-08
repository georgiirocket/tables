'use client';

import { FC } from 'react';
import { CellContext } from '@tanstack/table-core';
import { Tooltip } from '@heroui/tooltip';

/**
 * Description cell
 * @param context
 * @constructor
 */
const DescriptionCell: FC<CellContext<any, any>> = ({ cell }) => {
  const description = cell.getValue() as string;

  return (
    <Tooltip
      delay={1000}
      placement="right"
      content={
        <div className="px-1 py-2 max-w-[200px]">
          <div className="text-tiny">{description}</div>
        </div>
      }
    >
      <div className="h-[150px] overflow-hidden grid place-items-center">
        <span className="line-clamp-5">{description}</span>
      </div>
    </Tooltip>
  );
};

export default DescriptionCell;
