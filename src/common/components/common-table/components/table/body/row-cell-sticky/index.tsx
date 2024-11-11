'use client';

import { FC } from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { clsx } from 'clsx';

import { useTableContext } from '@/common/components/common-table/providers';

interface IRowCellSticky {
  id: string;
  rowIndex: number;
}

/**
 * Row cell sticky
 */
const RowCellSticky: FC<IRowCellSticky> = ({ id, rowIndex }) => {
  const { methods } = useTableContext();
  const isNumberClick = typeof methods?.onRowClick === 'function';

  return (
    <div
      onClick={() => methods?.onRowClick?.(id)}
      className={clsx(
        'w-[100px] flex items-center overflow-hidden sticky left-0 to-0 bg-table-header-color px-[0.5rem] gap-[5px] z-[2]',
        {
          ['cursor-pointer']: isNumberClick,
        },
      )}
    >
      {isNumberClick && <AiFillFolder />}
      <span className="shrink-0">{rowIndex}</span>
    </div>
  );
};

export default RowCellSticky;
