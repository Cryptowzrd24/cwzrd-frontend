import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../../public/icons/chevronRightHead';
import Image from 'next/image';
import DartImage from '../../../../../public/images/dartImg2.png';

const DailyAnalysisCard = () => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: '24px 24px 16px',
        backgroundImage: "url('/images/marketAnalysis.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ height: '230px' }}>
        <Image
          src={DartImage}
          alt="darts image"
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Typography
            sx={{
              color: '#FFF',
              fontSize: '24px',
              fontWeight: '600',
              lineHeight: '130%',
              letterSpacing: '0.48px',
            }}
          >
            Daily Market Analysis on Forex
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.80)',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '150%',
            }}
          >
            Stay ahead of stock market trends with our daily analysis. Designed
            to maximize profits and minimize risk.
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              display: 'flex',
              padding: '12px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              borderRadius: '56px',
              background: '#FFF',

              '&:hover': {
                background: '#F0F0F0',
              },
            }}
          >
            <Typography
              sx={{
                color: '#111',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '130%',
              }}
            >
              Get Started
            </Typography>
            <ChevronRightHead />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DailyAnalysisCard;
