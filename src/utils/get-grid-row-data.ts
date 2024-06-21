import {
  rowDataCoin,
  rowDataNewCoins,
  rowDataTrending,
} from '@/app/constants/row';

export const getRowData = (pathname: string) => {
  if (pathname === '/market/coin') {
    return rowDataCoin;
  } else if (pathname === '/market/new-coin') {
    return rowDataNewCoins;
  } else if (pathname === '/market/trending') {
    return rowDataTrending;
  }
};
