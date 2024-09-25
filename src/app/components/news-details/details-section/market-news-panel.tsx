import { Box, Typography } from '@mui/material';
import React from 'react';
import LiveMarket from '../../news/main/live-market';
import LiveNewsExplorer from '../../news/main/live-news';
import DiscoverCardButton from '../../cards/discover-button';

function MarketNewsPanel({
  isTechnicalDetail,
}: {
  isTechnicalDetail: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginLeft: '-25px',
      }}
    >
      <Box
        sx={{
          background: !isTechnicalDetail
            ? 'linear-gradient(to right, rgba(254, 231, 226, 1), rgba(254, 231, 226, 0) 60px)'
            : 'linear-gradient(95deg, #CDE8FD 1.68%, #FFF 23.08%)',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          padding: '12px 16px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '14px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          Next:
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            color: 'rgba(17, 17, 17, 1)',
            marginTop: '10px',
            letterSpacing: '0.7px',
          }}
        >
          1 Top Cryptocurrency to Buy Before It Soars 1,415% to $1 Million,
          According to Certain Wall Street Analysts
        </Typography>
      </Box>
      <Box
        sx={{
          width: '300px',
        }}
      >
        {isTechnicalDetail && (
          <LiveMarket
            isPageDetails={true}
            isTechnicalDetail={isTechnicalDetail}
          />
        )}
        {!isTechnicalDetail ? (
          <LiveNewsExplorer isPageDetails={true} />
        ) : (
          <DiscoverCardButton />
        )}
        {!isTechnicalDetail && (
          <Box sx={{ marginTop: '20px' }}>
            <LiveMarket
              isPageDetails={true}
              isTechnicalDetail={isTechnicalDetail}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default React.memo(MarketNewsPanel);
