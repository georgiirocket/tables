import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { IEntity, base } from './data';

export interface IDataStore {
  baseEntities: IEntity[];
}

/**
 * Data store
 */
export const dataStore = create<IDataStore>()(
  immer(() => ({
    baseEntities: base,
  })),
);
