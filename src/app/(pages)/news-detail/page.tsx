import NewsDetails from '@/app/components/news-details';
import { Container } from '@mui/material';
import React from 'react';

const page = () => {
  return (
    <Container maxWidth="xl">
      <NewsDetails />
    </Container>
  );
};

export default page;
