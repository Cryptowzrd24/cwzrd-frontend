import { Box, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';

const NewsHeader = () => {
  return (
    <Box className="header-container">
      <Typography className="news-header">NEWS</Typography>
      <Typography className="news-header-title" variant="h1">
        What's new in crypto
      </Typography>
    </Box>
  );
};

export default NewsHeader;
