import Dexie, { Table } from 'dexie'
import {
  VisibilityState,
  ColumnOrderState,
  ColumnSizingState,
} from '@tanstack/table-core'

interface ISettingsData {
  id?: string
  data?: VisibilityState
}

interface ISettingsOrderData {
  id?: string
  data?: ColumnOrderState
}

interface ISettingsColumnSizingData {
  id?: string
  data?: ColumnSizingState
}

export class SettingsTable extends Dexie {
  settings!: Table<ISettingsData, string>
  settingsOrder!: Table<ISettingsOrderData, string>
  settingsSizing!: Table<ISettingsColumnSizingData, string>

  constructor() {
    super('settings-table')
    this.version(1).stores({
      settings: 'id',
      settingsOrder: 'id',
      settingsSizing: 'id',
    })
  }
}

export const settingTableDb = new SettingsTable()
