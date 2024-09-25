import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import deliver from '../../../../../../public/images/platform/deliver.png';
const DeliverCard = () => {
  return (
    <>
      <Box
        sx={{
          padding: '15px 15.75px 15px 18px',
          background: 'rgba(17, 17, 17, 1)',
          borderRadius: '16px',
          width: '172.5px',
          // height: '101px',
        }}
      >
        <Image src={deliver} alt="deliver" width={48} height={48} />
        <Typography
          variant="body1"
          sx={{
            fontSize: '12px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '15.6px',
            letterSpacing: '1px',
            width: '138px',
            mt: '4px',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Delivering profits for 4+ years
        </Typography>
      </Box>
    </>
  );
};

export default DeliverCard;
