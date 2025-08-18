import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import BlueArcLg from '../../../../public/icons/blueArcLg.svg';
import BlueArcSm from '../../../../public/icons/blueArcSm.svg';
import Image from 'next/image';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';

const MarketAnaylsisBanner = () => {
  return (
    <Box
      sx={{
        width: 'auto',
        padding: '24px 24px 16px',
        backgroundImage: "url('/images/marketAnalysisBg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        gap: '16px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', right: '455px', bottom: '72px' }}>
        <Box sx={{ position: 'absolute' }}>
          <Image src={BlueArcLg} alt="" />
        </Box>
        <Box sx={{ position: 'absolute', left: '12px', top: '20px' }}>
          <Image src={BlueArcSm} alt="" />
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}
      >
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '130%',
            letterSpacing: '1.4px',
          }}
        >
          ⭐️ Membership
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
              color: 'rgba(255,255,255,0.80)',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '150%',
            }}
          >
            Access detailed daily analysis on the forex markets.
          </Typography>
        </Box>
      </Box>
      {/* button here */}
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
  );
};

export default MarketAnaylsisBanner;
