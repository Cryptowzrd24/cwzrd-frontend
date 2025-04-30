import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../../public/icons/chevronRightHead';
import YellowArc from '../../../../../public/icons/yellowArc';

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
  );
};

export default WizardStrategyCard;
