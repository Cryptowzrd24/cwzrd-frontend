import { Box, Typography } from '@mui/material';
import React from 'react';
import TradeManagementImg from '../../../../../public/images/home/wzrd_membership_benefits/trade_management.svg';
import Image from 'next/image';

const TradeManagement = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
        borderRadius: '24px',
        height: '423px',
        alignContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        width: { xs: '95%', sm: '270px' },
        margin: '0 auto',
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontWeight: '700',
          fontSize: '24px',
        }}
      >
        Trade <br /> Management
      </Typography>
      <Box>
        <Image
          src={TradeManagementImg}
          width={200}
          height={200}
          alt="trade management"
        />
      </Box>
      <Typography
        sx={{
          color: 'white',
        }}
      >
        Take control of your trades with expert trade management guidance. Learn
        when to enter, hold, or exit to maximize profitability and minimize
        risk.
      </Typography>
    </Box>
  );
};

export default TradeManagement;
