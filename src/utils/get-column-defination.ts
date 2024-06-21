import {
  columnsCoin,
  columnsNewCoin,
  columnsTrending,
} from '@/app/constants/columns';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import useColumnNewCoinsDefs from '@/app/hooks/data-grid/column-defination-new-coins';
import useColumnTrendingDefs from '@/app/hooks/data-grid/column-defination-trending';

export const getColumnDef = (pathname: string) => {
  if (pathname === '/market/coin') {
    return useColumnCoinDefs(columnsCoin);
  } else if (pathname === '/market/new-coin') {
    return useColumnNewCoinsDefs(columnsNewCoin);
  } else if (pathname === '/market/trending') {
    return useColumnTrendingDefs(columnsTrending);
  }
};
