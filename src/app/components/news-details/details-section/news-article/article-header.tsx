import { Box, Typography } from '@mui/material';
import React from 'react';
import Clock from '../../../../../../public/icons/clock';

function ArticleHeader({
  coinName,
  date,
  readTime,
  isArticleDetails,
}: {
  coinName: string;
  date: string;
  readTime: string;
  isArticleDetails?: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <Box
        sx={{
          borderRadius: '100px',
          padding: '5px 12px',
          background:
            'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%)',
        }}
      >
        <Typography
          sx={{
            background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 500,
            fontSize: isArticleDetails ? '12px' : '10px',
            letterSpacing: '1px',
            fontFamily: 'Sf Pro Display',
            lineHeight: isArticleDetails ? '15.6px' : '13px',

            '@media (max-width: 978px)': {
              fontSize: '10px !important',
              lineHeight: '13px !important',
            },
          }}
        >
          {coinName}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontWeight: 500,
          fontSize: isArticleDetails ? '12px' : '10px',
          letterSpacing: '1.5px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '15.6px',
          '@media (max-width: 978px)': {
            fontSize: '10px !important',
            lineHeight: '13px !important',
          },
        }}
      >
        {date}
      </Typography>
      <Box
        sx={{
          borderRight: '1px solid rgba(17, 17, 17, 1)',
          height: '10px',
        }}
      ></Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Clock />
        <Typography
          sx={{
            color: 'rgba(17, 17, 17, 1)',
            fontWeight: 500,
            fontSize: isArticleDetails ? '12px' : '10px',
            letterSpacing: '1.5px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '15.6px',
            '@media (max-width: 978px)': {
              fontSize: '10px !important',
              lineHeight: '13px !important',
            },
          }}
        >
          {readTime}
        </Typography>
      </Box>
    </Box>
  );
}

export default ArticleHeader;
