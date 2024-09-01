'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface LiveNewsCardProps {
  id: string;
  title: string;
  desc: string;
  image?: any;
}

function LiveNewsCard({ title, desc, image }: LiveNewsCardProps) {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: '4px',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px 0px #0000000D',
        mb: '8px',
        width: '95%',
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
        <Box sx={{ position: 'relative', width: '50%' }}>
          <Image
            src={image?.src}
            alt="picture"
            width={130}
            height={100}
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          ></Image>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              fontSize: '10px',
              color: 'white',
              position: 'absolute',
              top: 8,
              left: 6,
            }}
          >
            2 MINUTES AGO
          </Typography>
        </Box>
        <Stack maxHeight={'100px'}>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              lineHeight: '15.6px',
              marginBottom: '2px',
              maxWidth: '70%',
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
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              letterSpacing: '0.6px',
            }}
          >
            {desc}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default LiveNewsCard;
