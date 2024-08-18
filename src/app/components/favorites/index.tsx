'use client';
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import HeroContent from './heroContent';
import Table from '@/app/components/favorites/table';

function Favorites() {
  const [selectedWatchList, setSelectedWatchList] = useState({});
  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      <Box sx={{ mt: '48px' }}>
        <HeroContent
          selectedWatchList={selectedWatchList}
          setSelectedWatchList={setSelectedWatchList}
        />
      </Box>
      <Box sx={{ mt: '16px', mb: '48px' }}>
        <Table selectedWatchList={selectedWatchList} />
      </Box>
    </Container>
  );
}

export default Favorites;
