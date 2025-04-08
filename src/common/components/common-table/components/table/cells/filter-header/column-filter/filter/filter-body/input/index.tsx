'use client'

import { FC, useState } from 'react'
import { Input } from '@heroui/input'
import { FaSearch } from 'react-icons/fa'

interface ISearchFilterInput {
  value: string
  onInputChange: (value: string) => void
}

/**
 * Search filter input component
 */
const SearchFilterInput: FC<ISearchFilterInput> = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (newValue: string): void => {
    setInputValue(newValue)
    onInputChange(newValue)
  }

  return (
    <Input
      type="text"
      placeholder="All information"
      labelPlacement="outside"
      onValueChange={handleChange}
      value={inputValue}
      startContent={<FaSearch />}
      size="sm"
      className="col-span-full"
    />
  )
}

export default SearchFilterInput
