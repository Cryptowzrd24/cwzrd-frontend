import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import deliver from '../../../../../../public/images/platform/deliver.png';
const DeliverCard = () => {
  return (
      <Box
        sx={{
          boxSizing:'border-box',
          padding: '15px',
          background: 'rgba(17, 17, 17, 1)',
          borderRadius: '16px',
          flex: 1,
          width: "100%",
          height:'100%',

          '@media (max-width: 576px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '6px',
            padding: '15px',
          },
        }}
      >
        <Image src={deliver} alt="deliver" width={36} height={36} />
        <Typography
          variant="body1"
          sx={{
            fontSize: '12px !important',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '15.6px',
            letterSpacing: '0.8px',
            width: '100%',
            mt: '4px',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Delivering profits <br />for 4+ years
        </Typography>
      </Box>
  );
};

export default DeliverCard;
