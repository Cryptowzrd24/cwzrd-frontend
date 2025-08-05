import { useMemo } from 'react';
import { RowTooltip } from '@/app/components/row-tooltip';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';
import { VolumeComponent } from '../../components/data-table/volume';

import { getPercentStyle } from '@/utils/profit-loss-color';
import { CirculatingSupply } from '@/app/components/data-table/circulating-supply';
import NewCoin from '@/app/components/data-table/price';

const useColumnCoinDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            width: 60,
          };
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: 190,
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            cellRenderer: NewCoin,
            width: 130,
          };
        case 'percent_change_1h':
        case 'percent_change_24h':
        case 'percent_change_7d':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 90,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;

              return (value > 0 ? '+' : '') + value + '%';
            },
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 158,
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
            width: 195,
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
            width: 150,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCoinDefs;
