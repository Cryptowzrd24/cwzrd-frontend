'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const DailyCoverageCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage:
        'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
    },
    active: {
      backgroundImage:
        'linear-gradient(116.74deg, #F77F21 -4.07%, #F77F21 100.68%)',
    },
    inactive: {
      backgroundImage:
        'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
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

  const iconVariants = {
    hidden: { opacity: 1, rotate: 0 },
    visible: { opacity: 1, rotate: 45 },
  };

  const loremVariants = {
    hidden: { opacity: 0, visibility: 'hidden', y: 20, display: 'none' },
    visible: {
      opacity: 1,
      visibility: 'visible',
      display: 'block',
      y: 0,
      transition: { delay: 0.975, duration: 0.325 },
    },
  };

  return (
    <>
      <motion.div
        style={{
          padding: '32px 56px 80px 32px',
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '32px',
          position: 'relative',
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '32px',
            letterSpacing: '1px',
          }}
        >
          Daily Coverage
        </Typography>
        <Box
          sx={{
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.img
            src={'/images/platform/daily-coverage.png'}
            alt="daily coverage"
            width={150}
            height={150}
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
                fontSize: '32px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '35px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '38.4px',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              'Daily Coverage on over 25 Cryptocurrencies'
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
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '125px',
                  letterSpacing: 0.1,
                  lineHeight: '22px',
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '28px',
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
              padding: '8px',
              background: '#FFFFFF',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
          >
            <PlusIcon />
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};

export default DailyCoverageCard;
