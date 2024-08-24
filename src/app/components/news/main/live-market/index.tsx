import React from 'react';
import RightRed from '../../../../../../public/icons/News-Letter/rightRed';
import { Box, Divider, Typography } from '@mui/material';
import LiveNewsCardList from '../live-news/live-news-card-list';

function LiveMarket() {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        overflow: 'hidden',
        padding: '16px',
        marginBottom: '20px',
        background:
          'linear-gradient(to right, rgba(254, 231, 226, 0.8), rgba(254, 231, 226, 0) 50px)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '12px',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '12px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'black' }}>
          🚀 LIVE MARKET
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
              fontWeight: '600',
              mb: '3px',
              letterSpacing: 'normal',
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Divider
        sx={{ width: '100%', marginTop: '-13px', marginBottom: '10px' }}
      />
      <LiveNewsCardList />
    </Box>
  );
}

export default LiveMarket;
