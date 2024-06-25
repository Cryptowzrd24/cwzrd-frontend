'use client';
import React, { useState, useCallback } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnChainsDefs from '@/app/hooks/data-grid/column-defination-chains';
import { columnsChain } from '@/app/constants/columns';
import { rowDataChains } from '@/app/constants/row';
import { Pagination } from '@/app/components/data-table/pagination';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const columnChainsDef = useColumnChainsDefs(columnsChain);

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const paginatedRowData = rowDataChains.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={handleSetSearch} />
      <div style={tableStyles}>
        <DataTable
          search={search}
          rowData={paginatedRowData}
          columnDefs={columnChainsDef}
          width="100%"
        />
      </div>
      <Pagination
        length={rowDataChains.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const tableStyles = {
  display: 'flex',
  gap: '36px',
};

export default Table;
