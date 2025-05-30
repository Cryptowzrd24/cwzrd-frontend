import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
// import coverage from '../../../../../public/images/platform/coverage.png';
import coverageTwo from '../../../../../public/images/platform/coverageTwo.png';

const Coverage = () => {
  return (
    <>
      <Box
        sx={{
          // padding: '45.75px 66px 45.75px 66px',
          borderRadius: '24px',
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          width: '967px',

          '@media (max-width: 768px)': {
            flexDirection: 'column',
            padding: '16px',
            gap: '16px',
          },
        }}
      >
        <Box
          sx={{
            paddingBlock: '31.75px',
            paddingLeft: '66px',
            '@media (max-width: 768px)': {
              padding: '0px',
            },
          }}
        >
          <Image src={coverageTwo} alt="coverage" width={97.5} height={97.5} />
        </Box>
        <Box>
          <Stack>
            <Typography
              sx={{
                backgroundImage:
                  ' linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '30px !important',
                mb: '8px',
                lineHeight: '33px',
                fontWeight: 700,

                '@media (max-width: 576px)': {
                  fontSize: '24px !important',
                  lineHeight: '110%',
                  letterSpacing: '0.24px',
                  textAlign: 'center',
                },
              }}
            >
              Stay Updated with 24/7 Coverage
            </Typography>
            <Typography
              sx={{
                fontWeight: '400',
                maxWidth: '697.5px',
                lineHeight: '20.25px',
                fontSize: '13.5px !important',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              Stay updated with continuous market coverage, including Daily
              Market Updates, Trade Updates, Fundamental News, and on demand
              analysis.{' '}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Coverage;
