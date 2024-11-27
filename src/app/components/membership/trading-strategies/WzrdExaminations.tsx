'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const WzrdExaminations = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: `linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))`,
    },
    active: {
      backgroundImage: `linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))`,
    },
    inactive: {
      backgroundImage: `linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))`,
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
    <Box
      sx={{
        width: '33%',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '352px',
          overflow: 'hidden',
          borderRadius: '24px',
          position: 'relative',
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          component={motion.div}
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '6px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            padding: '24px 0 0 26px',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          Wzrd examination
        </Typography>
        <Box
          sx={{
            paddingInline: '26px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Typography
              sx={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 1)',
                maxWidth: '235px',
                lineHeight: '20px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                '@media (max-width:660px)': {
                  fontSize: '24px',
                  lineHeight: '28px',
                },
              }}
            >
              Test your knowledge with WZRD Examinations.
            </Typography>
          </motion.div>

          <motion.img
            src={'/images/membership/iPhone.png'}
            alt="dollar sign"
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              maxWidth: '206px',
              marginTop: 'auto',
              height: '100%',
              objectFit: 'contain',
              fill: '#F9C53A',
              filter:
                'drop-shadow(0px 19.141px 80.706px rgba(255, 208, 88, 0.24))',
            }}
          />
          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
              style={{
                width: '100%',
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
                  mt: '24px',
                }}
              >
                Lorem ipsum dolor sit
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.8)',
                  mt: '33px',
                  lineHeight: '24px',
                  textAlign: 'start',
                  '@media (max-width:855px)': {
                    fontSize: '14px',
                    lineHeight: '20px',
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </motion.div>
          )}
        </Box>
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
      </motion.div>
    </Box>
  );
};

export default WzrdExaminations;
