import { Box, Stack } from '@mui/material';
import React from 'react';
import DeliverCard from './deliverCard';
import TradeSignalCard from './tradeSignalCard';
import CommunityCard from './communityCard';

const RealWinsCard = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          // alignItems: 'center',
          maxWidth: '670px',
          width: '100%',

          '@media (max-width: 1024px)': {
            justifyContent: 'center',
            maxWidth: '100%',
          },

          '@media (max-width: 576px)': {
            flexDirection: 'column',
            height: 'auto',
          },
        }}
      >
        <Stack
          sx={{
            height: '276px',
            flex: 1,
            '@media (max-width: 576px)': {
              flexDirection: 'row',
              gap: '12px',
              width: '100%',
            },
          }}
        >
          <DeliverCard />
          <Box
            sx={{
              mt: '12px',
              flex: 1,
              '@media (max-width: 576px)': {
                mt: '0px',
              },
            }}
          >
            <TradeSignalCard />
          </Box>
        </Stack>
        <CommunityCard />
      </Box>
    </>
  );
};

export default RealWinsCard;
