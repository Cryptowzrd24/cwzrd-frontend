// import { Box } from '@mui/material';
// import React from 'react';
// import ArticleHeader from './article-header';
// import NewsHeading from './news-heading';
// import NewsImage from './news-image';

// import NewsImg from '../../../../../../public/icons/reading-now.png';
// import NewsImg2 from '../../../../../../public/icons/news-image-second.png';
// import NewsQuote from './news-quote';
// import CoinNewsDescription from './coin-news-decription';
// import NewsHashtags from './news-hashtags';
// import NewsBanner from './news-banner';

// function NewsArticle() {
//   const quoteOne = `Adding another layer to this bullish sentiment, Bitcoin ‘whales’ are
//         also accumulating Bitcoin at a pace reminiscent of the pre-2020 bull
//         run. This accumulation, now at its highest in the last two months, has
//         led to a new historical high in their Bitcoin balance.`;

//   const quoteTwo = `Looking forward, several factors could potentially reignite Bitcoin’s upward trajectory. These include an increase in daily ETF buying activity, a reduction in selling pressure from long-term holders, and a rise in liquidity, which could be triggered by the anticipated rate cut.`;

//   const subheadingTextOne = `Bitcoin accumulation by large holders has reached levels not seen since
//         before the 2020 bull market. Could it propel Bitcoin’s price to a
//         breakout above the $70,000 mark?`;

//   const subheadingTextTwo = `Factors like an anticipated interest rate cut and increased institutional buying could lead to more upward momentum for Bitcoin, according to Bitfinex analysts:`;

//   return (
//     <Box style={{ width: '770px' }}>
//       <ArticleHeader
//         coinName={'BITCOIN'}
//         date={'APRIL 25, 2024'}
//         readTime={'5 MIN READ'}
//       />
//       <Box id="heading1" sx={{ marginTop: '12px' }}>
//         <NewsHeading />
//       </Box>
//       <Box sx={{ marginTop: '12px' }}>
//         <NewsImage image={NewsImg} subheadingText={subheadingTextOne} />
//       </Box>
//       <Box id="heading2" sx={{ marginTop: '12px' }}>
//         <CoinNewsDescription />
//       </Box>
//       <Box sx={{ marginTop: '12px' }}>
//         <NewsQuote quote={quoteOne} />
//       </Box>
//       <Box sx={{ marginTop: '12px' }}>
//         <NewsImage image={NewsImg2} subheadingText={subheadingTextTwo} />
//       </Box>
//       <Box sx={{ marginTop: '12px' }}>
//         <NewsQuote quote={quoteTwo} />
//       </Box>
//       <Box sx={{ marginTop: '12px' }}>
//         <NewsHashtags />
//       </Box>
//       <Box sx={{ marginTop: '24px' }}>
//         <NewsBanner />
//       </Box>
//     </Box>
//   );
// }

// export default NewsArticle;

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

function NewsArticle({
  tocRefs,
  isArticleDetails,
}: {
  tocRefs?: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  isArticleDetails?: boolean;
}) {
  const quoteOne = `Adding another layer to this bullish sentiment, Bitcoin ‘whales’ are also accumulating Bitcoin at a pace reminiscent of the pre-2020 bull run. This accumulation, now at its highest in the last two months, has led to a new historical high in their Bitcoin balance.`;

  const quoteTwo = `Looking forward, several factors could potentially reignite Bitcoin’s upward trajectory. These include an increase in daily ETF buying activity, a reduction in selling pressure from long-term holders, and a rise in liquidity, which could be triggered by the anticipated rate cut.`;

  const subheadingTextOne = `Bitcoin accumulation by large holders has reached levels not seen since before the 2020 bull market. Could it propel Bitcoin’s price to a breakout above the $70,000 mark?`;

  const subheadingTextTwo = `Factors like an anticipated interest rate cut and increased institutional buying could lead to more upward momentum for Bitcoin, according to Bitfinex analysts:`;

  return (
    <Box
      sx={{
        maxWidth: '100%',
        '@media (max-width: 1320px)': {
          maxWidth: '100%',
        },
      }}
    >
      <Box
        id="heading1"
        ref={(el: HTMLDivElement | null) => {
          if (tocRefs) {
            tocRefs.current['heading1'] = el;
          }
        }}
      >
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
            isArticleDetails={isArticleDetails}
            coinName={'BITCOIN'}
            date={'APRIL 25, 2024'}
            readTime={'5 MIN READ'}
          />

          <Box
            sx={{
              marginTop: '12px',
              '@media (max-width: 978px)': {
                marginTop: '0px',
                marginBottom: '12px',
              },
            }}
          >
            <NewsHeading isArticleDetails={isArticleDetails} />
          </Box>
        </Box>

        <Box sx={{ marginTop: '12px' }}>
          <NewsImage
            isArticleDetails={isArticleDetails}
            image={NewsImg}
            subheadingText={subheadingTextOne}
            isSocialIcon
          />
        </Box>
      </Box>
      <Box
        id="heading2"
        ref={(el: HTMLDivElement | null) => {
          if (tocRefs) {
            tocRefs.current['heading2'] = el;
          }
        }}
      >
        <Box sx={{ marginTop: '12px' }}>
          <CoinNewsDescription isArticleDetails={isArticleDetails} />
        </Box>

        <Box sx={{ marginTop: '12px' }}>
          <NewsQuote isArticleDetails={isArticleDetails} quote={quoteOne} />
        </Box>

        <Box sx={{ marginTop: '12px' }}>
          <NewsImage
            isArticleDetails={isArticleDetails}
            image={NewsImg2}
            subheadingText={subheadingTextTwo}
          />
        </Box>

        <Box
          sx={{
            marginTop: '12px',
          }}
        >
          <NewsQuote isArticleDetails={isArticleDetails} quote={quoteTwo} />
        </Box>

        <Box sx={{ marginTop: '12px' }}>
          <NewsHashtags isArticleDetails={isArticleDetails} />
        </Box>

        <Box sx={{ marginTop: '24px' }}>
          <NewsBanner />
        </Box>
      </Box>
    </Box>
  );
}

export default NewsArticle;
