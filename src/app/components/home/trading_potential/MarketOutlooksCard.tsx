import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckTooltip from './CheckTooltip';

const MarketOutlooksCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '100%', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        backgroundImage:
          'url(/images/home/trading_potential/market_outlooks_bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '24px',
        backgroundPositionX: 'start',
        aspectRatio: '1',
      }}
    >
      {/* device artwork bottom-right */}

      {/* content top-left */}
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '20px' },
            fontWeight: 700,
            lineHeight: '24px',
            color: 'white',
          }}
        >
          Market Outlooks
        </Typography>
        <Typography
          sx={{
            mt: '8px',
            color: 'rgba(255,255,255,0.72)',
            fontSize: { xs: '14px' },
            lineHeight: '20px',
          }}
        >
          Get a clear perspective on market trends with our expert market
          outlooks. Know where the market is heading and adjust your strategies
          accordingly.
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '150px', md: '200px', lg: '130px' },
            left: '5px',
          }}
        >
          <CheckTooltip type="market-outlook-check" text="Market Outlooks" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '220px', md: '260px', lg: '200px' },
            right: '10px',
          }}
        >
          <CheckTooltip type="market-outlook-arrow" text="Bulish trend" />
        </Box>
      </Box>
    </Box>
  );
};

export default MarketOutlooksCard;
