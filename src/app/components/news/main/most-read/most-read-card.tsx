import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

function MostReadCard() {
  return (
    <Box
      sx={{
        // height: '80px',
        borderTop: '1px solid rgba(17, 17, 17, 0.1)',
        marginTop: '12px',
        // paddingBottom: '10px',
      }}
    >
      <Box sx={{ padding: '12px' }}>
        <Typography
          sx={{
            width: '244px',
            fontWeight: 700,
            fontSize: '14px !important',
            lineHeight: '18.2px',
            letterSpacing: '0.7px',
            fontFamily: 'Sf Pro Display',
            // paddingInline: '10px',

            '@media (max-width: 1380px)': {
              width: 'auto',
            },
          }}
        >
          Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin
        </Typography>
        <Typography
          sx={{
            width: 'auto',
            color: 'rgba(17, 17, 17, 0.8)',
            fontWeight: 400,
            fontSize: '12px !important',
            lineHeight: '17.4px',
            fontFamily: 'Sf Pro Display',
            marginTop: '6px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          NASA's Drew Feustel and Ricky Arnold are the first astronauts to
          conduct a spacewalk for the installation of new equipment on the
          International Space Station.
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
              fontSize: '10px !important',
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
              fontSize: '10px !important',
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
