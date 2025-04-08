'use client'

import { FC, useTransition } from 'react'
import { MdUpdate } from 'react-icons/md'
import { motion } from 'framer-motion'

import { useTableContext } from '@/common/components/common-table/providers'

import { variants } from './variants'

/**
 * Update data button component
 */
const UpdateDataButton: FC = () => {
  const { methods } = useTableContext()
  const [isPending, setIsPending] = useTransition()

  const isShowButton = typeof methods?.onUpdateData === 'function'

  /**
   * Handle update data
   */
  const handleUpdate = (): void => {
    setIsPending(async () => {
      await methods?.onUpdateData?.()
    })
  }

  if (!isShowButton) {
    return null
  }

  return (
    <motion.div
      initial="init"
      key="operation_spinner"
      className="flex-shrink-0"
      variants={variants}
      animate={isPending ? 'animate' : 'init'}
    >
      <MdUpdate onClick={handleUpdate} className="size-[24px] cursor-pointer" />
    </motion.div>
  )
}

export default UpdateDataButton
