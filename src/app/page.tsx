import { FC } from 'react';

import BaseTable from './_components/base-table';

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container overflow-auto">
      <BaseTable />
    </main>
  );
};

export default Page;
