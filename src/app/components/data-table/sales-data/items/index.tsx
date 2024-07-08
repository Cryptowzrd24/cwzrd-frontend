import { Box, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../../../../public/images/nft/item1.png';
import Image from 'next/image';

export const SalesItems = () => {
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '14px' }}
      >
        <Image src={img1} alt="elipse" width={32} height={32} />
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          #2701
        </Typography>
      </Box>
    </>
  );
};
