import { FC } from 'react'
import { Metadata } from 'next'

import WithTotalRowTable from './_components/with-total-row'

export const metadata: Metadata = {
  title: 'With Total Row | Tables, TanStack Table',
}

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <WithTotalRowTable />
    </main>
  )
}

export default Page
