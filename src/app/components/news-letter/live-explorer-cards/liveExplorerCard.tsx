'use client';
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
    <Box
      sx={{
        background: '#fff',
        padding: '4px',
        paddingRight: '12px',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px #0000000D',
        mb: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          src={image}
          alt="picture"
          width={100}
          height={80}
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
        <Stack>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              lineHeight: '15.6px',
              marginBottom: '2px',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '10px',
              fontWeight: '400',
              lineHeight: '13px',
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
