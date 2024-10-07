import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import memo from '../../../../public/images/platform/memo.png';
import { ArrowRight } from '../../../../public/icons/arrowRight';

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
            }}
          >
            PLATFORM
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: '40px', lineHeight: '44px', mb: '12px' }}
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
              fontSize: '14px',
              fontWeight: '400',
              mb: '24px',
              textAlign: 'center',
              color: '#111111CC',
              lineHeight: '21px',
              width: '800px',
            }}
          >
            On a daily basis we analyze Crypto, Forex, and Stock markets, to
            provide you with invaluable insights and precise signals,
            positioning you for trading success and profits.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                padding: '8px 16px 8px 8px',
                borderRadius: '32px',
                maxWidth: '272px',
                width: '100%',
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
                // mb: '36px',
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
                  fontSize: '10px',
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
                  people who already joined us
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  background:
                    'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                  padding: '9px 0px 9px 20px',
                  borderRadius: '56px',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    lineHeight: '18.82px',
                    width: '140px',
                  }}
                >
                  Become a member
                  <ArrowRight fill={'rgba(255, 255, 255, 1)'} />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PlatformHeader;
