import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import graph from '../../../../../public/images/platform/trade-graph.png';
import Image from 'next/image';
const TradeCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
        flex: 1,
        justifyContent: 'center',
        '@media (max-width: 834px)': {
          flexDirection: 'column',
        },
        '@media (max-width: 576px)': {
          gap: '16px',
        },
      }}
    >
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '32px',
          width: '390px',

          '@media (max-width: 834px)': {
            width: 'auto',
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: '32px',
            paddingBottom: '24px',
            '@media (max-width: 834px)': {
              paddingLeft: '16px',
              paddingBottom: '20px',
            },
            '@media (max-width: 576px)': {
              paddingBottom: '16px',
            },
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
        </Box>
        <Stack
          sx={{
            maxWidth: '440px',
            padding: '0px 16px 16px',
            '@media (max-width: 834px)': {
              padding: '16px',
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '13px !important',
              fontWeight: '600',
              color: 'rgba(17, 17, 17, 1)',
              lineHeight: '16.9px',
              mb: '8px',
              '@media (max-width: 576px)': {
                fontWeight: '600',
              },
            }}
          >
            Daily WZRD Intraday Setup Calls
          </Typography>
          <Typography
            sx={{
              fontSize: '12px !important',
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
          width: '555px',
          height: '290px !important',

          '@media (max-width: 834px)': {
            padding: '36px 32px',
            width: 'auto',
            height: '400px',
          },

          '@media (max-width: 576px)': {
            padding: '36px 24px',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '24px !important',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '26.44px',
            mb: '8px',
            fontFamily: 'Sf Pro Display',
            '@media (max-width: 576px)': {
              fontSize: '16px !important',
              lineHeight: '120%',
              letterSpacing: '-0.4px',
            },
          }}
        >
          Trade Signals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '12px !important',
            color: 'rgba(255, 255, 255, 0.8)',
            width: '206px',
            fontWeight: '400',
            lineHeight: '18px',

            '@media (max-width: 834px)': {
              maxWidth: '340px',
              width: '100%',
            },
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
