import React from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Coins from '../../../../../public/images/membership/spotTradeCoins.png';

const SpotTradeCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/membership/spotTradeBg.png')`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          pt: '29px',
          height: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '4px',
            px: '21px',
            '@media (max-width:660px)': {
              fontSize: '16px',
            },
          }}
        >
          Spot Trade Signals
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            mb: '61px',
            px: '21px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          Get real-time spot trade signals delivered directly to you, helping
          you capitalize on quick opportunities in the fast-moving markets.
        </Typography>

        <Image
          src={Coins}
          alt="coin"
          height={210}
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default SpotTradeCard;
