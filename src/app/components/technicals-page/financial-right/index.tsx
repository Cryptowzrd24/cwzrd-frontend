import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import FinancialTile from './FinancialTile';
import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';

const FinancialRight = ({ isMainPage }: { isMainPage: boolean }) => {
  return (
    <Box
      sx={{
        width: '314px',
        height: isMainPage ? '580px' : '600px',
        background: isMainPage
          ? 'rgba(255,255,255,1)'
          : 'radial-gradient(circle, #e3e3e3, #ffffff)',
        boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        padding: '0px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',

        '@media (max-width: 1360px)': {
          width: 'auto',
          height: 'auto',
        },
      }}
    >
      {/* Header - Sticky */}
      <Box
        sx={{
          padding: '16px 12px 0px 12px',
          background: 'rgba(255, 255, 255, 1)',
          borderBottom: '1px solid rgba(17, 17, 17, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {isMainPage ? (
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px' }}
          >
            <Typography
              sx={{
                color: '#111',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '130%',
              }}
            >
              News technicals
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  background:
                    'linear-gradient(117deg, #F7841A -4.07%, #F74848 100.68%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '18.2px',
                }}
                variant="body2"
                right={1}
              >
                See All
              </Typography>
              <Box
                sx={{
                  ml: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ReadMoreIcon isMainPage />
              </Box>
            </Box>
          </Box>
        ) : (
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
        )}
        <Divider />
      </Box>
      
      {/* Content - Scrollable */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&::-webkit-scrollbar-track': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            display: 'none',
          },
          padding: '0px 12px 12px 12px',
        }}
      >
        <FinancialTile
          title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
          desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
          isBorder
        />
        <Divider />
        <FinancialTile
          title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
          desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
          isBorder
        />
        <Divider />
        <FinancialTile
          title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
          desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
          isBorder
        />
        <Divider />
        <FinancialTile
          title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
          desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
          isBorder
        />
        <Divider />
        <FinancialTile
          title="Comprehensive Ethereum Price Forecast and Market Update for ETH/USD"
          desc="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
          isBorder
        />
      </Box>
    </Box>
  );
};

export default FinancialRight;
