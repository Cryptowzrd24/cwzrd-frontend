import { Box, Stack } from '@mui/material';
import React from 'react';
import DeliverCard from './deliverCard';
import TradeSignalCard from './tradeSignalCard';
import CommunityCard from './communityCard';

const RealWinsCard = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '42px', alignItems: 'center',maxWidth:"670px",height:"368px" }}>
        <Stack>
          <DeliverCard />
          <Box sx={{ mt: '20px' }}>
            <TradeSignalCard />
          </Box>
        </Stack>
        <CommunityCard />
      </Box>
    </>
  );
};

export default RealWinsCard;
