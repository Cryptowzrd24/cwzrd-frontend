import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const TradeProfitCard = () => {
  return (
    <Box
      sx={{
        padding: '24px 24px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: "url('/images/tradeProfit.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '265px',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '200px',
        }}
      >
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '130%',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
          }}
        >
          EFFORTLESS TRADING
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '120%',
            letterSpacing: '0.24px',
          }}
        >
          Trade and Profit with us
        </Typography>
      </Box>
      {/* btn here */}
      <Box>
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

export default TradeProfitCard;
