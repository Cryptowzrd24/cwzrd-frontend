import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../../public/icons/chevronRightHead';

const JoinNow = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '40px',
        alignItems: 'flex-start',
        maxWidth: '580px',
        height: '100%',
        marginLeft: {xs:'0px',lg:'72px'},
        padding: {xs:'20px',lg:'0px'},
      }}
    >
      <Box>
        <Typography
          sx={{
            color: '#111',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '130%',
            letterSpacing: '1.6px',
          }}
        >
          MEMBERSHIP
        </Typography>
        <Typography
          sx={{
            color: '#111',
            fontSize: '56px',
            fontWeight: '500',
            lineHeight: '110%',
            letterSpacing: '0.56px',
          }}
        >
          Join the Cryptowzrd Community Today!
        </Typography>
        <Typography
          sx={{
            color: '#111',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '150%',
            letterSpacing: '-0.16px',
          }}
        >
          Unlock the door to trading success and become a part of the Cryptowzrd
          community! Gain access to our comprehensive educational resources,
          powerful trading tools, and supportive community.
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{
            display: 'flex',
            padding: '12px 24px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            background: '#7248F7',

            '&:hover': {
              background: 'rgb(97, 62, 211)',
            },
          }}
        >
          <Typography
            sx={{
              color: '#FFF',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '130%',
            }}
          >
            Get Started
          </Typography>
          <ChevronRightHead isWhite />
        </Button>
      </Box>
    </Box>
  );
};

export default JoinNow;
