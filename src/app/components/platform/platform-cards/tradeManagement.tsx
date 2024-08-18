'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const TradeManagement = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: { backgroundColor: 'black' },
    active: {
      backgroundColor: '#ffffff',
    },
    inactive: {
      backgroundColor: 'black',
    },
  };

  const textVariants = {
    initial: { color: 'rgba(255, 255, 255, 1)' },
    active: {
      color: 'rgba(0, 0, 0, 1)',
      transition: { delay: 0.65, duration: 0.325 },
    },
    inactive: {
      color: 'rgba(255, 255, 255, 1)',
      transition: { delay: 0.65, duration: 0.325 },
    },
  };

  const imgAndTextVariants = {
    initial: { opacity: 1, display: 'block' },
    active: {
      opacity: 0,
      transition: { delay: 0.65, duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: {
      opacity: 1,
      display: 'block',
      transition: { delay: 0.65, duration: 0.325 },
    },
  };

  const loremVariants = {
    hidden: { opacity: 0, visibility: 'hidden', y: 20 },
    visible: {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      transition: { delay: 0.975, duration: 0.325 },
    },
  };

  return (
    <>
      <motion.div
        style={{
          padding: '32px 48px 48px 32px',
          width: '100%',
          height: '390px',
          borderRadius: '32px',
          flex: 1,
          position: 'relative',
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          variant="body1"
          component={motion.div}
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            textTransform: 'uppercase',
            mb: '32px',
            letterSpacing: '1px',
          }}
          variants={textVariants}
        >
          Complete Trade management
        </Typography>
        <Box
          sx={{
            paddingLeft: '32px',
          }}
        >
          <motion.img
            src={'/images/platform/trade-header.png'}
            alt="trade"
            width={80}
            height={80}
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          />
          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '32px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
              }}
            >
              Sit back as our experts handle trades, <br />
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                maximizing profits.
              </span>
            </Typography>
          </motion.div>
          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'rgba(0, 0, 0, 1)',
                  mt: '125px',
                  letterSpacing: 0.1,
                  lineHeight: '22px',
                  fontWeight: '400',
                  marginLeft: '-32px',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book <br />
              </Typography>
            </motion.div>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '24px',
            transition: 'all 0.5s ease-in-out',
            transform: active ? 'rotate(45deg)' : '',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              background: active ? '#000' : '#FFFFFF',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            <PlusIcon active={active} />
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default TradeManagement;
