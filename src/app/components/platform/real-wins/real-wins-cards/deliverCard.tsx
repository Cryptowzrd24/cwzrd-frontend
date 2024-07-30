import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import deliver from '../../../../../../public/images/platform/deliver.png';
const DeliverCard = () => {
  return (
    <>
      <Box
        sx={{
          padding: '20px 21px 20px 24px',
          background: 'rgba(17, 17, 17, 1)',
          borderRadius: '16px',
          maxWidth: '186px',
          width: '100%',
          height: '98px',
        }}
      >
        <Image src={deliver} alt="deliver" width={48} height={48} />
        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '23.4px',
            letterSpacing: '1px',
            maxWidth: '165px',
            mt: '4px',
          }}
        >
          Delivering profits for 4+ years
        </Typography>
      </Box>
    </>
  );
};

export default DeliverCard;
