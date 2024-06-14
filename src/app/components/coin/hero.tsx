'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('SHOW');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ mb: '4px', letterSpacing: 3 }}>
          MARKET CAP
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Box
            sx={{
              border: '1px solid rgba(17, 17, 17, 0.1)',
              borderRadius: '72px',
              padding: { xs: '2px', sm: '4px' },
              display: 'flex',
              cursor: 'pointer',
            }}
          >
            <Box
              onClick={() => setActiveButton('HIDE')}
              sx={{
                padding: '9px 12px',
                borderRadius: '72px',
                fontSize: '10px',
                bgcolor: activeButton === 'HIDE' ? '#7248F7' : '',
                color: activeButton === 'HIDE' ? 'white' : '',
              }}
            >
              HIDE
            </Box>
            <Box
              onClick={() => setActiveButton('SHOW')}
              sx={{
                padding: '9px 12px',
                borderRadius: '72px',
                fontSize: '10px',
                bgcolor: activeButton === 'SHOW' ? '#7248F7' : '',
                color: activeButton === 'SHOW' ? 'white' : '',
              }}
            >
              SHOW
            </Box>
          </Box>
          <Typography variant="body1">Show Stats</Typography>
        </Box>
      </Box>

      <Typography variant="h1">
        Today{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cryptocurrency prices
        </span>{' '}
        by <br /> Market Cap
      </Typography>
      <Box
        sx={{
          fontSize: '20px',
          maxWidth: '600px',
          lineHeight: '30px',
          mt: '32px',
        }}
      >
        The overall market capitalization of the crypto market is 
        <span style={{ color: '#7248F7', fontWeight: '600', fontSize: '20px' }}>
          €2.26T.
        </span>{' '}
        an increase of
        <span style={{ color: '#1FD773', fontWeight: '600', fontSize: '20px' }}>
          +3.75%
        </span>
        in the last 24 hours.{' '}
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
            fontSize: '18px',
            fontWeight: '500',
          }}
          onClick={handleToggle}
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </span>
      </Box>
    </Stack>
  );
};

export default Hero;
