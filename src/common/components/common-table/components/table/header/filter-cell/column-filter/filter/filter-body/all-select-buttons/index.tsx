'use client';

import { FC } from 'react';
import { FaMinusSquare } from 'react-icons/fa';
import { MdLibraryAddCheck } from 'react-icons/md';
import { Button } from '@nextui-org/react';
import { Column } from '@tanstack/table-core';

interface IContainButton {
  column: Column<unknown, unknown>;
  sortedUniqueValues: string[];
}

/**
 * All select buttons
 */
const AllSelectButtons: FC<IContainButton> = ({ column, sortedUniqueValues }) => {
  /**
   * Reset values
   */
  const handleReset = (): void => {
    column.setFilterValue('');
  };

  /**
   * Add values
   */
  const handleAddValues = (): void => {
    if (!sortedUniqueValues.length) {
      return;
    }

    const filters = column.getFilterValue() as string[] | undefined;
    column.setFilterValue(filters ? [...filters, ...sortedUniqueValues] : sortedUniqueValues);
  };

  return (
    <>
      <Button isIconOnly size="sm" className="w-full" onClick={handleAddValues}>
        <MdLibraryAddCheck className="w-[20px] h-[20px]" />
      </Button>
      <Button isIconOnly size="sm" className="w-full" onClick={handleReset}>
        <FaMinusSquare className="w-[20px] h-[20px]" />
      </Button>
    </>
  );
};

export default AllSelectButtons;
