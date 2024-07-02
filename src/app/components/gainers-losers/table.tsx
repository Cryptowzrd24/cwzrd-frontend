'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnGainersDefs from '@/app/hooks/data-grid/column-defination-gainers';
import useColumnLosersDefs from '@/app/hooks/data-grid/column-defination-losers';
import { columnsGainers, columnsLosers } from '@/app/constants/columns';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchGainersLosersDataQuery } from '@/app/redux/reducers/data-grid';

const Table = () => {
  const columnGainersDef = useColumnGainersDefs(columnsGainers);
  const columnLosersDef = useColumnLosersDefs(columnsLosers);
  const [itemStart, setItemStart] = useState(1);
  const pageSize = 10;

  const [search, setSearch] = useState('');
  const [rowGainersData, setRowGainersData] = useState([]);
  const [rowLosersData, setRowLosersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useFetchGainersLosersDataQuery({
    start: itemStart,
    pageSize,
  });
  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    const itemsNumber = value * 10 - 9;
    setItemStart(itemsNumber);
    setCurrentPage(value);
  };

  useEffect(() => {
    if (data && data.top_gainers) {
      const res = data.top_gainers.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_24h: item.quote.percent_change_24h,
        symbol: item.symbol,
        coin_id: item.coin_id,
      }));
      setRowGainersData(res);
    }

    if (data && data.top_losers) {
      const res = data.top_losers.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_24h: item.quote.percent_change_24h,
        symbol: item.symbol,
        coin_id: item.coin_id,
      }));
      setRowLosersData(res);
    }
  }, [data, currentPage, itemStart]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={handleSetSearch} />
      <div
        style={{
          display: 'flex',
          gap: '36px',
          borderTop: '1px solid #1111111A',
          paddingTop: '24px',
        }}
      >
        <DataTable
          search={search}
          title={'Top Gainers'}
          rowData={rowGainersData}
          columnDefs={columnGainersDef}
          width="50%"
        />
        <DataTable
          search={search}
          title={'Top Losers'}
          rowData={rowLosersData}
          columnDefs={columnLosersDef}
          width="50%"
        />
      </div>
      <Pagination
        length={data?.count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
