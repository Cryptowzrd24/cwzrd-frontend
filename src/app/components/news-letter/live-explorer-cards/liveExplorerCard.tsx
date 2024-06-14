'use client';
import theme from '@/theme';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
interface LiveCardProps {
  id: string;
  title: string;
  desc: string;
  image: string;
}

function LiveExplorerCard({ title, desc, image }: LiveCardProps) {
  return (
    <Box sx={{ bg: '#fff', padding: '4px', borderRadius: '16px', mb: '4px' }}>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          padding: '4px',
          borderRadius: '16px',
          background: '#fff',
          maxWidth: '298px',
          width: '100%',
          flexDirection: { lg: 'row', xs: 'column' },
          // margin: 'auto',
        }}
      >
        <Box>
          <Image
            src={image}
            alt="picture"
            width={151}
            height={100}
            style={{
              objectFit: 'cover',
              minWidth: '100%',
              [theme.breakpoints.up('lg')]: {
                minWidth: '112px',
              },
              borderRadius: '16px',
            }}
          />
        </Box>
        <Stack>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '11px',
              fontWeight: '400',
            }}
          >
            {desc}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default LiveExplorerCard;
