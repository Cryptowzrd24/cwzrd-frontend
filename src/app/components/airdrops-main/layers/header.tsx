'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Header = () => {
  const [activeHeading, setActiveHeading] = useState('');

  const handleHeadingClick = (heading: any) => {
    setActiveHeading(heading);
  };

  const headings = [
    { label: 'All', id: 'all' },
    { label: 'Mainnet', id: 'mainnet' },
    { label: 'Mini NFT', id: 'mininft' },
  ];
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
          {headings.map((heading) => (
            <Typography
              key={heading.id}
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '700',
                color:
                  activeHeading === heading.id
                    ? ' rgba(114, 72, 247, 1)'
                    : 'rgba(17, 17, 17, 0.6)',
                padding: activeHeading === heading.id ? '11px 16px' : '',
                borderRadius: '40px',
                background:
                  activeHeading === heading.id
                    ? 'rgba(114, 72, 247, 0.1)'
                    : 'transaprent',
                cursor: 'pointer',
              }}
              onClick={() => handleHeadingClick(heading.id)}
            >
              {heading.label}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Header;
