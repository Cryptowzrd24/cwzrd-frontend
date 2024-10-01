import { Box, Typography } from '@mui/material';
import React from 'react';

function CoinNewsDescription({
  isArticleDetails,
}: {
  isArticleDetails?: boolean;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: isArticleDetails ? '24px' : '18.5px',
          fontWeight: 700,
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 1)',
          lineHeight: isArticleDetails ? '28.8px' : '26px',
          letterSpacing: isArticleDetails ? '1px' : '1.24px',
        }}
      >
        Bitcoin whale accumulation reached 2020 levels
      </Typography>
      <Typography
        sx={{
          fontSize: isArticleDetails ? '16px' : '18.5px',
          fontWeight: 400,
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.8)',
          lineHeight: isArticleDetails ? '24px' : '27px',
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
          fontSize: isArticleDetails ? '16px' : '18.5px',
          fontWeight: 400,
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.8)',
          lineHeight: isArticleDetails ? '24px' : '27px',
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
