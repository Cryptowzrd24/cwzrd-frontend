import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import YellowArc from '../../../../../public/icons/yellowArc';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const WizardStrategyCard = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        padding: '24px 0px 16px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: "url('/images/strategiesWizard.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '160px',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box sx={{ position: 'absolute', bottom: '-5px', right: 0 }}>
        <YellowArc />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '130%',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
          }}
        >
          🌟 WZRD Strategies
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '120%',
            letterSpacing: '0.2px',
          }}
        >
          Designed to maximize profits and minimize risk.
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
  );
};

export default WizardStrategyCard;
