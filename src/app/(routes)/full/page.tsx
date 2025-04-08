import { FC } from 'react'
import { Metadata } from 'next'

import FullTable from './_components/full'

export const metadata: Metadata = {
  title: 'Full | Tables, TanStack Table',
}

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <FullTable />
    </main>
  )
}

export default Page
