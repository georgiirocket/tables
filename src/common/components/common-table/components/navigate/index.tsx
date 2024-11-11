'use client';

import { FC } from 'react';

import ColumnToggle from './column-toggle';
import SearchInput from './search-input';
import ResetFilterButton from './reset-button';
import FullScreenIcon from './full-screen';
import UpdateDataButton from './update-button';

/**
 * Navigate table component
 */
const Navigate: FC = () => {
  return (
    <div className="table-navigate">
      <SearchInput />
      <ResetFilterButton />
      <ColumnToggle />
      <UpdateDataButton />
      <FullScreenIcon />
    </div>
  );
};

export default Navigate;
