import { Box, Typography } from '@mui/material';
import React from 'react';

import NewsBanner from '../../news-details/details-section/news-article/news-banner';
import NewsHashtags from '../../news-details/details-section/news-article/news-hashtags';
import ArticleHeader from '../../news-details/details-section/news-article/article-header';
import TechnincalHeading from './technical-heading';
import TechnicalImage from './technical-image';
import CoinNewsDescription from '../../news-details/details-section/news-article/coin-news-decription';
import NewsQuote from '../../news-details/details-section/news-article/news-quote';
function TechnicalArticle() {
  const quoteOne = `Adding another layer to this bullish sentiment, Bitcoin ‘whales’ are
  also accumulating Bitcoin at a pace reminiscent of the pre-2020 bull
  run. This accumulation, now at its highest in the last two months, has
  led to a new historical high in their Bitcoin balance.`;
  const quoteTwo = `Looking forward, several factors could potentially reignite Bitcoin’s upward trajectory. These include an increase in average daily ETF buying activity, a reduction in selling pressure from long-term holders, and a rise in liquidity, which could be triggered by the anticipated rate cut.`;
  return (
    // <Box style={{ maxWidth: '770px' }}>
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '@media (max-width: 978px)': {
            flexDirection: 'column-reverse',
          },
        }}
      >
        <ArticleHeader
          coinName={'ETHERIUM'}
          date={'APRIL 25, 2024'}
          readTime={'5 MIN READ'}
        />
        <Box
          sx={{
            marginTop: '12px',
            '@media (max-width: 978px)': {
              marginTop: 0,
              marginBottom: '12px',
            },
          }}
        >
          <TechnincalHeading />
        </Box>
      </Box>
      <Box sx={{ marginTop: '12px' }}>
        <TechnicalImage />
      </Box>
      <Box sx={{ marginTop: '12px' }}>
        <CoinNewsDescription />
      </Box>
      <Box sx={{ marginTop: '12px' }}>
        <NewsQuote quote={quoteOne} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '18.5px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '27px',
            color: 'rgba(17, 17, 17, 0.8)',
            marginTop: '12px',
          }}
        >
          Factors like an anticipated interest rate cut and increased
          institutional buying could lead to more upward momentum for Bitcoin,
          according to Bitfinex analysts:
        </Typography>
      </Box>
      <Box sx={{ marginTop: '12px' }}>
        <NewsQuote quote={quoteTwo} />
      </Box>
      <Box sx={{ marginTop: '12px' }}>
        <NewsHashtags />
      </Box>
      <Box sx={{ marginTop: '24px' }}>
        <NewsBanner />
      </Box>
    </Box>
  );
}

export default TechnicalArticle;
