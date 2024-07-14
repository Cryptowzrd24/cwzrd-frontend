import React from 'react';
import Clock from '../../../../../public/icons/News-Letter/clock';
import RightRed from '../../../../../public/icons/News-Letter/rightRed';
import LiveExplorerCardList from './liveExplorerCardList';
import { Box, Typography } from '@mui/material';

function LiveExplorer() {
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
        <Typography
          variant="subtitle2"
          sx={{ color: 'rgba(255, 255, 255, 1)' }}
        >
          📰 LIVE EXPLORER
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
      <Box
        sx={{
          padding: '4px 8px',
          borderRadius: '100px',
          gap: '6px',
          display: 'flex',
          marginBottom: '8px',
          background: 'white',
          alignItems: 'center',
        }}
      >
        <Clock />
        <Typography
          sx={{
            color: '#111111',
            letterSpacing: '1px',
            fontSize: '9px',
            fontWeight: '500',
          }}
        >
          2 MINUTES AGO
        </Typography>
      </Box>
      <LiveExplorerCardList />
    </Box>
  );
}

export default LiveExplorer;
