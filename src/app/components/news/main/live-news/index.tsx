import React from 'react';
import RightRed from '../../../../../../public/icons/News-Letter/rightRed';
import { Box, Divider, Typography } from '@mui/material';
import LiveNewsCardList from './live-news-card-list';

function LiveNewsExplorer({ isPageDetails }: { isPageDetails?: boolean }) {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        overflow: 'auto',
        scrollbarWidth: 'none',
        padding: '16px',
        background:
          'linear-gradient(to right, rgba(254, 231, 226, 0.8), rgba(254, 231, 226, 0) 50px)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 28px 0px #0000000D',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '12px',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '12px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: 'black',
            fontWeight: '700',
            fontSize: '12px',
            lineHeight: '15.6px',
            letterSpacing: '10%',
          }}
        >
          📰 LIVE EXPLORER
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="subtitle2"
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
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Divider
        sx={{ width: '100%', marginTop: '-13px', marginBottom: '10px' }}
      />
      <LiveNewsCardList isPageDetails={isPageDetails} />
    </Box>
  );
}

export default LiveNewsExplorer;
