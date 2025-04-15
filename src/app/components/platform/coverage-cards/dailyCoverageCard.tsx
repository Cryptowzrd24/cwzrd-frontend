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
      transition: { duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: {
      opacity: 1,
      display: 'block',
      transition: { duration: 0.325 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 1, rotate: 0 },
    visible: { opacity: 1, rotate: 45 },
  };

  const loremVariants: any = {
    hidden: { opacity: 0, visibility: 'hidden', y: 20, display: 'none' },
    visible: {
      opacity: 1,
      visibility: 'visible',
      display: 'block',
      y: 0,
      transition: { delay: 0.625, duration: 0.325 },
    },
  };

  return (
    <>
      <motion.div
        style={{
          // padding: '32px 56px 80px 32px',
          width: '307.5px',
          height: '354.25px',
          borderRadius: '24px',
          position: 'relative',
          transition: 'all 0.325s linear',
          flexGrow: 1,
          flexShrink: 0,
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '26.25px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            paddingLeft: '24px',
            paddingTop: '24px',
          }}
        >
          Daily Coverage
        </Typography>
        <Box
          sx={{
            widht: '243px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.img
            src={'/images/platform/daily-coverage.png'}
            alt="daily coverage"
            width={112.5}
            height={112.5}
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
              sx={{
                width: '226.5px',
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '26.25px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '28.8px',
                textAlign: 'center',
                fontWeight: '700',
                paddingInline: '40.5px',
                textWrap: 'balance',
              }}
            >
              Daily Coverage on over 25 Cryptocurrencies
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
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '70px',
                  letterSpacing: 0.1,
                  lineHeight: '20px',
                  textAlign: 'start',
                  marginLeft: '14px',

                  '@media (max-width: 576px)': {
                    mt: '50px',
                    mx: '14px',
                  },
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
            right: '7.5px',
            bottom: '9.03px',
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
      </motion.div>
    </>
  );
};

export default DailyCoverageCard;
