'use client';
import React, { useCallback, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnGainersDefs from '@/app/hooks/data-grid/column-defination-gainers';
import useColumnLosersDefs from '@/app/hooks/data-grid/column-defination-losers';
import { columnsGainers, columnsLosers } from '@/app/constants/columns';
import { rowDataGainers, rowDataLosers } from '@/app/constants/row';
import { Pagination } from '@/app/components/data-table/pagination';

const Table = () => {
  const columnGainersDef = useColumnGainersDefs(columnsGainers);
  const columnLosersDef = useColumnLosersDefs(columnsLosers);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const paginatedRowDataGainers = rowDataGainers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const paginatedRowDataLosers = rowDataLosers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

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
          rowData={paginatedRowDataGainers}
          columnDefs={columnGainersDef}
          width="50%"
        />
        <DataTable
          search={search}
          title={'Top Losers'}
          rowData={paginatedRowDataLosers}
          columnDefs={columnLosersDef}
          width="50%"
        />
      </div>
      <Pagination
        length={Math.max(rowDataGainers.length, rowDataLosers.length)}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
