'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('SHOW');

  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ mb: '4px', letterSpacing: 3 }}>
          MARKET CAP
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Box
            sx={{
              border: '1px solid rgba(17, 17, 17, 0.1)',
              borderRadius: '72px',
              padding: { xs: '2px', sm: '4px' },
              display: 'flex',
              cursor: 'pointer',
            }}
          >
            <Box
              onClick={() => setActiveButton('HIDE')}
              sx={{
                padding: '9px 12px',
                borderRadius: '72px',
                fontSize: '10px',
                bgcolor: activeButton === 'HIDE' ? '#7248F7' : '',
                color: activeButton === 'HIDE' ? 'white' : '',
              }}
            >
              HIDE
            </Box>
            <Box
              onClick={() => setActiveButton('SHOW')}
              sx={{
                padding: '9px 12px',
                borderRadius: '72px',
                fontSize: '10px',
                bgcolor: activeButton === 'SHOW' ? '#7248F7' : '',
                color: activeButton === 'SHOW' ? 'white' : '',
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
