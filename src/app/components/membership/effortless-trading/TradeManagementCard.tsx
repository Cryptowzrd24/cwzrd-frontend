import React from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Notification from '../../../../../public/images/membership/tradeManagement.png';

const TradeManagementCard = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          pt: '24px',
          height: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '26px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '38px',
            px: '22px',
          }}
        >
          Trade <br />
          Management
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            objectFit: 'cover',
            marginBottom: '24px',
          }}
        >
          <Image src={Notification} alt="Notification" width={168} />
        </Box>
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            px: '22px',
          }}
        >
          Take control of your trades with expert trade management guidance.
          Learn when to enter, hold, or exit to maximize profitability and
          minimize risk.
        </Typography>
      </Box>
    </Box>
  );
};

export default TradeManagementCard;
