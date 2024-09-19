import React from 'react';
import InfoCard from './infoCard';
import LinksCard from './linksCard';
import { Box } from '@mui/material';
import Thought from './thoght';

const PriceCards = ({ serverNftData }: any) => {
  return (
    <>
      <Box sx={{ mb: '12px' }}>
        <InfoCard serverNftData={serverNftData} />
      </Box>
      <Box sx={{ mb: '12px' }}>
        <LinksCard serverNftData={serverNftData} />
      </Box>
      <Box sx={{ mb: '12px' }}>
        <Thought />
      </Box>
    </>
  );
};

export default PriceCards;
