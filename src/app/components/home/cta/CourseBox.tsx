import { Box, Typography } from '@mui/material';
import React from 'react';

const CourseBox = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: {lg:'12px 17px',xs:'8px'},
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
        borderRadius: '12px 12px 0px 12px',
        background: '#FFF',
        boxShadow: ' 0px 4.119px 24.713px 0px rgba(0, 0, 0, 0.07)',
        minWidth: '200px',
        position: 'absolute',
        top: {xs:'-30px',sm:'-42px'},
        right: {xs:'10%', sm: '100px', lg: '220px' },
      }}
    >
      <Typography sx={{fontSize:{xs:'12px',sm:'16px'}}}>Course</Typography>
      {/* divider progress */}
      <Box
        sx={{
          width: '100%',
          height: {xs:8,sm:12},
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
            fontSize: {xs:'9px',sm:'12px'},
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
            fontSize: {xs:'9px',sm:'12px'},
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
