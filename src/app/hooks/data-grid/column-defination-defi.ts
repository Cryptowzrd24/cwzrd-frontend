import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';
import { VolumeComponent } from '../../components/data-table/volume';

import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';
import NewCoin from '@/app/components/data-table/price';
import { CirculatingSupply } from '@/app/components/data-table/circulating-supply';
import { RowTooltip } from '@/app/components/row-tooltip';

const useColumnDefiDefs = (columns: any) => {
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
            width: 205,
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            width: 120,
            cellRenderer: NewCoin,
          };
        case 'percent_change_1h':
        case 'percent_change_24h':
        case 'percent_change_7d':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 100,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatDigits(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 145,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 165,
            cellRenderer: VolumeComponent,
          };
        case 'circulating_supply':
          return {
            field: 'circulating_supply',
            headerComponent: HeaderComponent,
            width: 165,
            cellRenderer: CirculatingSupply,
            tooltipComponent: RowTooltip,
            tooltipValueGetter: (params: any) =>
              params.value == null || params.value === ''
                ? '- Missing -'
                : params.value,
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 165,
            headerName: 'Volume (7d)',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnDefiDefs;
