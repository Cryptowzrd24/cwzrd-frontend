'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import { usePathname } from 'next/navigation';

const NewsHeader = () => {
  const pathname = usePathname();
  return (
    <Box
      className={
        pathname.includes('/news')
          ? 'header-news-container'
          : 'header-container'
      }
    >
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '15.6px',
          fontFamily: 'Sf Pro Display',
          letterSpacing: '1.2px',
        }}
        className="technical-header"
      >
        NEWS
      </Typography>
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '26.4px',
          fontFamily: 'Sf Pro Display',
          letterSpacing: '1px',
          color: 'rgba(255, 255, 255, 1)',
          marginTop: '2px',
        }}
      >
        What's new in the world of crypto?
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '21px',
          fontFamily: 'Sf Pro Display',
          color: 'rgba(255, 255, 255, 0.8)',
          width: '850px',
          // marginTop: '8px',
          opacity: '0.8',
        }}
      >
        Stay updated with the latest news and trends in the crypto world.
      </Typography>
    </Box>
  );
};

export default NewsHeader;
