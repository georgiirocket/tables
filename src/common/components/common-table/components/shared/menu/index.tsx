'use client'

import { FC } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown'
import { RiFileExcel2Line } from 'react-icons/ri'
import { ImMenu2 } from 'react-icons/im'

import { ITableContext } from '@/common/components/common-table/types'
import {
  IDropdownItem,
  useDropdownAction,
} from '@/common/components/common-table/hooks/use-dropdown-action'
import useTableExcel from '@/common/components/common-table/hooks/use-table-excel'
import { useTableContext } from '@/common/components/common-table/providers'

/**
 * Menu table component
 * @constructor
 */
const MenuTable: FC<{ table: ITableContext['table'] }> = ({ table }) => {
  const { params } = useTableContext()

  const { createExcel } = useTableExcel(table, params?.excelName ?? 'Unknown')

  const items: IDropdownItem[] = [
    {
      key: 'download-excel',
      label: 'Download excel',
      onClick: createExcel,
      startContent: <RiFileExcel2Line className="size-[20px]" />,
    },
  ]

  const { onAction } = useDropdownAction(items)

  return (
    <Dropdown classNames={{ content: 'p-[0.5rem]' }}>
      <DropdownTrigger>
        <span className="flex flex-shrink-0 cursor-pointer items-center">
          <ImMenu2 className="size-[24px]" />
        </span>
      </DropdownTrigger>
      <DropdownMenu
        onAction={onAction}
        aria-label="Dynamic Actions"
        items={items}
      >
        {(item) => (
          <DropdownItem
            key={item.key}
            startContent={item.startContent}
            description={item.description}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

export default MenuTable
