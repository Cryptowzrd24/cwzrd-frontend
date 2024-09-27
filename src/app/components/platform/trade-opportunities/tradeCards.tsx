import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import graph from '../../../../../public/images/platform/trade-graph.png';
import Image from 'next/image';
const TradeCards = () => {
  return (
    <Box
      sx={{ display: 'flex', gap: '30px', flex: 1, justifyContent: 'center' }}
    >
      <Box
        sx={{
          paddingLeft: '32px',
          paddingBottom: '40px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '32px',
          // width: '41.2%',
          width: '390px',
        }}
      >
        <Image
          src={graph}
          alt="graph"
          width={500}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Stack sx={{ maxWidth: '440px', paddingLeft: '8px' }}>
          <Typography
            sx={{
              fontSize: '13px',
              fontWeight: '600',
              color: 'rgba(17, 17, 17, 1)',
              lineHeight: '16.9px',
              mb: '8px',
              mt: '32px',
            }}
          >
            Daily WZRD Intraday Setup Calls
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 0.8)',
              lineHeight: '18px',
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
          width: '555px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '26.44px',
            mb: '8px',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Trade Signals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            width: '206px',
            fontWeight: '400',
            lineHeight: '18px',
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
