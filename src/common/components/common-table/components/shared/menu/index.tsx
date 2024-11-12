'use client';

import { FC } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { ImMenu2 } from 'react-icons/im';

import { ITableContext } from '@/common/components/common-table/types';
import {
  IDropdownItem,
  useDropdownAction,
} from '@/common/components/common-table/hooks/use-dropdown-action';

/**
 * Menu table component
 * @constructor
 */
const MenuTable: FC<{ table: ITableContext['table'] }> = () => {
  const items: IDropdownItem[] = [
    { key: 'create-excel', label: 'Create excel', onClick: () => {} },
  ];

  const { onAction } = useDropdownAction(items);

  return (
    <Dropdown classNames={{ content: 'p-[0.5rem]' }}>
      <DropdownTrigger>
        <span className="flex items-center cursor-pointer flex-shrink-0">
          <ImMenu2 className="size-[24px]" />
        </span>
      </DropdownTrigger>
      <DropdownMenu onAction={onAction} aria-label="Dynamic Actions" items={items}>
        {(item) => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MenuTable;
