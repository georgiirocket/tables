'use client';

import { FC } from 'react';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { Header } from '@tanstack/table-core';
import { motion, useAnimationControls, useDragControls } from 'framer-motion';

import { useTableContext } from '@/common/components/common-table/providers';

/**
 * Resize column
 * @param header
 * @constructor
 */
const ResizeColumn: FC<{ header: Header<unknown, unknown> }> = ({ header }) => {
  const { table } = useTableContext();

  const controls = useDragControls();
  const animationControls = useAnimationControls();

  /**
   * Handle change column sizing
   * @param delta
   */
  const handleChangeColumnSizing = (delta: number) => {
    const element = document.querySelector(`[data-header-table-id="${header.id}"]`);

    if (!element) {
      return;
    }

    const { clientWidth } = element;
    const { columnSizing } = table.getState();

    table.setColumnSizing({ ...columnSizing, [header.column.id]: clientWidth + delta });
  };

  return (
    <motion.div
      drag="x"
      style={{ touchAction: 'none' }}
      dragControls={controls}
      animate={animationControls}
      onDragEnd={(_, info) => {
        handleChangeColumnSizing(info.offset.x);
        animationControls.stop();
        animationControls.start({ x: 0, y: 0 });
      }}
    >
      <MdOutlineDragIndicator className="size-[20px] cursor-col-resize" />
    </motion.div>
  );
};

export default ResizeColumn;
