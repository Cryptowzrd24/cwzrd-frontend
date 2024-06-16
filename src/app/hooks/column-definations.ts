// useColumnDefs.js

import { useMemo } from 'react';
import { HeaderTooltip } from '@/app/components/HeaderTooltip';
import { RowTooltip } from '@/app/components/RowTooltip';
import { HeaderComponent } from '@/app/components/DataTable/HeaderComponent';
import { CurrencyNameComponent } from '@/app/components/DataTable/NameComponent';
import { IndexComponent } from '@/app/components/DataTable/IndexComponent';
import { GraphComp } from '../components/DataTable/GraphComponent';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';

const useColumnDefs = (columns: any) => {
  const columnDefs = useMemo(() => {
    return columns.map((col) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: IndexComponent,
            width: 70,
          };
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: 180,
          };
        case 'price':
          return {
            field: 'price',
            headerName: 'Price',
            width: 120,
            valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
          };
        case 'percent_change_1h':
        case 'percent_change_24h':
        case 'percent_change_7d':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 90,
            cellStyle: (p) => getPercentStyle(p.value),
            valueFormatter: (p) => {
              const value = p.value;
              const formattedValue = priceNumberFormatter(value) + '%';
              return profitLossCheck(formattedValue);
            },
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 165,
            valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
            tooltipComponent: HeaderTooltip,
            headerTooltip: 'Market Cap',
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 165,
            valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
          };
        case 'circulating_supply':
          return {
            field: 'circulating_supply',
            headerComponent: HeaderComponent,
            width: 165,
            valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
            tooltipComponent: RowTooltip,
            tooltipValueGetter: (params) =>
              params.value == null || params.value === ''
                ? '- Missing -'
                : params.value,
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 165,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        case 'chain':
          return {
            field: 'chain',
            width: 145,
            headerName: 'Chain',
            cellRenderer: GraphComp,
          };
        case 'fdv':
          return {
            field: 'fdv',
            width: 165,
            headerComponent: HeaderComponent,
            valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
          };
        case 'last7Added':
          return {
            field: 'last7Added',
            width: 165,
            headerName: 'Last 7 Added',
            valueFormatter: (p) => p.value,
          };
        default:
          return col;
      }
    });
  }, [columns]);

  return columnDefs;
};

export default useColumnDefs;
