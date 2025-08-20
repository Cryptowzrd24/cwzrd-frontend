import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MapWithDestinations from '../../../../../public/images/home/trading_journey/map_with_destinations.svg';
import JoinedUs from '../../../../../public/images/home/trading_journey/joined-us.svg';

const Members = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #3761FB 0%, #37A9FB 100%)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '75%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '20px',
          alignItems: 'center',
        }}
      >
        <Image
          src={JoinedUs}
          width={200}
          height={100}
          alt="joined us "
          style={{ margin: '0 auto' }}
        />
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '1.3',
            letterSpacing: '2%',
            color: 'white',
            textAlign: 'center',
          }}
        >
          10,700+ Members
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '1.5',
            textAlign: 'center',
          }}
        >
          Join a thriving community of over 10,700 traders. Learn from others,
          share strategies, and grow together.
        </Typography>
      </Box>
      <Box>
        <Image
          src={MapWithDestinations}
          alt="map points"
          width={700}
          height={250}
        />
      </Box>
    </Box>
  );
};

export default Members;
