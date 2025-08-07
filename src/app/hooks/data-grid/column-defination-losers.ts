import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';

import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';

import '../../../app/styles/new-coins.css';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';
import NewCoin from '@/app/components/data-table/price';
import { getResponsiveWidth } from '@/utils/getTableResponsiveWidth';

const useColumnLosersDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            pinned: 'left',
            width: getResponsiveWidth(70, 70, 60),
            cellClass: 'tight-cell',
          };
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: getResponsiveWidth(190, 170, 140),
            pinned: 'left',
            headerClass: 'left-align-header',
            cellClass: 'tight-cell',
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            width: 155,
            cellRenderer: NewCoin,
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 135,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'percent_change_24h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 110,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatDigits(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnLosersDefs;
