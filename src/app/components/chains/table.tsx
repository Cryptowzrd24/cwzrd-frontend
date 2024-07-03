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
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);

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
  const handlePagination = (page: number) => {
    setPageSize(page);
  };

  const paginatedRowData = rowDataChains.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const handleToggleCards = () => {
    console.log('Toggling showCards:', !showCards);
    setShowCards((prevShowCards) => !prevShowCards);
  };
  return (
    <div className="data-table-wrapper">
      <CustomHeader
        view={true}
        search={search}
        setSearch={handleSetSearch}
        onToggleView={handleToggleCards}
        setPagination={handlePagination}
      />
      <div style={tableStyles}>
        {showCards ? (
          <div>Card Content</div>
        ) : (
          <DataTable
            search={search}
            rowData={paginatedRowData}
            columnDefs={columnChainsDef}
            width="100%"
          />
        )}
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
