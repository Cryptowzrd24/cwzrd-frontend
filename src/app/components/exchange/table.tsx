'use client';
import React, { useCallback, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsExchanges } from '@/app/constants/columns';
import { rowDataExchange } from '@/app/constants/row';
import useColumnExchangeDefs from '@/app/hooks/data-grid/column-defination-exchange';
import { Pagination } from '@/app/components/data-table/pagination';
import { scrollToTop } from '@/utils/scroll-to-top';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const columnExchangesDef = useColumnExchangeDefs(columnsExchanges);

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
  const paginatedRowData = rowDataExchange.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        view={true}
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
          rowData={paginatedRowData}
          columnDefs={columnExchangesDef}
          width="100%"
        />
      </div>
      <Pagination
        length={rowDataExchange.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
