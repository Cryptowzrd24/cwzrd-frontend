'use client';
import { Box, Typography } from '@mui/material';
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

  const { data } = useFetchMarketDataCoinDetailsQuery({
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
    setActive(button);
  };

  useEffect(() => {
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.marketPairs.map((item: any, index: number) => ({
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
              background: 'rgba(17, 17, 17, 0.05)',
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
              background: 'rgba(17, 17, 17, 0.05)',
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
      <Box sx={{ mt: '16px' }}>
        <DataTable rowData={rowData} columnDefs={colDef} />
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
