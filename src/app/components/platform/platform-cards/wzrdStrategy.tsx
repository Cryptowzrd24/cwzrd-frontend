import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
const WzrdStrategy = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/strategy.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '24px',
          maxWidth: '307.5px',
          height: '352px',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'center',
          flex: 1,

          '@media (max-width: 768px)': {
            maxWidth: '100%',
            width: 'calc(100% - 50px)',
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: '12px',
            marginTop: '253px',
            '@media (max-width: 1024px)': {
              paddingLeft: 0,
            },
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: '14px !important',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '18.2px',
                fontWeight: '500',
                mb: '8px',
              }}
            >
              The WZRD Strategy
            </Typography>
            <Typography
              sx={{
                fontSize: '12px !important',
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: 0.1,
                maxWidth: '298px',
                fontWeight: '400',
                lineHeight: '18px',
              }}
            >
              Master trading with our essential guides and lessons, covering our
              highly accurate trading strategy.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default WzrdStrategy;
