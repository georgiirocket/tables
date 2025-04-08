'use client';

import { FC } from 'react';
import { CellContext } from '@tanstack/table-core';
import { Image } from '@heroui/image';

/**
 * Image cell
 * @param context
 * @constructor
 */
const ImageCell: FC<CellContext<any, any>> = ({ cell }) => {
  const src = cell.getValue() as string;

  return (
    <div>
      <Image alt={src} radius="sm" src={src} classNames={{ img: 'size-[150px]' }} />
    </div>
  );
};

export default ImageCell;
