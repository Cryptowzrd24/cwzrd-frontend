import React from 'react';
import { Box, Typography } from '@mui/material';

const MarketOutlooksCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 'calc(33% - 12px)' },
        height: { xs: 'auto', lg: '311px' },
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
        aspectRatio: { xs: '1', sm: 3 / 1, md: '1' },
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
            fontSize: { xs: '18px', sm: '20px' },
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
            fontSize: { xs: '13px', sm: '14px' },
            lineHeight: '20px',
          }}
        >
          Get a clear perspective on market trends with our expert market
          outlooks. Know where the market is heading and adjust your strategies
          accordingly.
        </Typography>
      </Box>
    </Box>
  );
};

export default MarketOutlooksCard;
