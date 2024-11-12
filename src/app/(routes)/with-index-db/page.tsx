import { FC } from 'react';
import { Metadata } from 'next';

import WithIndexDbTable from './_components/with-index-db-table';

export const metadata: Metadata = {
  title: 'With index db',
};

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <WithIndexDbTable />
    </main>
  );
};

export default Page;
