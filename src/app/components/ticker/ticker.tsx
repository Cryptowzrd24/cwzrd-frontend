import React from 'react';
import { Box, Typography } from '@mui/material';
import TickerSkeleton from '../skeleton/ticker';
import './index.scss';

const styles = {
  priceChangePositive: {
    backgroundColor: '#1FD773',
  },
  priceChangeNegative: {
    backgroundColor: '#F74848',
  },
};

interface TickerData {
  id: string;
  coin_id: string;
  symbol: string;
  new_price: string;
  percent_change_24h: any;
  icon: string;
}

interface TickerProps {
  initialData: TickerData[];
}

const Ticker = ({ initialData }: TickerProps) => {
  const doubledData = [...initialData, ...initialData];

  return initialData.length > 0 ? (
    <Box className="ticker-container">
      <Box className="ticker-content">
        {doubledData.map((item, index) => (
          <Box key={index} className="ticker-item">
            <img
              src={item.icon}
              alt={item.symbol}
              style={{ borderRadius: '50%', width: '24px', height: '24px' }}
            />
            <Typography id={`price-${item.coin_id}`} className="ticker-info">
              {item.symbol} ${Number(item.new_price).toFixed(2)}
            </Typography>
            <Typography
              id={`percent-change-${item.coin_id}`}
              className="price-change"
              sx={
                item.percent_change_24h > 0
                  ? styles.priceChangePositive
                  : styles.priceChangeNegative
              }
            >
              {item.percent_change_24h > 0
                ? `+${Number(item.percent_change_24h)?.toFixed(2)}%`
                : `${Number(item.percent_change_24h)?.toFixed(2)}%`}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className="ticker-content">
        {doubledData.map((item, index) => (
          <Box key={index} className="ticker-item">
            <img
              src={item.icon}
              alt={item.symbol}
              style={{ borderRadius: '50%', width: '24px', height: '24px' }}
            />
            <Typography id={`price-${item.coin_id}`} className="ticker-info">
              {item.symbol} ${Number(item.new_price).toFixed(2)}
            </Typography>
            <Typography
              id={`percent-change-${item.coin_id}`}
              className="price-change"
              sx={
                item.percent_change_24h > 0
                  ? styles.priceChangePositive
                  : styles.priceChangeNegative
              }
            >
              {item.percent_change_24h > 0
                ? `+${Number(item.percent_change_24h)?.toFixed(2)}%`
                : `${Number(item.percent_change_24h)?.toFixed(2)}%`}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  ) : (
    <TickerSkeleton />
  );
};

export default Ticker;
