'use client';
import React, { useCallback, useEffect, useState } from 'react';

import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnNewCoinsDefs from '@/app/hooks/data-grid/column-defination-new-coins';
import { columnsNewCoin } from '@/app/constants/columns';
import { useFetchNewCoinDataQuery } from '@/redux/reducers/data-grid';
import { Pagination } from '@/app/components/data-table/pagination';
import { scrollToTop } from '@/utils/scroll-to-top';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const columnNewCoinsDef = useColumnNewCoinsDefs(columnsNewCoin);
  const { data } = useFetchNewCoinDataQuery({ start: currentPage, pageSize });
  const totalCount = data?.count || 0;
  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
    setItemStart((value - 1) * pageSize + 1);
    scrollToTop();
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    setItemStart(1);
  };

  useEffect(() => {
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
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        fdv: item.quote.fully_diluted_market_cap,
        date_added: item.date_added,
        platform_id: item.platform,
        index: startIndex + index,
      }));
      setRowData(res);
    }
  }, [data, currentPage, itemStart, pageSize]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        search={search}
        setSearch={handleSetSearch}
        setPagination={handlePageSizeChange}
      />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={rowData}
          columnDefs={columnNewCoinsDef}
          getRowId={(params: any) => params.data.coin_id}
          width="100%"
        />
      </div>
      <Pagination
        length={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
