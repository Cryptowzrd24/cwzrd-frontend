import { Box, Typography } from '@mui/material';
import React from 'react';

const CourseBox = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: { lg: '12px 17px', xs: ' 6px 12px' },
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: { lg: '8px', xs: '4px' },
        borderRadius: '12px',
        background: '#FFF',
        boxShadow: ' 0px 4.119px 24.713px 0px rgba(0, 0, 0, 0.07)',
        minWidth: '200px',
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: '16px', xs: '12px' },
          fontWeight: { lg: '500', xs: '400' },
          lineHeight: { lg: '120%', xs: '100%' },
          letterSpacing: { lg: '0.16px', xs: '0.12px' },
        }}
      >
        Course
      </Typography>
      {/* divider progress */}
      <Box
        sx={{
          width: '100%',
          height: 12,
          backgroundColor: '#eaeaea',
          borderRadius: 6,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '36%',
            height: '100%',
            backgroundColor: '#111',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: '#111',
            fontSize: '9px',
            fontWeight: '500',
            lineHeight: '120%',
            letterSpacing: '0.093px',
          }}
        >
          Progress:
        </Typography>
        <Typography
          sx={{
            color: '#111',
            fontSize: '9px',
            fontWeight: '500',
            lineHeight: '120%',
            letterSpacing: '0.093px',
          }}
        >
          36%
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseBox;
