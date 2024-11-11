import { immer } from 'zustand/middleware/immer';
import { create, StoreApi, UseBoundStore } from 'zustand';
import { ColumnFiltersState, SortingState, Updater } from '@tanstack/table-core';

export interface IFilterTable {
  sorting: SortingState;
  globalFilter: string;
  columnFilters: ColumnFiltersState;
  setGlobalFilter: (newFilter: Updater<string>) => void;
  setColumnFilters: (newFilters: Updater<ColumnFiltersState>) => void;
  setSorting: (newFilters: Updater<SortingState>) => void;
}

/**
 * Create filter store
 * You can use it like global store or with context on your page
 */
export const createFilterTableStore = (): UseBoundStore<StoreApi<IFilterTable>> =>
  create<IFilterTable>()(
    immer((set) => ({
      globalFilter: '',
      columnFilters: [],
      sorting: [],

      /**
       * Set global filter
       * @param newData
       */
      setGlobalFilter: (newData) =>
        set((state) => {
          state.globalFilter =
            typeof newData === 'function' ? newData(state.globalFilter) : newData;
        }),

      /**
       * Set column filter
       * @param newData
       */
      setColumnFilters: (newData) =>
        set((state) => {
          state.columnFilters =
            typeof newData === 'function' ? newData(state.columnFilters) : newData;
        }),

      /**
       * Set sorting
       * @param newData
       */
      setSorting: (newData) =>
        set((state) => {
          state.sorting = typeof newData === 'function' ? newData(state.sorting) : newData;
        }),
    })),
  );
