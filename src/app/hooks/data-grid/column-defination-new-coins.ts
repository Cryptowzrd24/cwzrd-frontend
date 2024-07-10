import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { ChainComp } from '../../components/data-table/chain';
import { VolumeComponent } from '../../components/data-table/volume';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';

import '../../../app/styles/new-coins.css';
import { DateAdded } from '@/app/components/data-table/date-component';

const useColumnNewCoinsDefs = (columns: any) => {
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
            width: 220,
          };
        case 'price':
          return {
            field: 'price',
            headerName: 'Price',
            width: 125,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'percent_change_1h':
        case 'percent_change_24h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 130,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatter(value) + ' %';
              return profitLossCheck(formattedValue);
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
            width: 95,
            headerName: 'Chain',
            cellRenderer: ChainComp,
          };
        case 'fdv':
          return {
            field: 'fdv',
            width: 230,
            headerComponent: HeaderComponent,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'date_added':
          return {
            field: 'date_added',
            width: 140,
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
