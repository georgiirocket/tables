import { FC } from 'react'
import { Metadata } from 'next'

import WithMenuTable from './_components/with-menu'

export const metadata: Metadata = {
  title: 'With Menu | Tables, TanStack Table',
}

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <WithMenuTable />
    </main>
  )
}

export default Page
