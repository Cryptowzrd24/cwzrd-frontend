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
          padding: '32px 48px 48px 48px',
          width: '330px',
          height: '390px',
          borderRadius: '32px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}
      >
        <Box>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
                fontWeight: '500',
                mb: '8px',
              }}
            >
              The WZRD Strategy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: 0.1,
                maxWidth: '298px',
                fontWeight: '400',
                mt: '-6px',
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
