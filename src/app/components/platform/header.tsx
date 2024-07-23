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
              fontSize: '18px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: 2,
              mb: '12px',
            }}
          >
            PLATFORM
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: '72px', lineHeight: '72px', mb: '16px' }}
          >
            Discover Our
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px',
              }}
            >
              Trading
            </span>{' '}
            Tools
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              mb: '48px',
              textAlign: 'center',
            }}
          >
            On a daily basis we analyze Crypto, Forex, and Stock markets, to
            provide you with invaluable insights and precise signals,
            positioning you for trading success and profits.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              padding: '12px 24px 12px 12px',
              borderRadius: '32px',
              maxWidth: '500px',
              width: '100%',
              background: 'rgba(255, 255, 255, 1)',
            }}
          >
            <Image
              src={memo}
              width={160}
              alt="Join the Cryptowzrd Community Today!"
            />

            <Typography
              variant="h5"
              sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '19.2px' }}
            >
              Join 10,700+{' '}
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '19.2px',
                }}
              >
                people who already joined us
              </span>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PlatformHeader;
