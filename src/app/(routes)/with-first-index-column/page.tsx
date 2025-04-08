import { FC } from 'react'
import { Metadata } from 'next'

import WithFirstIndexColumnTable from './_components/with-first-index-column'

export const metadata: Metadata = {
  title: 'With first index column | Tables, TanStack Table',
}

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <WithFirstIndexColumnTable />
    </main>
  )
}

export default Page
