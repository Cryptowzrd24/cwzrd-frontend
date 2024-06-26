import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px',
          paddingBottom: '24px',
          borderBottom: '1px solid rgba(17, 17, 17, 0.1)',
        }}
      >
        <Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: '24px',
              fontWeight: '700',
              mb: '8px',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Instructions for completing tasks and activities for LayerZero
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 0.8)',
            }}
          >
            Complete the tasks to qualify for potential airdrops and rewards.{' '}
          </Typography>
        </Stack>
        <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 0.6)',
              padding: '11px 16px',
              borderRadius: '40px',
              background: 'rgba(114, 72, 247, 0.1)',
            }}
          >
            All{' '}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 0.6)',
            }}
          >
            Mainnet{' '}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 0.6)',
            }}
          >
            Mini NFT{' '}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
