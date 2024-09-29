import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

function MostReadCard() {
  return (
    <Box
      sx={{
        height: '80px',
        borderTop: '1px solid rgba(17, 17, 17, 0.1)',
        marginTop: '12px',
        paddingBottom: '10px',
      }}
    >
      <Box sx={{ padding: '12px' }}>
        <Typography
          sx={{
            width: '244px',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '18.2px',
            letterSpacing: '0.7px',
            fontFamily: 'Sf Pro Display',
            // paddingInline: '10px',
          }}
        >
          Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin
        </Typography>
        <Typography
          sx={{
            width: '290px',
            color: 'rgba(17, 17, 17, 0.8)',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '17.4px',
            fontFamily: 'Sf Pro Display',
            // paddingInline: '10px',
            marginTop: '6px',
          }}
        >
          NASA's Drew Feusted and Ricky Arnold are the...
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '8px',
            // paddingInline: '10px',
            gap: '8px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Sf Pro Display',
              fontSize: '10px',
              fontWeight: 500,
              lineHeight: '13px',
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
              fontSize: '10px',
              fontWeight: 500,
              lineHeight: '13px',
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
