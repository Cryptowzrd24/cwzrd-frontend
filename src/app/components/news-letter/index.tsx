import React from 'react';

import { Box, Typography } from '@mui/material';
import CardContent from './news-letter-cards/cardContent';
import LiveExplorer from './live-explorer-cards/liveExplorer';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';

function NewsLetter() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Typography
              variant="h4"
              sx={{ mb: '4px', letterSpacing: 3, fontSize: '16px' }}
            >
              NEWSLETTER
            </Typography>
            <Typography variant="h2" sx={{ maxWidth: '650px' }}>
              News: All About{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                className="font-semibold text-[32px]   font-[#111111CC]"
              >
                Crypto
              </span>{' '}
            </Typography>
          </div>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',

            marginTop: '16px',
          }}
        >
          <div
            style={{
              flex: 1,
              marginRight: '30px',
            }}
          >
            <CardContent />
          </div>
          <div
            style={{
              width: '330px',
              backgroundImage: `url('/images/news-letter/card-background1.png')`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '16px',
            }}
          >
            <LiveExplorer />
          </div>
        </div>

        <Box
          sx={{
            mt: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              background: 'rgba(17, 17, 17, 0.05)',
              padding: '11px 16px 11px  16px',
              fontWeight: '600',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '14px',
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
