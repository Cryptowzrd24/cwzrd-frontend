import { Box } from '@mui/material';
import React from 'react';
import DeliverCard from './deliverCard';
import TradeSignalCard from './tradeSignalCard';
import CommunityCard from './communityCard';

const RealWinsCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '12px',
        maxWidth: '670px',
        width: '100%',
        height: '276px',
        overflow: 'hidden',
        '@media (max-width: 1024px)': {
          justifyContent: 'center',
          maxWidth: '100%',
          height: 'auto',
        },

        '@media (max-width: 576px)': {
          flexDirection: 'column',
          height: 'auto',
          gap: '12px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '172.5px',
          height: '100%',
          flex: 1,
          gap: '12px',
          '@media (max-width: 1024px)': {
            justifyContent: 'center',
            width: '50%',
            height: 'auto',
          },
          '@media (max-width: 576px)': {
            flexDirection: 'row',
            width: '100%',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            boxSizing: 'border-box',
            height: '101px',
            '@media (max-width: 576px)': {
              width: '50%',
              height: '100%',
              aspectRatio: '1/1',
            },
          }}
        >
          <DeliverCard />
        </Box>
        <Box
          sx={{
            width: '100%',
            boxSizing: 'border-box',
            height: '156px',
            '@media (max-width: 576px)': {
              width: '50%',
              height: '100%',
              aspectRatio: '1/1',
            },
          }}
        >
          <TradeSignalCard />
        </Box>
      </Box>
      <Box
        sx={{
          width: '315px',
          boxSizing: 'border-box',
          '@media (max-width: 1024px)': { width: '50%' },
          '@media (max-width: 576px)': { width: '100%' },
        }}
      >
        <CommunityCard />
      </Box>
    </Box>
  );
};

export default RealWinsCard;
