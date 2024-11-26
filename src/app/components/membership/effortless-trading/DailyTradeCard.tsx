import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const DailyTradeCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('/images/membership/dailyTradeBg.png')`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          px: '21px',
          pt: '29px',
          height: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '29px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '4px',
            '@media (max-width:660px)': {
              fontSize: '24px',
            },
          }}
        >
          Daily Trade <br />
          Signals
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          Receive expert daily trade signals, tailored to give you a competitive
          edge. Our alerts keep you informed and ready to act on market
          opportunities.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          transform: active ? 'rotate(45deg)' : '',
          transition: '0.3s ease-in-out',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            background: '#000000',
            borderRadius: '100px',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          <PlusIcon active />
        </Box>
      </Box>
    </Box>
  );
};

export default DailyTradeCard;
