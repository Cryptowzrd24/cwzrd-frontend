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
        paddingTop: '24px',
        borderRadius: '16px',
        overflow: 'hidden',
        padding: '24px 18px',
        paddingLeft: '0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '32px',
          justifyContent: 'space-between',
          width: '100%',
          mt: '12px',
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
          padding: '6px 10px',
          borderRadius: '100px',
          gap: '6px',
          display: 'flex',
          marginBottom: '16px',
          background: 'white',
          alignItems: 'center',
        }}
      >
        <Clock />
        <Typography
          variant="caption"
          sx={{ color: '#111111', letterSpacing: '1px', mb: '1px' }}
        >
          2 MINUTES AGO
        </Typography>
      </Box>
      <LiveExplorerCardList />
    </Box>
  );
}

export default LiveExplorer;
