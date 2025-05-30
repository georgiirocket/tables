'use client'

import { FC } from 'react'

import ColumnToggle from './column-toggle'
import SearchInput from './search-input'
import ResetFilterButton from './reset-button'
import FullScreenIcon from './full-screen'
import UpdateDataButton from './update-button'
import MenuComponent from './menu-component'

/**
 * Navigate table component
 */
const Navigate: FC = () => {
  return (
    <div className="flex items-center justify-end gap-[0.5rem] bg-table-header-color px-[0.5rem]">
      <SearchInput />
      <ResetFilterButton />
      <ColumnToggle />
      <UpdateDataButton />
      <MenuComponent />
      <FullScreenIcon />
    </div>
  )
}

export default Navigate
