'use client';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataTable from '../../data-table';
import { Pagination } from '../../data-table/pagination';
import { columnsCoinAnalytics } from '@/app/constants/columns';
import useColumnCoinDetailAnalyticsDefs from '@/app/hooks/coin-details-analytics-grid';
import { useFetchHistoricalCoinDataDetailsQuery } from '@/app/redux/reducers/data-grid';

const CoinAnalytics = ({ coinId }: any) => {
  const [active, setActive] = useState('1 Month');
  const getTimeStampForPeriod = (period: any) => {
    const currentTime = Date.now();
    let pastTime;

    switch (period) {
      case '1 Month':
        pastTime = currentTime - 30 * 24 * 60 * 60 * 1000;
        break;
      case '1 Year':
        pastTime = currentTime - 365 * 24 * 60 * 60 * 1000;
        break;
      case 'All':
        pastTime = 0;
        break;
      default:
        throw new Error('Unsupported period. Use "month" or "year".');
    }

    return Math.floor(pastTime / 1000);
  };
  const interval = () => {
    if (active === '1 Month') {
      return '1d';
    } else if (active === '1 Year') {
      return '7d';
    } else if (active === 'All') {
      return '30d';
    } else {
      return '1h';
    }
  };
  const { data: historicalData } = useFetchHistoricalCoinDataDetailsQuery({
    coinId: coinId,
    timeStart: getTimeStampForPeriod(active),
    interval: interval(),
  });
  const [rowData, setRowData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const colDef = useColumnCoinDetailAnalyticsDefs(columnsCoinAnalytics);
  const totalCount = rowData?.length;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const handleClick = (button: any) => {
    setActive(button);
  };

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  useEffect(() => {
    if (historicalData && historicalData.data) {
      const res = historicalData?.data?.quotes?.map(
        (item: any, index: number) => ({
          id: index + 1,
          open: item.quote?.open,
          high: item.quote?.high,
          low: item.quote?.low,
          close: item.quote?.close,
          volume: item.quote?.volume,
          market_cap: item.quote?.marketCap,
          date: formatDate(item.quote?.timestamp),
          index: index + 1,
        }),
      );
      setRowData(res);
    }
  }, [historicalData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedData(rowData.slice(startIndex, endIndex));
  }, [rowData, currentPage, pageSize]);

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
          ml: '4px',
        }}
      >
        Analytics
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
            {historicalData?.data?.name}{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Historical Data
            </span>{' '}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Box
            onClick={() => handleClick('1 Month')}
            sx={{
              padding: '8px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === '1 Month'
                  ? '1px solid rgba(114, 72, 247, 1)'
                  : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              1 Month
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('1 Year')}
            sx={{
              padding: '8px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === '1 Year'
                  ? '1px solid rgba(114, 72, 247, 1)'
                  : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              1 Year
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('All')}
            sx={{
              padding: '8px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
              border:
                active === 'All' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              All
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: '16px' }}>
        <DataTable rowData={paginatedData} columnDefs={colDef} />
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

export default CoinAnalytics;
