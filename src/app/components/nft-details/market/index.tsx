'use client';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { columnsMarket } from '@/app/constants/columns';
import useColumnMarketDefs from '@/app/hooks/market-data-grid/market';
import DataTable from '../../data-table';
import { Pagination } from '../../data-table/pagination';
import { scrollToTop } from '@/utils/scroll-to-top';
import { usePathname } from 'next/navigation';

const Market = ({ serverNftData }: any) => {
  const pageSize = 10;
  const totalCount = 1;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowData, setRowData] = useState([]);
  const [itemStart, setItemStart] = useState(1);
  const pathname = usePathname();
  const contractId = pathname.split('/')[3];
  const platformAlias = pathname.split('/')[4];

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
    setItemStart((value - 1) * pageSize + 1);
    scrollToTop();
  };
  const getFilteredColumns = () => {
    return columnsMarket.filter((col) => {
      if (col.field === 'distribution_24h' && active === '24H') return true;
      if (col.field === 'distribution_7d' && active === '7D') return true;
      if (col.field === 'distribution_30d' && active === '30D') return true;
      return (
        col.field !== 'distribution_24h' &&
        col.field !== 'distribution_7d' &&
        col.field !== 'distribution_30d'
      );
    });
  };
  const [active, setActive] = useState('24H');
  const colDef = useColumnMarketDefs(getFilteredColumns());

  const handleClick = (button: any) => {
    setActive(button);
  };

  const period = active === '24H' ? 2 : active === '7D' ? 3 : 4;

  useEffect(() => {
    fetch(
      `https://backend.cwzrd.co.uk/api/nft/distributions?platformAlias=${platformAlias}&contract=${contractId}&period=${period}`,
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length >= currentPage * pageSize) setCurrentPage(1);
        const startIndex = (currentPage - 1) * pageSize + 1;
        const res = data.data.map((item: any, index: number) => {
          // Create the base object
          const result: any = {
            id: item?.id,
            logo: item?.logo,
            market_place: item?.marketplace,
            volume: item?.quote?.volume,
            service_fee: item?.serviceFee,
            trade_symbol: item?.tradeSymbol,
            floor_price: item?.floorPrice,
            royalty: item?.royalty,
            index: startIndex + index,
          };

          if (active === '24H') {
            result['distribution_24h'] = item?.percentage;
          } else if (active === '7D') {
            result['distribution_7d'] = item?.percentage;
          } else {
            result['distribution_30d'] = item?.percentage;
          }

          return result;
        });
        setRowData(res);
      })
      .catch((error) => console.error('Error:', error));
  }, [itemStart, active]);

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontSize: '16px',
          fontWeight: '400',
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
              fontSize: '32px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            {serverNftData?.name}{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Market
            </span>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginRight: '-45px',
          }}
        >
          <Box
            onClick={() => handleClick('24H')}
            sx={{
              padding: '10px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === '24H' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
            }}
          >
            <Typography
              // variant="body1"
              sx={{
                fontSize: '13px',
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
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === '7D' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
            }}
          >
            <Typography
              // variant="body1"
              sx={{
                fontSize: '13px',
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
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === '30D' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
            }}
          >
            <Typography
              // variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '700',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              30D
            </Typography>
          </Box>
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
          '& .ag-header-cell:last-child .ag-header-cell-label': {
            justifyContent: 'flex-start',
            textAlign: 'left',
          },
          '& .ag-cell:last-child': {
            textAlign: 'start',
          },
          '& .ag-theme-material .ag-row ': {
            width: '1400px',
          },
        }}
      >
        <DataTable key={active} rowData={rowData} columnDefs={colDef} />
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
