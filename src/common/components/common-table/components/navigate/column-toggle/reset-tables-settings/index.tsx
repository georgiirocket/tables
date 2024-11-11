'use client';

import { FC } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { IoMdSettings } from 'react-icons/io';

import { useTableContext } from '@/common/components/common-table/providers';
import {
  IDropdownItem,
  useDropdownAction,
} from '@/common/components/common-table/hooks/use-dropdown-action';

/**
 * Reset table settings
 * @constructor
 */
const ResetTablesSettings: FC = () => {
  const { table } = useTableContext();

  /**
   * Handle reset
   */
  const handleResetSettings = (): void => {
    table.setColumnOrder([]);
    table.setColumnSizing({});
    table.getToggleAllColumnsVisibilityHandler();
  };

  const items: IDropdownItem[] = [
    {
      key: 'reset-sizing',
      label: 'Reset sizing settings',
      onClick: () => {
        table.setColumnSizing({});
      },
    },
    {
      key: 'reset-order',
      label: 'Reset order settings',
      onClick: () => {
        table.setColumnOrder([]);
      },
    },
    {
      key: 'reset',
      label: 'Reset all settings',
      onClick: handleResetSettings,
    },
  ];

  const { onAction } = useDropdownAction(items);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" isIconOnly aria-label="Table settings" className="mr-1">
          <IoMdSettings title="Print Document" className="w-[20px] h-[20px]" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        items={items}
        onAction={onAction}
        aria-label="Table settings"
        disallowEmptySelection
        className="max-w-[300px]"
      >
        {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ResetTablesSettings;
