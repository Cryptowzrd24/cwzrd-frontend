'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsHighestVol } from '@/app/constants/columns';
import useColumnHighestVolDefs from '@/app/hooks/data-grid/column-defination-highest-vol';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchCoinDataQuery } from '@/app/redux/reducers/data-grid';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const columnDefiDef = useColumnHighestVolDefs(columnsHighestVol);
  const { data } = useFetchCoinDataQuery({});

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const paginatedRowData = rowData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  useEffect(() => {
    if (data && data.data) {
      const res = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_1h: item.quote.USD.percent_change_1h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        percent_change_7d: item.quote.USD.percent_change_7d,
        market_cap: item.quote.USD.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
      }));
      const sortedRes = res.sort(
        (a: any, b: any) => b.volume_24h - a.volume_24h,
      );
      setRowData(sortedRes);
    }
  }, [data]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={handleSetSearch} />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={paginatedRowData}
          columnDefs={columnDefiDef}
          width="100%"
        />
      </div>

      <Pagination
        length={rowData.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
