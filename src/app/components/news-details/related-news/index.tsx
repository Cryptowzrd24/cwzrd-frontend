import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import goldbarImg from '../../../../../public/images/goldbar.png';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FinancialNewsCarousel from '../../technicals-page/financial-news-carousel';
import FinancialCard from '../../technicals-page/financial-card';
import RelatedNewsCards from './related-news-cards';
import RelatedNewsCarousel from './related-news-carousel';

function RelatedNews({ isArticleDetails }: { isArticleDetails?: boolean }) {
  const isTabView = useMediaQuery('(min-width: 978px)');
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px 0 8px',

          '@media (max-width: 978px)': {
            padding: 0,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: '38.4px',
            lettterSpacing: '1px',

            '@media (max-width: 660px)': {
              fontSize: '24px',
              lineHeight: '120%',
              letterSpacing: '0.24px',
            },

            '@media (max-width: 425px)': {
              fontSize: '22px',
            },
          }}
        >
          Other Related
          <span
            style={{
              background:
                'linear-gradient(90deg, #7248F7 70.78%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {' '}
            News
          </span>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
            cursor: 'pointer',
          }}
        >
          <Typography
            sx={{
              background:
                'linear-gradient(90deg, #7248F7 70.78%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '14px',
              lineHeight: '18.2px',
              fontWeight: 600,
              fontFamily: 'Sf Pro Display',
            }}
          >
            Read More
          </Typography>
          <ArrowForwardIosIcon
            sx={{
              fontSize: '14px',
              color: '#7248F7',
            }}
          />
        </Box>
      </Box>
      {isArticleDetails ? (
        <Box sx={{ mt: '24px' }}>
          <RelatedNewsCards />
          <RelatedNewsCarousel />
        </Box>
      ) : (
        <Stack spacing="16px" sx={{ mt: '24px' }}>
          {isTabView && (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                '& > *': {
                  flex: '1 1 0',
                  minWidth: 0,
                  maxWidth: '100%',
                },
                '@media (max-width: 977px)': {
                  '& > *': {
                    flex: '1 1 48%',
                    minWidth: '280px',
                    maxWidth: '48%',
                  },
                },
                '@media (max-width: 600px)': {
                  '& > *': {
                    flex: '1 1 100%',
                    minWidth: '0',
                    maxWidth: '100%',
                  },
                },
              }}
            >
              <FinancialCard
                image={goldbarImg}
                imageContainerWidth="100%"
                titleMaxWidth="100%"
              />
              <FinancialCard
                image={goldbarImg}
                imageContainerWidth="100%"
                titleMaxWidth="100%"
              />
              <FinancialCard
                image={goldbarImg}
                imageContainerWidth="100%"
                titleMaxWidth="100%"
              />
              <FinancialCard
                image={goldbarImg}
                imageContainerWidth="100%"
                titleMaxWidth="100%"
              />
            </Box>
          )}
          <Box sx={{ mb: '32px' }}>
            <FinancialNewsCarousel
              noBackground={true}
              image={goldbarImg}
              titleWidth="auto"
              descriptionWidth="auto"
            />
          </Box>
          {/* {isTabView && (
            <FinancialNewsCarousel
              noBackground={true}
              image={goldbarImg}
              titleWidth="auto"
              descriptionWidth="auto"
            />
          )} */}
        </Stack>
      )}
    </Box>
  );
}

export default RelatedNews;
