'use client';
import { columnsActivity } from '@/app/constants/columns';
import useColumnActivityDefs from '@/app/hooks/activity-data-grid/activity';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import DataTable from '../../data-table';
import { rowDataActivity } from '@/app/constants/row';
import { Pagination } from '../../data-table/pagination';

const Activity = () => {
  const colDef = useColumnActivityDefs(columnsActivity);

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
              fontSize: '32px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Persona{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Activity
            </span>{' '}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: '16px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          width: '100%',
          borderRadius: '24px',
          padding: '20px 24px 20px 24px',
          '& .ag-header': {
            borderTop: 'none',
          },
        }}
      >
        <DataTable rowData={rowDataActivity} columnDefs={colDef} />
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
