'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsMostVisited } from '@/app/constants/columns';
import useColumnMostVisitedDefs from '@/app/hooks/data-grid/column-defination-most-visit';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchMostVisitedDataQuery } from '@/app/redux/reducers/data-grid';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const pageSize = 10;

  const columnMostVisitedDef = useColumnMostVisitedDefs(columnsMostVisited);
  const { data } = useFetchMostVisitedDataQuery({ start: itemStart, pageSize });

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
      setRowData(res);
    }
  }, [data]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader view={true} search={search} setSearch={handleSetSearch} />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={rowData}
          columnDefs={columnMostVisitedDef}
          width="100%"
        />
      </div>
      <Pagination
        length={1200}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
