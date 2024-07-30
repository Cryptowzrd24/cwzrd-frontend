import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import graph from '../../../../../public/images/platform/trade-graph.png';
import Image from 'next/image';
const TradeCards = () => {
  return (
    <Box sx={{ display: 'flex', gap: '30px' }}>
      <Box
        sx={{
          paddingLeft: '32px',
          paddingBottom: '40px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '32px',
        }}
      >
        <Image src={graph} alt="graph" width={500} />
        <Stack sx={{ maxWidth: '440px', paddingLeft: '8px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
              lineHeight: '23.4px',
              mb: '8px',
              mt: '32px',
            }}
          >
            Daily WZRD Intraday Setup Calls
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 0.8)',
              lineHeight: '27px',
            }}
          >
            Detailed trade plans for assets we're monitoring & trading, with
            consistently successful results.
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/trade-signal.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '64px 0 0 48px',
          borderRadius: '32px',
          position: 'relative',
          // maxWidth: '740px',
          width: '100%',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '40px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '44px',
            mb: '8px',
          }}
        >
          Trade Signals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            width: '274px',
            fontWeight: '400',
            lineHeight: '27px',
          }}
        >
          We provide both the Crypto and FX signals with Entry Prices, Take
          Profits, Stop losses, Risk, Probability and Updates.
        </Typography>
      </Box>
    </Box>
  );
};

export default TradeCards;
