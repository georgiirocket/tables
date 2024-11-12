'use client';

import { useCallback } from 'react';
import {
  VisibilityState,
  Updater,
  ColumnOrderState,
  ColumnSizingState,
} from '@tanstack/table-core';
import { useLiveQuery } from 'dexie-react-hooks';

import { settingTableDb } from '@/common/components/common-table/index-db/settings-db';

/**
 * Save settings table
 */
const useSaveTableSetting = (type: string) => {
  const [settingData = {}, isLoadSettingData] = useLiveQuery(
    () => settingTableDb.settings.get({ id: type }).then((data) => [data, true]),
    [type],
    [],
  );

  const [settingOrderData = {}, isLoadSettingsOrderData] = useLiveQuery(
    () => settingTableDb.settingsOrder.get({ id: type }).then((data) => [data, true]),
    [type],
    [],
  );

  const [settingSizingData = {}, isLoadSettingsSizingData] = useLiveQuery(
    () => settingTableDb.settingsSizing.get({ id: type }).then((data) => [data, true]),
    [type],
    [],
  );

  const { data: columnVisibility } = settingData;
  const { data: columnOrder } = settingOrderData;
  const { data: columnSizing = {} } = settingSizingData;

  const isPendingSettings =
    !isLoadSettingData || !isLoadSettingsOrderData || !isLoadSettingsSizingData;

  /**
   * Update visibility state
   */
  const updateVisibility = useCallback(
    async (data: VisibilityState) => {
      try {
        await settingTableDb.settings.put({ id: type, data });
      } catch (e) {
        console.error(e);
      }
    },
    [type],
  );

  /**
   * Update order state
   */
  const updateOrderState = useCallback(
    async (data: ColumnOrderState) => {
      try {
        await settingTableDb.settingsOrder.put({ id: type, data });
      } catch (e) {
        console.error(e);
      }
    },
    [type],
  );

  /**
   * Update column sizing
   */
  const updateColumnSizingState = useCallback(
    async (data: ColumnSizingState) => {
      try {
        await settingTableDb.settingsSizing.put({ id: type, data });
      } catch (e) {
        console.error(e);
      }
    },
    [type],
  );

  /**
   * Change column visibility
   */
  const onColumnVisibilityChange = useCallback(
    (updater: Updater<VisibilityState>): void => {
      if (typeof updater !== 'function') {
        void updateVisibility(updater);

        return;
      }

      void updateVisibility(updater(columnVisibility ?? {}));
    },
    [columnVisibility],
  );

  /**
   * Change column order
   */
  const onColumnOrderChange = (updater: Updater<ColumnOrderState>): void => {
    if (typeof updater !== 'function') {
      void updateOrderState(updater);

      return;
    }

    void updateOrderState(updater([]));
  };

  /**
   * Change column sizing
   */
  const onColumnSizingChange = useCallback(
    (updater: Updater<ColumnSizingState>): void => {
      if (typeof updater !== 'function') {
        void updateColumnSizingState(updater);

        return;
      }

      void updateColumnSizingState(updater(columnSizing));
    },
    [columnSizing],
  );

  return {
    isPendingSettings,
    settingState: { columnVisibility, columnOrder, columnSizing },
    settingHandlers: {
      onColumnVisibilityChange,
      onColumnOrderChange,
      onColumnSizingChange,
    },
  };
};

export default useSaveTableSetting;
