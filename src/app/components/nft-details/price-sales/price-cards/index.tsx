import React from 'react';
import InfoCard from './infoCard';
import LinksCard from './linksCard';
import { Box } from '@mui/material';
import Thought from './thoght';

const PriceCards = ({ serverNftData }: any) => {
  return (
    <>
      <Box
        sx={{ mb: '8px', width: '100%', height: 'auto', overflow: 'hidden' }}
      >
        <InfoCard serverNftData={serverNftData} />
      </Box>
      <Box
        sx={{ mb: '8px', width: '100%', height: 'auto', overflow: 'hidden' }}
      >
        <LinksCard serverNftData={serverNftData} />
      </Box>
      <Box
        sx={{ mb: '8px', width: '100%', height: 'auto', overflow: 'hidden' }}
      >
        <Thought />
      </Box>
    </>
  );
};

export default PriceCards;
