import { Column, Table } from '@tanstack/table-core';
import writeXlsxFile, { Row } from 'write-excel-file';
import { round } from 'lodash';
import { useCallback } from 'react';

interface IHeader {
  id: string;
  header: string;
  size: number;
}

/**
 * Create excel from table
 */
const useTableExcel = (table: Table<any>, name: string | (() => string)) => {
  /**
   * Create header entity
   * @param column
   */
  const createHeaderEntity = (column: Column<any>): IHeader => {
    const {
      id,
      columnDef: { header, meta, size },
    } = column;

    return {
      id,
      header: typeof header === 'string' ? header : (meta?.headerName ?? 'Unknown'),
      size: size ? round(size / 8) : 10,
    };
  };

  /**
   * Create excel data
   */
  const createExcel = useCallback(async (): Promise<void> => {
    try {
      const { rows } = table.getRowModel();
      const columns = table.getVisibleLeafColumns();

      const headers: IHeader[] = columns
        .filter((column) => column.columnDef.meta?.isDownloadExcel)
        .map(createHeaderEntity);

      const data = rows.reduce((acc, { getValue }) => {
        const row: Row = headers.map(({ id }) => {
          const value = getValue(id);

          switch (typeof value) {
            case 'number':
              return { type: Number, value };

            case 'boolean':
              return { type: Boolean, value };

            default:
              return { type: String, value: String(value) };
          }
        });

        return [...acc, row];
      }, [] as any);

      const headerRow: Row = headers.map(({ header }) => ({
        value: header,
        fontWeight: 'bold',
      }));

      await writeXlsxFile([headerRow, ...data], {
        fileName: `${typeof name === 'function' ? name() : name}.xlsx`,
        stickyRowsCount: 1,
        fontSize: 12,
        columns: headers.map(({ size }) => ({
          width: size,
        })),
      });
    } catch (e) {
      console.error((e as Error).message);
    }
  }, []);

  return { createExcel };
};

export default useTableExcel;
