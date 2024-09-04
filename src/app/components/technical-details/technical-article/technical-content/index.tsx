import { Box, Typography } from '@mui/material';
import React from 'react';

function TechnicalContent() {
  const content = [
    {
      heading: 'Daily thoughts:',
      details: `Ethereum and ETHBTC both closed with indecisive candles. We need more
          healthy candles ahead of the Weekly and Monthly closing in the
          traditional market tomorrow. ETHBTC needs to show more bullish signs
          and move above 0.0450 BTC which will push Ethereum upside with it.
          Ethereum should push towards $2,750 from its current location where
          $2,400 is the Daily support target. During the US data print tomorrow
          we should see higher volatility.`,
    },
    {
      heading: 'Intraday thoughts:',
      details: `The intraday chart was choppy and slow today although we should see higher volatility tomorrow. We now need to wait for the market to get another trade formation.`,
    },
  ];

  const renderContent = content.map((item) => {
    return (
      <Box key={item.heading} sx={{ marginTop: '26px' }}>
        <Typography
          sx={{
            fontSize: '24px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 700,
            lineHeight: '24px',
          }}
        >
          {item.heading}
        </Typography>
        <Typography
          sx={{
            marginTop: '40px',
            fontSize: '16px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 400,
            lineHeight: '24px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          {item.details}
        </Typography>
      </Box>
    );
  });
  return (
    <Box>
      {renderContent}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          marginTop: '46px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 700,
            lineHeight: '24px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          Chart:
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 600,
            lineHeight: '24px',
            color: '#7248F7',
          }}
        >
          https://www.tradingview.com/x/6CL2i22Y/
        </Typography>
      </Box>
    </Box>
  );
}

export default TechnicalContent;
