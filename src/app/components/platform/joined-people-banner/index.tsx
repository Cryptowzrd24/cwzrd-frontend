import React from 'react';
import join from '../../../../../public/images/platform/Joined.png';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRight from '../../../../../public/icons/News-Letter/arrowRight';
const JoinedPeople = () => {
  return (
    <>
      <Box
        sx={{
          padding: '24px 48px',
          borderRadius: '32px',
          backgroundImage:
            'linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Image src={join} alt="join" width={252} style={{paddingTop:"8px"}} />
          <Typography variant="h1" sx={{ color: 'rgba(255, 255, 255, 1)' }}>
            10,700+ people already joined us
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '24px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Become a member
            <span style={{ marginTop: '8px', marginLeft: '4px' }}>
              <ArrowRight />
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default JoinedPeople;
