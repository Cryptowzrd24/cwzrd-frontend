import { useMemo } from 'react';
import { HeaderTooltip } from '@/app/components/header-tooltip';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';

const useColumnTrendingDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            width: 70,
          };
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: 230,
          };
        case 'price':
          return {
            field: 'price',
            headerName: 'Price',
            width: 120,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'percent_change_24h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 95,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatter(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        case 'price_7d':
        case 'price_30d':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 155,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 185,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
            tooltipComponent: HeaderTooltip,
            headerTooltip: 'Market Cap',
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 170,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 155,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnTrendingDefs;
