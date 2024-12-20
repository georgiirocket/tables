'use client';

import { FC } from 'react';
import { MdOutlineAlignHorizontalLeft } from 'react-icons/md';
import { MdOutlineAlignVerticalCenter } from 'react-icons/md';
import { Button } from '@nextui-org/react';

interface IContainButton {
  containMode: 'includes' | 'startWith';
  onToggleContain: () => void;
}

/**
 * Contain button
 */
const ContainButton: FC<IContainButton> = ({ containMode, onToggleContain }) => {
  return (
    <Button isIconOnly size="sm" onClick={onToggleContain} className="w-full">
      {containMode === 'startWith' ? (
        <MdOutlineAlignHorizontalLeft className="w-[20px] h-[20px]" />
      ) : (
        <MdOutlineAlignVerticalCenter className="w-[20px] h-[20px]" />
      )}
    </Button>
  );
};

export default ContainButton;
