'use client';

import { FC } from 'react';
import { Button, Card, CardBody, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { MdViewColumn } from 'react-icons/md';
import { Switch } from '@nextui-org/react';
import { Reorder } from 'framer-motion';
import { RxDragHandleHorizontal } from 'react-icons/rx';

import { useTableContext } from '@/common/components/common-table/providers';

import ResetTablesSettings from './reset-tables-settings';

/**
 * Column toggle component
 */
const ColumnToggle: FC = () => {
  const { table } = useTableContext();
  const allColumns = table.getAllLeafColumns();
  const isAllVisible = table.getIsAllColumnsVisible();

  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <div>
          <MdViewColumn className="size-[24px] cursor-pointer shrink-0" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Card className="w-[250px]">
          <CardBody className="p-0">
            <div className="grid gap-[0.3rem] grid-cols-[1fr_auto] bg-table-header-color p-[0.5rem]">
              <Switch
                isSelected={isAllVisible}
                checked={isAllVisible}
                size="sm"
                onChange={table.getToggleAllColumnsVisibilityHandler()}
              >
                Show/hide all
              </Switch>
              <ResetTablesSettings />
            </div>
            <Reorder.Group
              className="flex flex-col gap-1 h-[300px] overflow-auto relative py-[0.5rem]"
              values={allColumns.map(({ id }) => id)}
              onReorder={(order) => table.setColumnOrder(order)}
            >
              {allColumns.map((column) => {
                return (
                  <Reorder.Item
                    key={column.id}
                    value={column.id}
                    className="w-full grid gap-1 grid-cols-[1fr_auto] px-[0.5rem]"
                  >
                    <Switch
                      size="sm"
                      isSelected={column.getIsVisible()}
                      checked={column.getIsVisible()}
                      onChange={column.getToggleVisibilityHandler()}
                      className="overflow-hidden text-ellipsis"
                    >
                      {column.columnDef.header as string}
                    </Switch>
                    <Button isIconOnly size="sm">
                      <RxDragHandleHorizontal />
                    </Button>
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </CardBody>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default ColumnToggle;
