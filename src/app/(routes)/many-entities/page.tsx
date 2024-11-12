import { FC } from 'react';
import { Metadata } from 'next';

import ManyEntitiesTable from './_components/many-entities';

export const metadata: Metadata = {
  title: 'Many Entities',
};

/**
 * Page
 * @constructor
 */
const Page: FC = () => {
  return (
    <main className="main-container">
      <ManyEntitiesTable />
    </main>
  );
};

export default Page;
