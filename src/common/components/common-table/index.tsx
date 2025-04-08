'use client'

import { FC } from 'react'

import { TableProvider } from './providers/index'
import SearchTableWrapper from './components/search-wrapper'
import Table from './components/table'
import Navigate from './components/navigate'
import { ICommonTableProps } from './types'

/**
 * Common Table
 */
const CommonTable: FC<ICommonTableProps> = (props) => {
  return (
    <TableProvider {...props}>
      <SearchTableWrapper>
        <Navigate />
        <Table />
      </SearchTableWrapper>
    </TableProvider>
  )
}

export default CommonTable
