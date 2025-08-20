import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import memo from '../../../../public/images/platform/memo.png';

const PlatformHeader = () => {
  return (
    <>
      <Box>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1070px',
            width: '100%',
            margin: 'auto',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: 2,
              lineHeight: '18.2px',
              mb: '8px',

              '@media (max-width: 576px)': {
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '130%',
                letterSpacing: '1.2px',
              },
            }}
          >
            PLATFORM
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '40px',
              lineHeight: '44px',
              fontWeight: '700',
              mb: '12px',
              '@media (max-width: 576px)': {
                fontSize: '24px',
                lineHeight: '120%',
                letterSpacing: '0.24px',
                textAlign:'center'
              },
            }}
          >
            Discover Our
            <Typography
              component={'span'}
              sx={{
                fontSize: 'inherit !important',
                fontWeight: 'inherit',
                lineHeight: 'inherit',
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px',
                '@media (max-width: 576px)': {
                  marginLeft: '5px',
                },
              }}
            >
              Trading
            </Typography>{' '}
            Tools
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              mb: '24px',
              textAlign: 'center',
              color: '#111111CC',
              lineHeight: '21px',
              maxWidth: '800px',

              '@media (max-width: 576px)': {
                fontSize: '12px',
                lineHeight: '150%',
                mb: '16px',
              },
            }}
          >
            On a daily basis we analyze Crypto, Forex, and Stock markets, to
            provide you with invaluable insights and precise signals,
            positioning you for trading success and profits.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '8px 16px 8px 8px',
              borderRadius: '32px',
              maxWidth: '255px',
              width: '100%',
              background: 'rgba(255, 255, 255, 1)',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
              // mb: '36px',

              '@media (max-width: 576px)': {
                maxWidth: '255px',
                mb: '20px',
              },
            }}
          >
            <Image
              src={memo}
              width={84}
              alt="Join the Cryptowzrd Community Today!"
            />

            <Typography
              variant="h5"
              sx={{
                fontSize: '10px !important',
                fontWeight: '700',
                lineHeight: '19.2px',
              }}
            >
              10,700+{' '}
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: '400',
                  lineHeight: '19.2px',
                }}
              >
                people already joined us
              </span>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PlatformHeader;
