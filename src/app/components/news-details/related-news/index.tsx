import { Box, Typography } from '@mui/material';
import React from 'react';
import RelatedNewsCarousel from './related-news-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function RelatedNews() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px 0 15px',
        }}
      >
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '38.4px',
            lettterSpacing: '1px',
          }}
        >
          Other Related
          <span
            style={{
              background:
                'linear-gradient(90deg, #7248F7 70.78%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {' '}
            News
          </span>
        </Typography>
        <Typography
          sx={{
            background: 'linear-gradient(90deg, #7248F7 70.78%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '14px',
            lineHeight: '18.2px',
            fontWeight: 600,
            fontFamily: 'Sf Pro Display',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
          }}
        >
          Read More
          <ArrowForwardIosIcon
            sx={{
              fontSize: '14px',
              color: '#7248F7',
            }}
          />
        </Typography>
      </Box>
      <Box sx={{ mt: '24px' }}>
        <RelatedNewsCarousel />
      </Box>
    </Box>
  );
}

export default RelatedNews;
