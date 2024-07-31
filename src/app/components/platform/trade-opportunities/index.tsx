import { Box, Typography } from '@mui/material';
import React from 'react';
import TradeHeader from './tradeHeader';
import TradeCards from './tradeCards';
import { ArrowRight } from '../../../../../public/icons/arrowRight';

const TradeOpportunities = () => {
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          sx={{
            background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
            padding: '16px 20px 16px 24px',
            borderRadius: '56px',
            mb: '168px',
            marginTop: '-16px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
            }}
          >
            Become a member
            <ArrowRight />
          </Typography>
        </Box>
      </Box>
      <Box>
        <TradeHeader />
      </Box>
      <Box>
        <TradeCards />
      </Box>
    </>
  );
};

export default TradeOpportunities;
