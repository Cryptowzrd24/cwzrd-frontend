'use client';
import { Box, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';
import { columnsCollections, columnsMarket } from '@/app/constants/columns';
import useColumnMarketDefs from '@/app/hooks/market-data-grid/market';
import { rowDataMarket } from '@/app/constants/row';
import DataTable from '../../data-table';
import { Pagination } from '../../data-table/pagination';

const Market = () => {
  const colDef = useColumnMarketDefs(columnsMarket);
  const [itemStart, setItemStart] = useState(1);
  const [search, setSearch] = useState('');

  const [pageSize, setPageSize] = useState<number>(10);
  // const totalCount = data?.count || 0;
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
  const [active, setActive] = useState(null);
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
              Market
            </span>{' '}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Box
            onClick={() => handleClick('24H')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === '24H' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
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
              24H
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('7D')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === '7D' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
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
              7D
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('30D')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === '30D' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
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
              30D
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: '48px' }}>
        <DataTable rowData={rowDataMarket} columnDefs={colDef} />
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

export default Market;
