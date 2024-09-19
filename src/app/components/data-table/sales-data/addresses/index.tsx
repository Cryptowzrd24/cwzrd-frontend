import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CopyIcon from '../../../../../../public/icons/nft/copy';

export const SalesAddresses = () => {
  return (
    <>
      <Stack sx={{ mt: '8px' }}>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '13px',
              fontWeight: '400',
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(17, 17, 17, 1)',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              <span
                style={{
                  color: 'rgba(17, 17, 17, 0.8)',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                From:{' '}
              </span>
              0xef0b31nbIOJ948Ko20A1ks89suysSK
            </span>
            <span style={{ cursor: 'pointer' }}>
              <CopyIcon />
            </span>{' '}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '13px',
              fontWeight: '400',
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(17, 17, 17, 1)',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              <span
                style={{
                  color: 'rgba(17, 17, 17, 0.8)',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                To:{' '}
              </span>
              0xef0b31nbIOJ948Ko20A1ks89suysSK
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
