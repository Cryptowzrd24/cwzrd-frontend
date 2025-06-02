'use client';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';

import DataTable from '../../data-table';
import { Pagination } from '../../data-table/pagination';
import useColumnCoinDetailDefs from '@/app/hooks/coin-detail-grid';
import {
  columnsCoinMarketSpot,
  columnsCoinMarketPerpetual,
  columnsCoinMarketFutures,
} from '@/app/constants/columns';
import { useFetchMarketDataCoinDetailsQuery } from '@/app/redux/reducers/data-grid';

interface CoinMarketProps {
  coinName: string | null | undefined;
}

const CoinMarket = ({ coinName }: CoinMarketProps) => {
  const [rowData, setRowData] = useState([]);
  const [active, setActive] = useState('Spot');

  const { data, isFetching } = useFetchMarketDataCoinDetailsQuery({
    coinName: coinName,
    filter: active.toLowerCase(),
  });
  const columnHeaders =
    active === 'Spot'
      ? columnsCoinMarketSpot
      : active === 'Perpetual'
        ? columnsCoinMarketPerpetual
        : columnsCoinMarketFutures;
  const colDef = useColumnCoinDetailDefs(columnHeaders);
  const pageSize = 10;
  const totalCount = 10;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };
  const handleClick = (button: any) => {
    setCurrentPage(1);
    setActive(button);
  };

  function formatDate(dateString: string) {
    // Create a new Date object from the provided string
    const date = new Date(dateString);

    // Extract the parts of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Combine the parts into the desired format
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (data && data.data && active === 'Spot') {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data?.data?.marketPairs?.map((item: any, index: number) => ({
        id: item.rank,
        coin_id: item.exchangeId,
        exchange: item.exchangeName,
        pair: item.marketPair,
        new_price: item.price,
        depth_positive2: item.depthUsdPositiveTwo,
        depth_negative2: item.depthUsdNegativeTwo,
        volume_24h: item.quotes[0]?.volume24h,
        volume: item.volumePercent,
        confidence: item.confidence,
        liquidity_store: item.effectiveLiquidity,
        baseSymbol: item.baseSymbol,
        updated: item.lastUpdated,
        index: startIndex + index,
      }));
      setRowData(res);
    }
    if (data && data.data && active === 'Perpetual') {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data?.data?.marketPairs?.map((item: any, index: number) => ({
        id: item.rank,
        coin_id: item.exchangeId,
        exchange: item.exchangeName,
        pair: item.marketPair,
        new_price: item.price,
        index_price: item.indexPrice,
        basis: item.indexBasis,
        funding_rate: item.fundingRate,
        open_interest: item.openInterestUsd,
        volume_24h: item.quotes[0]?.volume24h,
        volume: item.volumePercent,
        baseSymbol: item.baseSymbol,
        updated: item.lastUpdated,
        index: startIndex + index,
      }));
      setRowData(res);
    }
    if (data && data.data && active === 'Futures') {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data?.data?.marketPairs?.map((item: any, index: number) => ({
        id: item.rank,
        coin_id: item.exchangeId,
        exchange: item.exchangeName,
        pair: item.marketPair,
        new_price: item.price,
        index_price: item.indexPrice,
        basis: item.indexBasis,
        expiry_date: formatDate(item.expiration),
        open_interest: item.openInterestUsd,
        volume_24h: item.quotes[0]?.volume24h,
        volume: item.volumePercent,
        baseSymbol: item.baseSymbol,
        updated: item.lastUpdated,
        index: startIndex + index,
      }));
      setRowData(res);
    }
  }, [data, currentPage, pageSize, active]);

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
            {coinName}{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              padding: '7px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === 'Spot' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
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
              Spot
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('Perpetual')}
            sx={{
              padding: '7px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === 'Perpetual'
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
              Perpetual
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('Futures')}
            sx={{
              padding: '7px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
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
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              Futures
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: '16px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          padding: '24px',
          width: '1340px',
          borderRadius: '24px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          '& .ag-header-cell:last-child .ag-header-cell-label': {
            justifyContent: 'flex-start !important',
          },
          '& .ag-header': {
            borderTop: 'none',
          },
        }}
      >
        {isFetching ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '1340px',
              height: '800px',
            }}
          >
            <CircularProgress sx={{ color: 'rgba(114, 72, 247, 1)' }} />
          </Box>
        ) : (
          <DataTable rowData={rowData} columnDefs={colDef} />
        )}
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
