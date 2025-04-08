'use client'

import { Column } from '@tanstack/table-core'
import { FC } from 'react'
import { Divider } from '@heroui/divider'

import ResetButton from './reset-button'
import FilterTable from './filter-table'
import SearchFilterInput from './input'
import useFilterData from './use-filter-data'
import SortButton from './sort-button'
import ContainButton from './contain-button'
import AllSelectButtons from './all-select-buttons'

/**
 * Filter body component
 */
const FilterBody: FC<{ column: Column<unknown, unknown> }> = ({ column }) => {
  const {
    data,
    valueFilter,
    onDebounceFn,
    sortMode,
    handleToggleSortMode,
    containMode,
    handleToggleContainMode,
  } = useFilterData(column)

  return (
    <div className="grid h-[300px] w-full grid-rows-[auto_auto_1fr_auto_auto] gap-[5px]">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center gap-x-[3px] gap-y-[5px]">
        <SearchFilterInput value={valueFilter} onInputChange={onDebounceFn} />
        <SortButton sortMode={sortMode} onToggleSort={handleToggleSortMode} />
        <ContainButton
          containMode={containMode}
          onToggleContain={handleToggleContainMode}
        />
        <AllSelectButtons column={column} sortedUniqueValues={data} />
      </div>
      <Divider />
      <FilterTable column={column} sortedUniqueValues={data} />
      <Divider />
      <ResetButton column={column} />
    </div>
  )
}

export default FilterBody
