'use client';
import React, { useCallback, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsAirdrops } from '@/app/constants/columns';
import { rowAirdrops } from '@/app/constants/row';
import useColumnAirdropsDefs from '@/app/hooks/data-grid/column-defination-airdrops';
import { Pagination } from '@/app/components/data-table/pagination';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const columnAirDropsDef = useColumnAirdropsDefs(columnsAirdrops);

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const paginatedRowData = rowAirdrops.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const handlePagination = (page: number) => {
    setPageSize(page);
  };
  return (
    <div className="data-table-wrapper">
      <CustomHeader
        filter={true}
        search={search}
        setSearch={handleSetSearch}
        setPagination={handlePagination}
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
          columnDefs={columnAirDropsDef}
          width="100%"
          getAirDropMain={true}
        />
      </div>
      <Pagination
        length={rowAirdrops.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
