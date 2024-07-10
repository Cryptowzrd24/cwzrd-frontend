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
  const [, setItemStart] = useState(1);
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
    setItemStart((value - 1) * pageSize + 1);
    setCurrentPage(value);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    setItemStart(1);
  };

  const paginatedRowData = rowDataChains.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const handleToggleCards = () => {
    setShowCards((prevShowCards) => !prevShowCards);
  };
  return (
    <div className="data-table-wrapper">
      <CustomHeader
        view={true}
        search={search}
        setSearch={handleSetSearch}
        onToggleView={handleToggleCards}
        setPagination={handlePageSizeChange}
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
