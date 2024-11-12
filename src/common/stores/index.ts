import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createFilterTableStore } from '@/common/components/common-table/store';

import { IEntity, base, generateManyEntities } from './data';

export interface IDataStore {
  baseEntities: IEntity[];
  manyEntities: IEntity[];
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
    manyEntities: generateManyEntities(50),
  })),
);
