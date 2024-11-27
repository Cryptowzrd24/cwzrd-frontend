import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const PrivateCommunityCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <Box
      component={motion.div}
      animate={{
        background: active
          ? 'linear-gradient(180deg, #6CE1BC 0%, #00A1AC 100%), #FFF'
          : `url('/images/membership/privateCommunityBg.png')`,
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
          pb: '32px',
          display: active ? 'none' : 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
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
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '4px',
            '@media (max-width:660px)': {
              fontSize: '16px',
            },
          }}
        >
          Private Community
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
          Join a thriving community of ambitious, like-minded individuals who
          are committed to mastering the world of cryptocurrency and achieving
          unparalleled financial success.
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
          Private Community
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '20px',
            mt: '85px',
          }}
        >
          Surround yourself with driven peers, share insights, and grow together
          as you unlock the strategies and skills needed to dominate the crypto
          market and secure your financial future. Our expert guidance and
          winning strategies make it easy to stay on track. Take the first step
          toward steady profits and a brighter future today.
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

export default PrivateCommunityCard;
