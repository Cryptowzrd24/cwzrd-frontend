'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import { rowDataCoinMarket } from '@/app/constants/row';
import DataTable from '../../data-table';
import { Pagination } from '../../data-table/pagination';
import useColumnCoinDetailDefs from '@/app/hooks/coin-detail-grid';
import { columnsCoinMarket } from '@/app/constants/columns';

const CoinMarket = () => {
  const colDef = useColumnCoinDetailDefs(columnsCoinMarket);
  const pageSize = 10;
  const totalCount = 50;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };
  const [active, setActive] = useState('Spot');
  const handleClick = (button: any) => {
    setActive(button);
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
        MARKET
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
            Bitcoin{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-2px',
              }}
            >
              Markets
            </span>{' '}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Box
            onClick={() => handleClick('Spot')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === 'Spot' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              Spot
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('Perpetuals')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === 'Perpetuals'
                  ? '1px solid rgba(114, 72, 247, 1)'
                  : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              Perpetuals
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('Futures')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === 'Futures'
                  ? '1px solid rgba(114, 72, 247, 1)'
                  : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              Futures
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: '48px' }}>
        <DataTable rowData={rowDataCoinMarket} columnDefs={colDef} />
        <Pagination
          length={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default CoinMarket;
