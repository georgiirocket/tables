'use client';

import { FC } from 'react';
import { BiSortAZ } from 'react-icons/bi';
import { BiSortZA } from 'react-icons/bi';
import { Button } from '@nextui-org/react';

interface ISortButton {
  sortMode: 'asc' | 'desc';
  onToggleSort: () => void;
}

/**
 * Sorted button
 */
const SortButton: FC<ISortButton> = ({ sortMode, onToggleSort }) => {
  return (
    <Button isIconOnly size="sm" onClick={onToggleSort} className="w-full">
      {sortMode === 'asc' ? (
        <BiSortAZ className="w-[20px] h-[20px]" />
      ) : (
        <BiSortZA className="w-[20px] h-[20px]" />
      )}
    </Button>
  );
};

export default SortButton;
