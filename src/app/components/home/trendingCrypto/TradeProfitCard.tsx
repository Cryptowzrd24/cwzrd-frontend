import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../../public/icons/chevronRightHead';

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
            display: 'flex',
            padding: '12px 24px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            background: '#FFF',

            '&:hover': {
              background: '#F0F0F0',
            },
          }}
        >
          <Typography
            sx={{
              color: '#111',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '130%',
            }}
          >
            Get Started
          </Typography>
          <ChevronRightHead />
        </Button>
      </Box>
    </Box>
  );
};

export default TradeProfitCard;
