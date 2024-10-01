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
        pathname === 'article' ? 'articles-container' : 'header-container'
      }
    >
      <Typography
        className={
          pathname === 'article' ? 'articles-container' : 'news-header'
        }
      >
        NEWS
      </Typography>
      <Typography
        className={
          pathname === 'article' ? 'articles-header-title' : 'news-header-title'
        }
        variant="h1"
      >
        What's new in crypto
      </Typography>
    </Box>
  );
};

export default NewsHeader;
