import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CopyIcon from '../../../../../../public/icons/nft/copy';

export const SalesAddresses = () => {
  return (
    <>
      <Stack>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            From:
            <span
              style={{
                color: 'rgba(17, 17, 17, 1)',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              0xef0b31nbIOJ948Ko20A1ks89sSK...
            </span>
            <span style={{ cursor: 'pointer' }}>
              <CopyIcon />
            </span>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '16px',
              fontWeight: '400',
            }}
          >
            To:
            <span
              style={{
                color: 'rgba(17, 17, 17, 1)',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              0xef0b31nbIOJ948Ko20A1ks89suysSK...
            </span>
            <span style={{ cursor: 'pointer' }}>
              <CopyIcon />
            </span>{' '}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
