'use client';

import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { Input } from '@heroui/input';
import debounce from 'lodash/debounce';
import { FaSearch } from 'react-icons/fa';

import { useTableContext } from '@/common/components/common-table/providers';

/**
 * Search input component
 */
const SearchInput: FC<PropsWithChildren> = () => {
  const { table } = useTableContext();
  const state = table.getState();
  const [inputValue, setInputValue] = useState(state.globalFilter);

  const debounceFn = useCallback(
    debounce((value: string) => {
      table.setGlobalFilter(value);
    }, 1000),
    [table],
  );

  const handleChange = (value: string): void => {
    debounceFn(value);
    setInputValue(value);
  };

  useEffect(() => {
    if (!state.globalFilter) {
      setInputValue('');
    }
  }, [state.globalFilter]);

  return (
    <Input
      type="text"
      placeholder="All information"
      labelPlacement="outside"
      onValueChange={handleChange}
      value={inputValue}
      defaultValue={state.globalFilter}
      startContent={<FaSearch />}
      size="sm"
    />
  );
};

export default SearchInput;
