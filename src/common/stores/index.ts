import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createFilterTableStore } from '@/common/components/common-table/store';

import { IEntity, base, generateManyEntities } from './data';

export interface IDataStore {
  baseEntities: IEntity[];
  manyEntities: IEntity[];
  updateTableEntities: IEntity[];
  updateData: () => Promise<void>;
}

/**
 * Base filters store
 */
export const baseFiltersStore = createFilterTableStore();

/**
 * Data store
 */
export const dataStore = create<IDataStore>()(
  immer((set) => ({
    baseEntities: base,
    manyEntities: generateManyEntities(50),
    updateTableEntities: base,

    /**
     * Update table data
     */
    updateData: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          set((state) => {
            state.updateTableEntities = state.updateTableEntities.reverse();
          });

          resolve();
        }, 1000);
      });
    },
  })),
);
