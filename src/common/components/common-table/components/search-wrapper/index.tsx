'use client'

import { FC, PropsWithChildren } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import { useTableContext } from '@/common/components/common-table/providers'

import { variants } from './variants'

/**
 * Search table wrapper component
 */
const SearchTableWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isFullScreen, params, classNames } = useTableContext()

  return (
    <motion.div
      initial="offscreen"
      variants={variants}
      animate={params?.isPendingSettings ? 'offscreen' : 'onscreen'}
      className={clsx(
        'grid size-full grid-rows-[auto_1fr] overflow-hidden rounded-xl bg-table-header-color pt-[0.5rem]',
        classNames?.wrapper,
        {
          ['fixed left-0 top-0 z-[500] h-[100dvh] w-[100vw] !rounded-none']:
            isFullScreen,
        },
      )}
    >
      {children}
    </motion.div>
  )
}

export default SearchTableWrapper
