'use client';

import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

import { variants } from './variants';
import { useTableContext } from '../../providers/index';

/**
 * Search table wrapper component
 */
const SearchTableWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isFullScreen, params } = useTableContext();

  return (
    <motion.div
      initial="offscreen"
      variants={variants}
      animate={params?.isSettingLoading ? 'offscreen' : 'onscreen'}
      className={clsx(
        'size-full grid grid-rows-[auto_1fr] bg-table-header-color overflow-hidden rounded-xl',
        {
          ['w-[100vw] h-[100dvh] fixed top-0 left-0 z-500 rounded-none']: isFullScreen,
        },
      )}
    >
      {children}
    </motion.div>
  );
};

export default SearchTableWrapper;
