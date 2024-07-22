import React from 'react';
import { Box, Container } from '@mui/material';
import HeroContent from './heroContent';
import Table from '@/app/components/favorites/table';

function Coin() {
  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      <Box sx={{ mt: '48px' }}>
        <HeroContent />
      </Box>
      <Box sx={{ mt: '16px', mb: '48px' }}>
        <Table />
      </Box>
    </Container>
  );
}

export default Coin;
