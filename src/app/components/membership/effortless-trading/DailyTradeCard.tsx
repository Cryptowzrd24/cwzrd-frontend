import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const DailyTradeCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <Box
      component={motion.div}
      animate={{
        background: active
          ? `url('/images/membership/dailyTrade.png')`
          : `url('/images/membership/dailyTradeBg.png')`,
        backgroundSize: 'cover',
      }}
      transition={{ duration: 0.325 }}
      sx={{
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          px: '21px',
          pt: '29px',
          display: active ? 'none' : 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          height: '100%',
        }}
        component={motion.div}
        animate={{
          opacity: active ? 0 : 1,
        }}
        transition={{ duration: 0.325 }}
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
          Access daily trade signals from elite analysts to seize opportunities
          confidently and achieve trading success.
        </Typography>
      </Box>

      <Box
        sx={{
          display: active ? 'flex' : 'none',
          flexDirection: 'column',
          height: '100%',
          px: '21px',
        }}
        component={motion.div}
        animate={{
          opacity: active ? 1 : 0,
        }}
        transition={{ duration: 0.325, delay: 0.625 }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '21px',
            mt: '21px',
          }}
        >
          Daily Trade Signals
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '21px',
            mt: '85px',
          }}
        >
          Designed with precision and simplicity, these signals are your
          blueprint for consistent profits, taking the guesswork out of trading
          and replacing it with pure confidence. Whether you’re just starting or
          already a pro, our cutting-edge insights keep you ahead of the
          competition in the ever-evolving market. With our expert guidance,
          building a profitable portfolio isn’t just possible - it’s
          unstoppable.
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
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            background: '#FFFFFF',
            borderRadius: '100px',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          <PlusIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default DailyTradeCard;
