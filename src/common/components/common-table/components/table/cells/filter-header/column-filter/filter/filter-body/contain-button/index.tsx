'use client'

import { FC } from 'react'
import { MdOutlineAlignHorizontalLeft } from 'react-icons/md'
import { MdOutlineAlignVerticalCenter } from 'react-icons/md'
import { Button } from '@heroui/button'

interface IContainButton {
  containMode: 'includes' | 'startWith'
  onToggleContain: () => void
}

/**
 * Contain button
 */
const ContainButton: FC<IContainButton> = ({
  containMode,
  onToggleContain,
}) => {
  return (
    <Button isIconOnly size="sm" onPress={onToggleContain} className="w-full">
      {containMode === 'startWith' ? (
        <MdOutlineAlignHorizontalLeft className="h-[20px] w-[20px]" />
      ) : (
        <MdOutlineAlignVerticalCenter className="h-[20px] w-[20px]" />
      )}
    </Button>
  )
}

export default ContainButton
