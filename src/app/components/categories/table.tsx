'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsCategories } from '@/app/constants/columns';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchCategoriesDataQuery } from '@/app/redux/reducers/data-grid';
import { scrollToTop } from '@/utils/scroll-to-top';
import useColumnCategoryDefs from '@/app/hooks/data-grid/column-defination-categories';
import debounce from 'debounce';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [rowData, setRowData] = useState([]);
  const [itemStart, setItemStart] = useState(1);

  const columnCategoryDef = useColumnCategoryDefs(columnsCategories);

  const { data } = useFetchCategoriesDataQuery({
    start: currentPage,
    pageSize,
    searchString: search,
  });
  const totalCount = data?.count || 0;

  const debouncedFetchCoinData = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 600),
    [],
  );

  const handleSetSearch = useCallback(
    (value: string) => {
      debouncedFetchCoinData(value);
    },
    [debouncedFetchCoinData],
  );

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
      if (data.data.length >= currentPage * pageSize) setCurrentPage(1);
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        category: item.name,
        top_gainers: item.gainers,
        avg_price_change: item.avg_price_change,
        market_cap: item.market_cap,
        volume_24: String(item.volume),
        num_of_tokens: item.num_tokens,
        last7Days: 'graph',
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
        pageSize={pageSize}
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
          columnDefs={columnCategoryDef}
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
