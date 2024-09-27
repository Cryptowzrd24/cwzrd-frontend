import { Box, Typography } from '@mui/material';
import React from 'react';
import CommentsLikes from '../comments-likes';

function CarouselCard() {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 28px 0px #0000000D ',
        padding: '20px 12px',
        width: '85%',
      }}
    >
      <Box sx={{ marginLeft: '8px' }}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Sf Pro Display',
            lineHeight: '15.6px',
            color: 'rgba(55, 97, 251, 1)',
            letterSpacing: '1.2px',
          }}
        >
          06/06/2023 At 00:06 AM
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '23.4px',
            fontFamily: 'Sf Pro Display',
            marginTop: '12px',
            letterSpacing: '0.3px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          The EURUSD price needs new positive momentum
        </Typography>
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '18.85px',
            fontFamily: 'Sf Pro Display',
            marginTop: '8px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          Users can mint new tokens using the company's new Alloy platform,
          which will be part of Tether's upcoming tokenization venture, CEO
          Paolo Ardoino said. CoinDesk Flash gives you the power of news that
          moves markets — be the first to get the latest crypto financial
          opportunities, trends, and technology insights.
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '8px',
          marginLeft: '12px',
        }}
      >
        <CommentsLikes />
      </Box>
    </Box>
  );
}

export default CarouselCard;
