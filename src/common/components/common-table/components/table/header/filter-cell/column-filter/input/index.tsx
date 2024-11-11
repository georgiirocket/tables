'use client';

import { Column } from '@tanstack/table-core';
import { FC, memo } from 'react';
import { Input, Tooltip } from '@nextui-org/react';

/**
 * Column filter
 */
const ColumnInput: FC<{ column: Column<unknown, unknown> }> = ({ column }) => {
  const columnFilterValue = (column.getFilterValue() ?? []) as string[];
  const inputState = columnFilterValue.join(',');
  const displayHeader = String(column.columnDef.header);
  const displayDescription = column.columnDef.meta?.headerDescription;

  const displayLabel =
    typeof column.columnDef.header === 'string' ? column.columnDef.header : 'Label';

  return (
    <Tooltip
      delay={1000}
      placement="top-start"
      offset={-7}
      content={
        <div className="px-1">
          <div className="text-small">{displayHeader}</div>
          {displayDescription && <div className="text-tiny">{displayDescription}</div>}
        </div>
      }
    >
      <div className="w-full flex">
        <Input
          isReadOnly
          isDisabled
          value={inputState}
          variant="underlined"
          label={displayLabel}
          className="xs whitespace-nowrap opacity"
          classNames={{ base: !inputState ? 'opacity-1' : '' }}
          size="sm"
        />
      </div>
    </Tooltip>
  );
};

export default memo(ColumnInput);
