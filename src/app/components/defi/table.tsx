'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsDefi } from '@/app/constants/columns';
import useColumnDefiDefs from '@/app/hooks/data-grid/column-defination-defi';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchDefiCoinsDataQuery } from '@/app/redux/reducers/data-grid';

const DefiTable = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const pageSize = 10;

  const columnDefiDef = useColumnDefiDefs(columnsDefi);
  const { data } = useFetchDefiCoinsDataQuery({ start: itemStart, pageSize });

  const totalCount = data?.count || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

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
        coin_id: item.coin_id,
        name: item.name,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_1h: item.quote.percent_change_1h,
        percent_change_24h: item.quote.percent_change_24h,
        percent_change_7d: item.quote.percent_change_7d,
        market_cap: item.quote.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
      }));
      setRowData(res);
    }
  }, [data, currentPage, itemStart]);

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
          rowData={rowData}
          columnDefs={columnDefiDef}
          width="100%"
        />
      </div>
      <Pagination
        length={totalPages}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DefiTable;
