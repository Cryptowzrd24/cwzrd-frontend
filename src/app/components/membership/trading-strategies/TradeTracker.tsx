'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const TradeTracker = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive((prev) => !prev);

  const backgroundVariants = {
    initial: {
      backgroundImage: `url('/images/membership/tradeTracker.png')`,
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
    },
    inactive: {
      backgroundImage: `url('/images/membership/tradeTracker.png')`,
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
        width: '67%',
        height: '353px',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <motion.div
        style={{
          borderRadius: '24px',
          width: '100%',
          height: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
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
            style={{ height: '100%' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'end', height: '100%' }}>
              <Typography
                sx={{
                  fontSize: '26px',
                  fontWeight: '700',
                  lineHeight: '29px',
                  color: 'rgba(255, 255, 255, 1)',
                  padding: '0 32px 32px 32px',
                  boxSizing: 'border-box',
                  maxWidth: '457px',
                }}
              >
                <span style={{ color: 'rgba(254,215,69,1)' }}>
                  Monitor and analyze{' '}
                </span>
                your trades with our{' '}
                <span style={{ color: 'rgba(254,215,69,1)' }}>
                  Trade Tracker
                </span>
                . Track your progress and make smarter decisions to refine your{' '}
                <span style={{ color: 'rgba(254,215,69,1)' }}>
                  trading strategies.{' '}
                </span>
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

export default TradeTracker;
