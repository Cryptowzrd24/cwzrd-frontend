'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const RealTimeData = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive((prev) => !prev);

  const backgroundVariants = {
    initial: {
      backgroundImage: `url('/images/membership/realTime.png')`,
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
    },
    inactive: {
      backgroundImage: `url('/images/membership/realTime.png')`,
    },
  };

  const imgAndTextVariants = {
    initial: { opacity: 1, display: 'block' },
    active: {
      opacity: 0,
      transition: { duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: { opacity: 1, display: 'block', transition: { duration: 0.325 } },
  };

  const textVariants = {
    initial: { color: 'rgba(255, 255, 255, 1)' },
    active: { color: 'rgba(0, 0, 0, 1)', transition: { duration: 0.325 } },
    inactive: {
      color: 'rgba(255, 255, 255, 1)',
      transition: { duration: 0.325 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 1, rotate: 0, filter: 'invert(0)' },
    visible: { opacity: 1, rotate: 45, filter: 'invert(1)' },
  };

  const loremVariants = {
    hidden: { opacity: 0, y: 20, display: 'none' },
    visible: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: { delay: 0.625, duration: 0.325 },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}
    >
      <motion.div
        style={{
          borderRadius: '24px',
          width: '602px',
          height: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          position: 'relative',
          backgroundSize: 'cover',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          variant="body1"
          component={motion.div}
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            textTransform: 'uppercase',
            mt: '24px',
            mb: '24px',
            pl: '24px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
          }}
          variants={textVariants}
        >
          Daily technical outlooks
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 1)',
                  letterSpacing: 0.1,
                  lineHeight: '26px',
                  textAlign: 'start',
                  ml: '28px',
                  maxWidth: '690px',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </Typography>
            </motion.div>
          )}

          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '26px',
                  fontWeight: '700',
                  lineHeight: '29px',
                  color: 'rgba(255, 255, 255, 1)',
                  width: '277px',
                  pl: '24px',
                }}
              >
                Make timely, accurate trades with real-time market data. Stay
                connected to the pulse of the market and react instantly.
              </Typography>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              position: 'absolute',
              right: '16px',
              bottom: '16px',
            }}
          >
            <motion.div
              initial="hidden"
              animate={active ? 'visible' : 'hidden'}
              variants={iconVariants}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={handleClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                background: '#FFFFFF',
                borderRadius: '100px',
                cursor: 'pointer',
              }}
            >
              <PlusIcon />
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default RealTimeData;
