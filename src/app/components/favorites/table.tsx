'use client';
import React, { useEffect, useState, useRef } from 'react';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import {
  useFetchFavoritesDataQuery,
  useFetchWatchlistQuery,
} from '@/app/redux/reducers/data-grid';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/app/redux/store';
import Cookies from 'js-cookie';

const Table = () => {
  const [search] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage] = useState(1);
  const [itemStart] = useState(1);
  const [pageSize] = useState<number>(10);
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);
  const filters = useSelector((state: any) => state.filters.filters);
  const { favorites } = useAppSelector((state) => state.market);
  const { token } = useSelector((state: any) => state.user);
  const { selectedWatchListName } = useSelector((state: any) => state.market);
  console.log('selected', selectedWatchListName);

  const favoriteIds = favorites ? favorites.join(',') : '';
  const { data, error } = Cookies.get('authToken')
    ? useFetchWatchlistQuery({ token })
    : useFetchFavoritesDataQuery({
        id: favoriteIds,
      });

  // console.log('dataaa', JSON.stringify(data));

  // const { data, error } = useFetchFavoritesDataQuery({
  //   id: favoriteIds,
  // });

  const gridApiRef = useRef<any>(null);
  const priceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if ((error as any)?.status === 400) {
      setRowData([]);
      return;
    }

    if (Cookies.get('authToken') && data && data?.collections) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data?.collections
        ?.filter(
          (collection: any) =>
            collection?.collection_name.toString() == selectedWatchListName,
        )
        .flatMap((collection: any) => collection.coins)
        .map((item: any, index: number) => ({
          id: item._id,
          coin_id: item.coin_id,
          name: item.name,
          new_price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_1h: item.quote.percent_change_1h,
          percent_change_24h: item.quote.percent_change_24h,
          percent_change_7d: item.quote.percent_change_7d,
          market_cap: item.quote.market_cap,
          circulating_supply: item.circulating_supply,
          symbol: item.symbol,
          max_supply: item.max_supply,
          index: startIndex + index,
        }));
      setRowData(res);
    } else if (!Cookies.get('authToken')) {
      if (data) {
        const startIndex = (currentPage - 1) * pageSize + 1;
        const res = data?.data?.map((item: any, index: number) => ({
          id: item._id,
          coin_id: item.coin_id,
          name: item.name,
          new_price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_1h: item.quote.percent_change_1h,
          percent_change_24h: item.quote.percent_change_24h,
          percent_change_7d: item.quote.percent_change_7d,
          market_cap: item.quote.market_cap,
          circulating_supply: item.circulating_supply,
          symbol: item.symbol,
          max_supply: item.max_supply,
          index: startIndex + index,
        }));

        setRowData(res);
      }
    }
  }, [
    data,
    selectedWatchListName,
    currentPage,
    itemStart,
    pageSize,
    filters,
    error,
    Cookies.get('authToken'),
  ]);

  return (
    <>
      <div
        style={{
          color: '#616E85',
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '8px',
          textAlign: 'end',
          paddingRight: '12px',
          letterSpacing: '0.4px',
        }}
      >
        {favorites.length} {favorites.length === 1 ? 'coin' : 'coins'} in total
      </div>
      <div className="data-table-wrapper">
        <div
          style={{
            display: 'flex',
            gap: '36px',
          }}
        >
          <DataTable
            search={search}
            rowData={rowData}
            columnDefs={columnCoinsDef}
            width="100%"
            gridApiRef={gridApiRef}
            getRowId={(params: any) => params.data.coin_id}
            priceRefs={priceRefs}
            height="400px"
          />
        </div>
      </div>
    </>
  );
};

export default Table;
