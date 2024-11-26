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
      backgroundImage: `url('/images/membership/tradeTrackerBg.png')`,
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
              style={{
                height: '100%',
                padding: '24px',
                boxSizing: 'border-box',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: '21px',
                  textAlign: 'start',
                  maxWidth: '226px',
                }}
              >
                Lorem ipsum dolor sit
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.8)',
                  mt: '81px',
                  lineHeight: '24px',
                  textAlign: 'start',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
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
                  padding: '0 32px 32px',
                  boxSizing: 'border-box',
                  maxWidth: '457px',
                  '@media (max-width:660px)': {
                    fontSize: '20px',
                    lineHeight: '22px',
                    padding: '0 24px 32px',
                  },
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
              right: '14px',
              bottom: '15px',
              transform: active ? 'rotate(45deg)' : '',
              transition: 'transform 0.5s ease-in-out',
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
      </motion.div>
    </Box>
  );
};

export default TradeTracker;
