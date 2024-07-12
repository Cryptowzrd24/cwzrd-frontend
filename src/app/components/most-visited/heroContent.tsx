'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '754px', width: '100%' }}>
        Most
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
          }}
        >
          Visited
        </span>{' '}
        Cryptocurrencies
      </Typography>
      <Box
        sx={{
          fontSize: '12px',
          maxWidth: '830px',
          lineHeight: '30px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        CoinMarketCap ranks and scores exchanges based on traffic, liquidity,
        trading volumes, and confidence in the legitimacy of trading volumes
        reported.{' '}
        {isExpanded && (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            corrupti iure optio facilis voluptatum similique corporis doloribus
            laborum iusto, cupiditate eveniet dolore tempore eaque rerum
            delectus provident porro nisi? Similique.
          </span>
        )}
        <span
          style={{
            color: '#7248F7',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500',
          }}
          onClick={handleToggle}
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </span>
      </Box>
    </>
  );
}

export default HeroContent;
