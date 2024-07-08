'use client';
import { columnsSales } from '@/app/constants/columns';
import useColumnSalesDefs from '@/app/hooks/sales-data-grid/sales';
import { Box, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import DataTable from '../../data-table';
import { rowDataSales } from '@/app/constants/row';
import { Pagination } from '../../data-table/pagination';

const Activity = () => {
  const colDef = useColumnSalesDefs(columnsSales);
  const [itemStart, setItemStart] = useState(1);
  const [search, setSearch] = useState('');

  const [pageSize, setPageSize] = useState<number>(10);
  const totalCount = 50;
  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    const itemsNumber = value * 10 - 9;
    setItemStart(itemsNumber);
    setCurrentPage(value);
  };
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: 1,
          letterSpacing: '2px',
          mb: '4px',
        }}
      >
        ACTIVITY
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '56px',
              fontWeight: '600',
              color: 'rgba(17, 17, 17, 1)',
              letterSpacing: '-2px',
            }}
          >
            Persona{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-2px',
              }}
            >
              Activity
            </span>{' '}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: '48px' }}>
        <DataTable rowData={rowDataSales} columnDefs={colDef} />
        <Pagination
          length={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />{' '}
      </Box>
    </>
  );
};

export default Activity;
