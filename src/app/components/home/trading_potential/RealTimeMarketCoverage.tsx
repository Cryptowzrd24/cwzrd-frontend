import { Box, Button } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const RealTimeMarketCoverage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '330px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage:
          'url(/images/home/trading_potential/real_time_market_coverage_bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '630px',
          width: { xl: '100%', md: '40%' },
          marginLeft: { md: '80px' },
          padding: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', lg: '24px' },
            fontWeight: { xs: '500', lg: '500' },
            color: 'white',
          }}
        >
          Real Time Market Coverage
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '12px', lg: '14px' },
            fontWeight: '400',
            color: 'white',
            lineHeight: '1.5',
          }}
        >
          Stay ahead of the curve with our Real-Time Market Coverage. Get
          instant updates on price fluctuations, breaking news, and critical
          market events as they happen
        </Typography>
        <Button
          sx={{
            fontSize: { xs: '12px', sm: '14', md: '16px', lg: '18px' },
            fontWeight: '500',
            padding: {
              xs: '6px 12px !important',
              lg: '10px 20px !important',
            },
            backgroundColor: 'white',
            borderRadius: '25px',
            width: { xs: '120px', md: '140px', lg: '158px' },
            height: { xs: 'auto', md: 'auto', lg: '39px' },
          }}
        >
          <span>Get Started</span> <ArrowRightBlack width={16} height={16} />
        </Button>
      </Box>
    </Box>
  );
};

export default RealTimeMarketCoverage;
