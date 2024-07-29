'use client';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { hideToggleStats, showToggleStats } from '@/redux/market';

const Hero: React.FC = () => {
  const { showStats } = useAppSelector((state) => state.market);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ letterSpacing: '1px', fontSize: 14 }}>
          MARKET CAP
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Box
            sx={{
              border: '1px solid rgba(17, 17, 17, 0.1)',
              borderRadius: '100px',
              padding: { xs: '2px', sm: '4px' },
              display: 'flex',
              cursor: 'pointer',
            }}
          >
            <Box
              onClick={() => dispatch(hideToggleStats())}
              sx={{
                padding: '9px 12px',
                borderRadius: '72px',
                fontSize: '10px',
                fontWeight: '500',
                bgcolor: !showStats ? '#7248F7' : '',
                color: !showStats ? 'white' : '',
              }}
            >
              HIDE
            </Box>
            <Box
              onClick={() => dispatch(showToggleStats())}
              sx={{
                padding: '9px 12px',
                borderRadius: '72px',
                fontSize: '10px',
                fontWeight: '500',
                bgcolor: showStats ? '#7248F7' : '',
                color: showStats ? 'white' : '',
              }}
            >
              SHOW
            </Box>
          </Box>
          <Typography variant="body1">Show Stats</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Hero;
