import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { ChainComp } from '../../components/data-table/chain';
import { VolumeComponent } from '../../components/data-table/volume';

import { getPercentStyle } from '@/utils/profit-loss-color';

import '../../../app/styles/new-coins.css';
import { DateAdded } from '@/app/components/data-table/date-component';
import NewCoin from '@/app/components/data-table/price';
import { getResponsiveWidth } from '@/utils/getTableResponsiveWidth';

const useColumnNewCoinsDefs = (columns: any) => {
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
            width: getResponsiveWidth(190, 170, 125),
            pinned: 'left',
            headerClass: 'left-align-header',
            cellClass: 'tight-cell',
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            width: 135,
            cellRenderer: NewCoin,
          };
        case 'percent_change_1h':
        case 'percent_change_24h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 100,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;

              return (value >= 0 ? '+' : '') + value + '%';
            },
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 190,
            cellRenderer: VolumeComponent,
          };
        case 'chain':
          return {
            field: 'chain',
            width: 105,
            headerName: 'Chain',
            cellRenderer: ChainComp,
          };
        case 'fdv':
          return {
            field: 'fdv',
            width: 230,
            headerComponent: HeaderComponent,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'date_added':
          return {
            field: 'date_added',
            width: 160,
            headerName: 'Date Added',
            cellRenderer: DateAdded,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnNewCoinsDefs;
