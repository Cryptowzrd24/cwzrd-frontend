import { Box } from '@mui/material';
import React from 'react';

import NewsBanner from '../../news-details/details-section/news-article/news-banner';
import NewsHashtags from '../../news-details/details-section/news-article/news-hashtags';
import ArticleHeader from '../../news-details/details-section/news-article/article-header';
import TechnincalHeading from './technical-heading';
import TechnicalImage from './technical-image';
import TechnicalContent from './technical-content';
function TechnicalArticle() {
  return (
    <Box style={{ width: 'calc(100% - 30px)' }}>
      <ArticleHeader
        coinName={'ETHERIUM'}
        date={'APRIL 25, 2024'}
        readTime={'5 MIN READ'}
      />
      <Box sx={{ marginTop: '16px' }}>
        <TechnincalHeading />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <TechnicalImage />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
        <TechnicalContent />
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

export default TechnicalArticle;
