import { Box, Typography } from '@mui/material';
import React from 'react';

function CoinNewsDescription() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 700,
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 1)',
          lineHeight: '26px',
          letterSpacing: '1.24px',
        }}
      >
        Bitcoin whale accumulation reached 2020 levels
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 400,
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.8)',
          lineHeight: '29px',
          letterSpacing: '0.7px',
          marginTop: '8px',
        }}
      >
        Bitcoin accumulation by whales, or entities holding at least 1,000 BTC,
        has hit a nearly four-year high last seen during 2020, according to a
        Bitfinex research report shared with Cointelegraph.
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 400,
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.8)',
          lineHeight: '29px',
          letterSpacing: '0.7px',
          marginTop: '36px',
        }}
      >
        Referencing the chart below, the Bitfinex analysts wrote:
      </Typography>
    </Box>
  );
}

export default CoinNewsDescription;
