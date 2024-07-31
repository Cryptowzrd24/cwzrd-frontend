import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import coverage from '../../../../../public/images/platform/coverage.png';
const Coverage = () => {
  return (
    <>
      <Box
        sx={{
          padding: '61px 88px',
          borderRadius: '32px',
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        }}
      >
        <Box>
          <Image src={coverage} alt="coverage" width={130} />
        </Box>
        <Box>
          <Stack>
            <Typography
              variant="h1"
              sx={{
                backgroundImage:
                  ' linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '40px',
                mb: '8px',
                lineHeight: '44px',
              }}
            >
              Stay Updated with 24/7 Coverage
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: '400',
                maxWidth: '930px',
                lineHeight: '27px',
                fontSize: '18px',
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
