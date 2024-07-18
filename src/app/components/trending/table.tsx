'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsTrending } from '@/app/constants/columns';
import useColumnTrendingDefs from '@/app/hooks/data-grid/column-defination-trending';
import { useFetchTrendingDataQuery } from '@/app/redux/reducers/data-grid';
import { Pagination } from '@/app/components/data-table/pagination';
import { scrollToTop } from '@/utils/scroll-to-top';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [time_period, setTimePeriod] = useState<any>('24h');

  const columnTrendingDef = useColumnTrendingDefs(columnsTrending);
  const { data } = useFetchTrendingDataQuery({
    start: currentPage,
    pageSize,
    time_period,
  });
  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    setItemStart(1);
  };
  const handleVolumeSizeChange = (newVolumeSize: any) => {
    setTimePeriod(newVolumeSize);
  };
  const paginatedRowData = rowData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const totalCount = data?.count || 0;

  useEffect(() => {
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        id: item.id,
        name: item.name,
        coin_id: item.coin_id,
        price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_1h: item.quote.USD.percent_change_1h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        percent_change_7d: item.quote.USD.percent_change_7d,
        market_cap: item.quote.USD.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
        index: startIndex + index,
      }));
      setRowData(res);
    }
  }, [data, currentPage, itemStart, pageSize, time_period]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
    setItemStart((value - 1) * pageSize + 1);
    scrollToTop();
  };

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        search={search}
        setSearch={handleSetSearch}
        setPagination={handlePageSizeChange}
        setVolume={handleVolumeSizeChange}
        volume={time_period}
      />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={paginatedRowData}
          columnDefs={columnTrendingDef}
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
