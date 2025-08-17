import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DailyTradeSignalImg from '../../../../../public/images/home/wzrd_membership_benefits/daily_trade_signals.svg';

const DailyTradeSignals = () => {
  return (
    <Box>
      <Box
        sx={{
          bgColor: 'red',
          backgroundImage:
            'url(/images/home/wzrd_membership_benefits/daily_trade_singal_bg.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '423px',
          position: 'relative',
          boxSizing: 'border-box',
          // width: { xs: '95%', sm: '270px' },
          width:'96%',
          margin: '0 auto',
          borderRadius: '24px',
          overflow:"hidden",
        }}
      >
        <Box
          sx={{
            padding: '20px',
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
            }}
          >
            Daily Trade <br /> Signal
          </Typography>
          <Typography
            sx={{
              color: 'white',
            }}
          >
            Receive expert daily trade signals, tailored to give you a
            competitive edge. Our alerts keep you informed and ready to act on
            market opportunities.
          </Typography>
        </Box>
        <Image
          src={DailyTradeSignalImg}
          width={200}
          height={200}
          alt="daily trade signal"
          style={{
            position: 'absolute',
            right: '0px',
            bottom: '-5px',
          }}
        />
      </Box>
    </Box>
  );
};

export default DailyTradeSignals;
