import { Box } from '@mui/material';
import React from 'react';
import ArticleHeader from './article-header';
import NewsHeading from './news-heading';
import NewsImage from './news-image';

import NewsImg from '../../../../../../public/icons/reading-now.png';
import NewsImg2 from '../../../../../../public/icons/news-image-second.png';
import NewsQuote from './news-quote';
import CoinNewsDescription from './coin-news-decription';
import NewsHashtags from './news-hashtags';
import NewsBanner from './news-banner';

function NewsArticle() {
  const quoteOne = `Adding another layer to this bullish sentiment, Bitcoin ‘whales’ are
        also accumulating Bitcoin at a pace reminiscent of the pre-2020 bull
        run. This accumulation, now at its highest in the last two months, has
        led to a new historical high in their Bitcoin balance.`;

  const quoteTwo = `Looking forward, several factors could potentially reignite Bitcoin’s upward trajectory. These include an increase in average daily ETF buying activity, a reduction in selling pressure from long-term holders, and a rise in liquidity, which could be triggered by the anticipated rate cut.`;

  const subheadingTextOne = `Bitcoin accumulation by large holders has reached levels not seen since
        before the 2020 bull market. Could it propel Bitcoin’s price to a
        breakout above the $70,000 mark?`;

  const subheadingTextTwo = `Factors like an anticipated interest rate cut and increased institutional buying could lead to more upward momentum for Bitcoin, according to Bitfinex analysts:`;

  return (
    <Box style={{ width: 'calc(100% - 30px)' }}>
      <ArticleHeader />
      <Box sx={{ marginTop: '16px' }}>
        <NewsHeading />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <NewsImage image={NewsImg} subheadingText={subheadingTextOne} />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <CoinNewsDescription />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <NewsQuote quote={quoteOne} />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <NewsImage image={NewsImg2} subheadingText={subheadingTextTwo} />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <NewsQuote quote={quoteTwo} />
      </Box>
      <Box sx={{ marginTop: '24px' }}>
        <NewsHashtags />
      </Box>
      <Box sx={{ marginTop: '24px' }}>
        <NewsBanner />
      </Box>
    </Box>
  );
}

export default NewsArticle;
