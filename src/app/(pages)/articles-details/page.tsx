import NewsDetails from '@/app/components/news-details';
import { Container } from '@mui/material';
import React from 'react';

const ArticlesDetails = () => {
  return (
    <Container maxWidth="xl">
      <NewsDetails isArticleDetails={true} />
    </Container>
  );
};

export default ArticlesDetails;
