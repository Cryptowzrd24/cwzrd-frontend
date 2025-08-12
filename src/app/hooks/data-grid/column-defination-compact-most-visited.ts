import { useMemo } from 'react';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';

import '../../../app/styles/new-coins.css';
import NewCoin from '@/app/components/data-table/price';
import { getResponsiveWidth } from '@/utils/getTableResponsiveWidth';

const useColumnCompactMostVisitedDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            width: getResponsiveWidth(50, 40, 40),
            pinned: 'left',
            cellClass: 'tight-cell',
            headerClass: 'left-align-header',
          };
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: getResponsiveWidth(160, 150, 115),
            pinned: 'left',
            cellClass: 'tight-cell',
            headerClass: 'left-align-header',
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            width: 120,
            cellRenderer: NewCoin,
          };
        case 'percent_change_24h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 100,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatter(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCompactMostVisitedDefs;
