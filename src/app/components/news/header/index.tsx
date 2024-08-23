import { Typography } from '@mui/material';
import React from 'react';
import './styles.scss';

const NewsHeader = () => {
  return (
    <>
      <Typography className="news-header">NEWS</Typography>
      <Typography className="news-header-title" variant="h1">
        What's new in crypto
      </Typography>
    </>
  );
};

export default NewsHeader;
