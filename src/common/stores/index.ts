import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createFilterTableStore } from '@/common/components/common-table/store';

import { IEntity, base } from './data';

export interface IDataStore {
  baseEntities: IEntity[];
}

/**
 * Base filters store
 */
export const baseFiltersStore = createFilterTableStore();

/**
 * Data store
 */
export const dataStore = create<IDataStore>()(
  immer(() => ({
    baseEntities: base,
  })),
);
