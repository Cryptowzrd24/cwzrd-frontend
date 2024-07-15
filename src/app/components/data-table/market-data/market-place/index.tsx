import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import blur from '../../../../../../public/images/nft/blur.png';
const MarketPlace = () => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '14px' }}
    >
      <Image src={blur} alt="elipse" width={32} height={32} />
      <Typography
        variant="body1"
        sx={{
          fontSize: '13px',
          fontWeight: '600',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        Blur
      </Typography>
    </Box>
  );
};

export default MarketPlace;
