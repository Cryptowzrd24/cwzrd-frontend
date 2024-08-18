'use client';
import React, { useEffect, useState, useRef } from 'react';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { useFetchFavoritesDataQuery } from '@/app/redux/reducers/data-grid';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useAppSelector } from '@/app/redux/store';

const Table = ({ selectedWatchList }) => {
  const [search] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage] = useState(1);
  const [itemStart] = useState(1);
  const [pageSize] = useState<number>(10);
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);
  const filters = useSelector((state: any) => state.filters.filters);
  const { favorites } = useAppSelector((state) => state.market);

  const favoriteIds = favorites ? favorites.join(',') : '';

  const favoriteCount = Cookies.get('watchlistEmail')
    ? (selectedWatchList?.ids?.length ?? 0)
    : favorites
      ? favorites.length
      : 0;

  const { data, error } = useFetchFavoritesDataQuery({
    id: favoriteIds,
  });

  const gridApiRef = useRef<any>(null);
  const priceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (error?.status === 400) {
      setRowData([]);
      return;
    }
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        id: item.id,
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
  }, [data, currentPage, itemStart, pageSize, filters, error]);

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
