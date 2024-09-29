import { Box, Typography } from '@mui/material';
import React from 'react';
import Card from './card';

import RightRed from '../../../../../public/icons/News-Letter/rightRed';

function PicksForPanel() {
  const renderCards = [1, 2, 3, 4].map(() => {
    return <Card />;
  });
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        paddingTop: '12px',
        // width: '300px',

        overflowY: 'scroll',
        maxHeight: '472px',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '12px',
          justifyContent: 'space-between',
          width: '100%',
          paddingInline: '12px',
          paddingTop: '16px',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontSize: '14px',
            lineHeight: '18.2px',
            fontWeight: 600,
          }}
        >
          ⭐️ Picks for you
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingRight: '27px',
          }}
        >
          <Typography
            sx={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
              fontWeight: '600',
              mb: '3px',
              letterSpacing: 'normal',
              fontSize: '14px',
              lineHeight: '18.2px',
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Box>{renderCards}</Box>
    </Box>
  );
}

export default PicksForPanel;
