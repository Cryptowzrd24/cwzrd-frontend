import React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import CardContent from './news-letter-cards/cardContent';
import LiveExplorer from './live-explorer-cards/liveExplorer';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';

function NewsLetter() {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{ mb: '4px', letterSpacing: 3, fontSize: '18px' }}
        >
          NEWSLETTER
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" sx={{ maxWidth: '650px' }}>
            News: All About{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold text-[56px]  leading-[61px] font-[#111111CC]"
            >
              Crypto
            </span>{' '}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              maxWidth: '630px',
              lineHeight: '30px',
            }}
          >
            {' '}
            Stay informed and ahead of the curve with our curated selection of
            articles and reports.
          </Typography>
        </Box>
        <Grid
          container
          columnSpacing={2}
          sx={{
            mt: '72px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} md={8}>
            <CardContent />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              backgroundImage: `url(${'/images/news-letter/card-background1.png'})`,
              backgroundSize: '100%,-100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              maxWidth: '330px',
              width: '100%',
              borderRadius: '16px',
            }}
          >
            <LiveExplorer />
          </Grid>{' '}
        </Grid>
        <Box
          sx={{
            mt: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              background: 'rgba(17, 17, 17, 0.05)',
              padding: '16px 24px 16px  32px',
              fontWeight: '600',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              borderRadius: '56px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              lineHeight: 1,
              ':hover': {
                background: 'rgba(17, 17, 17, 0.2)',
              },
            }}
          >
            See All News
            <ArrowRightBlack />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NewsLetter;
