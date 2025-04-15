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
            padding: '10px 16px 10px 20px',
            borderRadius: '56px',
            // width: '168px',
            // mb: '64px',
            marginTop: '32px',
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
            }}
          >
            Become a member
            <ArrowRight fill={'rgba(255, 255, 255, 1)'} />
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: '141px', '@media (max-width: 978px)': { mt: '30px' } }}>
        <TradeHeader />
      </Box>
      <Box>
        <TradeCards />
      </Box>
    </>
  );
};

export default TradeOpportunities;
