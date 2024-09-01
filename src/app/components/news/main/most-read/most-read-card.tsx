import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

function MostReadCard() {
  return (
    <Box
      sx={{
        height: '133px',
        borderTop: '1px solid rgba(17, 17, 17, 0.1)',
        marginTop: '15px',
      }}
    >
      <Box sx={{ paddingTop: '15px' }}>
        <Typography
          sx={{
            width: '244px',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '23.4px',
            letterSpacing: '1.35px',
            fontFamily: 'Sf Pro Display',
            paddingInline: '10px',
          }}
        >
          Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin
        </Typography>
        <Typography
          sx={{
            width: '254px',
            color: 'rgba(17, 17, 17, 0.8)',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '18.85px',
            fontFamily: 'Sf Pro Display',
            paddingInline: '10px',
            marginTop: '4px',
          }}
        >
          NASA's Drew Feusted and Ricky Arnold...
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '12px',
            paddingInline: '10px',
            gap: '8px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Sf Pro Display',
              fontSize: '11px',
              fontWeight: 600,
              lineHeight: '14.3px',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            06/06/2023 at 00:06 AM
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: '11px',
              marginTop: '2px',
              borderColor: 'rgba(17, 17, 17, 1)',
            }}
          />
          <Typography
            sx={{
              fontFamily: 'Sf Pro Display',
              fontSize: '11px',
              fontWeight: 600,
              lineHeight: '14.3px',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            John Smith
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MostReadCard;
