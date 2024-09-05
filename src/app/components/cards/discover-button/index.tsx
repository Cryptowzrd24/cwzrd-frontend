import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import { ArrowRight } from '../../../../../public/icons/arrowRight';

const DiscoverCardButton = () => {
  return (
    <Box className="card-button">
      <Box
        sx={{
          position: 'absolute',
          paddingLeft: '24px',
          paddingRight: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            marginTop: '235px',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '26px',
            letterSpacing: '1px',
            color: 'black',
            // width: '100%',
          }}
        >
          Discover Our Platform
        </Typography>
        <Typography
          sx={{
            marginTop: '8px',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '1px',
            color: 'black',
            width: '266px',
            height: '144px',
          }}
        >
          On a daily basis we analyze Crypto, Forex, and Stock markets, to
          provide you with invaluable insights and precise signals, positioning
          you for trading success and profits.
        </Typography>
        <Button
          sx={{
            borderRadius: '25px',
            width: '123px',
            padding: '10px 20px 10px 24px',
            background: 'rgba(17, 17, 17, 0.1)',
            marginTop: '12px',
            height: '36px',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '15.6px',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Read More <ArrowRight fill="black" />
        </Button>
      </Box>
    </Box>
  );
};

export default DiscoverCardButton;
