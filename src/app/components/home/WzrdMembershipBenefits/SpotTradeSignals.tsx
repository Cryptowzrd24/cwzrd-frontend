import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SpotTradeSingals from '../../../../../public/images/home/wzrd_membership_benefits/spot_trade_signals_img.svg';

const SpotTradeSignals = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(/images/home/wzrd_membership_benefits/spot_trade_signal_bg.svg)',
        backgroundSize: 'cover',
        height: '423px',
        position: 'relative',
        padding: '28px',
        boxSizing: 'border-box',
        // width: { xs: '95%', sm: '270px' },
        width: '96%',
        margin: '0 auto',
        overflow: 'hidden',
        borderRadius: '24px',
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '700',
          color: 'white',
          marginBottom: '4px',
        }}
      >
        Spot Trade Signals
      </Typography>
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.6',
          color: 'white',
        }}
      >
        Get real-time spot trade signals delivered directly to you, helping you
        capitalize on quick opportunities in the fast-moving markets.
      </Typography>
      <Image
        src={SpotTradeSingals}
        height={200}
        width={250}
        alt="spot trading signals"
        style={{
          position: 'absolute',
          right: '0px',
          bottom: '15px',
        }}
      />
    </Box>
  );
};

export default SpotTradeSignals;
