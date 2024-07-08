'use client';
import { columnsSales } from '@/app/constants/columns';
import useColumnSalesDefs from '@/app/hooks/sales-data-grid/sales';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import DataTable from '../../data-table';
import { rowDataSales } from '@/app/constants/row';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';
import { Pagination } from '../../data-table/pagination';

const Sales = () => {
  const colDef = useColumnSalesDefs(columnsSales);
  const pageSize = 10;
  const totalCount = 50;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
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
        SALES
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
              Sales
            </span>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: '16px 24px 16px 32px',
            borderRadius: '56px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(17, 17, 17, 0.05)',
            cursor: 'pointer',
            '&:hover': {
              background: 'rgba(17, 17, 17, 0.15)',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'rgba(0, 0, 0, 1)',
            }}
          >
            View More{' '}
          </Typography>
          <span style={{ marginTop: '4px' }}>
            <ArrowRightDark />
          </span>
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

export default Sales;
