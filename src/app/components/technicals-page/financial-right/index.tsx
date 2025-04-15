import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FinancialTile from './FinancialTile';

const FinancialRight = () => {
  return (
    <Box
      sx={{
        width: '298px',
        height: '600px',
        background: 'radial-gradient(circle, #e3e3e3, #ffffff)',
        boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        padding: '16px 12px 0px 12px',
        overflow: 'scroll',
        scrollbarWidth: 'none',

        '@media (max-width: 1360px)': {
          width: 'auto',
          height: 'auto',
        },
      }}
    >
      <Box
        sx={{
          marginLeft: '2px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(114, 72, 247, 1)',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '15.6px',
          }}
        >
          📰 New Update{' '}
          <span style={{ color: 'rgba(17,17,17,0.3)', paddingLeft: '10px' }}>
            | <span style={{ marginLeft: '8px', color: '#111' }}>🔥</span>{' '}
            Trending
          </span>
        </Typography>
      </Box>
      <Divider />
      <FinancialTile
        title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
        desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of"
      />
      <Divider />
      <FinancialTile
        title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
        desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of"
      />
      <Divider />
      <FinancialTile
        title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
        desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of"
      />
      <Divider />
      <FinancialTile
        title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
        desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of"
      />
      <Divider />
      <FinancialTile
        title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
        desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of"
      />
    </Box>
  );
};

export default FinancialRight;
