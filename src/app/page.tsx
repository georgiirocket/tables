import { FC } from 'react';

import BaseTable from './_components/base-table';

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="w-full max-w-[1200px] mx-auto py-10 px-2 overflow-auto">
      <BaseTable />
    </main>
  );
};

export default Page;
