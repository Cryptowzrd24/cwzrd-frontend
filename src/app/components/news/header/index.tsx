'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';

const NewsHeader = ({ isNews }: any) => {
  return (
    <Box className={isNews ? 'header-news-container' : 'header-container'}>
      <Typography
        sx={{
          fontSize: '12px !important',
          fontWeight: 500,
          lineHeight: '15.6px',
          fontFamily: 'Sf Pro Display',
          letterSpacing: '1.2px',
          marginBottom: '6px',
        }}
        className="news-header"
      >
        NEWS
      </Typography>
      <Typography
        sx={{
          fontSize: '32px !important',
          fontWeight: 700,
          lineHeight: '26.4px',
          fontFamily: 'Sf Pro Display',
          letterSpacing: '1px',
          color: 'rgba(255, 255, 255, 1)',
          marginTop: '2px',

          '@media (max-width: 576px)': {
            fontSize: '24px !important',
            lineHeight: '110%',
            letterSpacing: '0.24px',
          },
        }}
      >
        What's new in crypto?
      </Typography>
      <Typography
        sx={{
          fontSize: '14px !important',
          fontWeight: 400,
          lineHeight: '21px',
          fontFamily: 'Sf Pro Display',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '850px',
          marginTop: '8px',
          opacity: '0.8',

          '@media (max-width: 576px)': {
            fontSize: '12px !important',
            lineHeight: '110%',
            letterSpacing: '0.24px',
          },
        }}
      >
        Stay updated with the latest news and trends in the crypto world.
      </Typography>
    </Box>
  );
};

export default NewsHeader;
