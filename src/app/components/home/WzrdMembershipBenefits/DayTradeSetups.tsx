import { Box, Typography } from '@mui/material';
import React from 'react';
import ExpertAnalysis from '../../../../../public/images/home/wzrd_membership_benefits/expert_analysis_img.svg';
import Image from 'next/image';

const DayTradeSetups = () => {
  return (
    <Box
      sx={{
        height: '423px',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '24px',
        boxSizing: 'border-box',
        width: { xs: '95%', sm: '270px' },
        margin: '0 auto',
      }}
    >
      <Box>
        <Image
          src={ExpertAnalysis}
          width={200}
          height={200}
          alt=" expert analysis"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: '20px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Day Trade Setups
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            color: 'white',
            lineHeight: '1.5',
          }}
        >
          Find perfect day trade setups with our expert analysis. Our platform
          provides actionable insights to help you make smart, quick moves in
          the market.
        </Typography>
      </Box>
    </Box>
  );
};

export default DayTradeSetups;
