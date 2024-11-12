import { FC } from 'react';
import { Metadata } from 'next';

import BaseTable from './_components/update-table';

export const metadata: Metadata = {
  title: 'Update Data | Tables, TanStack Table',
};

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <BaseTable />
    </main>
  );
};

export default Page;
