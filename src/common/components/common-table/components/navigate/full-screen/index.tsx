'use client';

import { FC } from 'react';
import { RiFullscreenExitLine, RiFullscreenLine } from 'react-icons/ri';
import { IconBaseProps } from 'react-icons';

import { useTableContext } from '@/common/components/common-table/providers';

/**
 * Full screen icon component
 */
const FullScreenIcon: FC = () => {
  const { isFullScreen, toggleFullScreen } = useTableContext();

  const iconBaseProps: IconBaseProps = {
    className: 'size-[24px] cursor-pointer shrink-0',
    onClick: toggleFullScreen,
  };

  return isFullScreen ? (
    <RiFullscreenExitLine {...iconBaseProps} />
  ) : (
    <RiFullscreenLine {...iconBaseProps} />
  );
};

export default FullScreenIcon;
