import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import DartImage from '../../../../../public/images/dartImg2.png';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

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
              fontSize: { xs: '12px', sm: '14', md: '16px', lg: '18px' },
              fontWeight: '500',
              padding: {
                xs: '6px 12px !important',
                lg: '10px 20px !important',
              },
              backgroundColor: 'white',
              borderRadius: '25px',
              width: { xs: '120px', md: '140px', lg: '158px' },
              height: { xs: 'auto', md: 'auto', lg: '39px' },
            }}
          >
            <span>Get Started</span> <ArrowRightBlack width={16} height={16} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DailyAnalysisCard;
