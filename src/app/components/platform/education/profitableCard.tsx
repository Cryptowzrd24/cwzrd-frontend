import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import vector from '../../../../../public/images/platform/vector.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';
const ProfitableCard = () => {
  return (
    <>
      <Stack
        sx={{
          background: 'rgba(153, 23, 255, 1)',
          padding: '56px 40px 71px 40px',
          borderRadius: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth:"330px",
          height:"288px",
          position:"relative"
        }}
      >
        <Image src={vector} alt="vector" width={180} />
        <Box sx={{ mt: '34px' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '40px',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 1)',
              textAlign:"center",
              lineHeight:"44px"
            }}
          >
            Profitable Opportunities
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              background: '#FFFFFF',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
          >
            <PlusIcon />
          </Box>
          </Box>
      </Stack>
    </>
  );
};

export default ProfitableCard;
