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
      className={clsx('table-search-wrapper', {
        ['full-screen']: isFullScreen,
      })}
    >
      {children}
    </motion.div>
  );
};

export default SearchTableWrapper;
