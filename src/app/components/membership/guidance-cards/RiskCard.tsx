'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Verified from '../../../../../public/images/membership/verified.svg';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const Mentorship = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive((show) => !show);

  const backgroundVariants = {
    active: {
      backgroundImage: `url('/images/membership/riskManagement.png')`,
      transition: { duration: 0.325 },
    },
    inactive: {
      backgroundImage: `url('/images/membership/riskManagement.png')`,
      transition: { duration: 0.325 },
    },
  };

  const imgAndTextVariants = {
    active: {
      opacity: 0,
      transition: { duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: { opacity: 1, display: 'block', transition: { duration: 0.325 } },
  };

  const loremVariants = {
    hidden: { opacity: 0, y: 20, transitionEnd: { display: 'none' } },
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
        width: '50%',
        height: '353px',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <motion.div
        style={{
          padding: '24px 0',
          width: '100%',
          height: '100%',
          borderRadius: '24px',
          boxSizing: 'border-box',
          position: 'relative',
          transition: 'all 0.325s linear',
          backgroundSize: 'cover',
          boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        }}
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          component={motion.div}
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            textTransform: 'uppercase',
            mb: '30px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            px: '24px',
            color: 'rgba(255, 255, 255, 1)',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          Risk management guidance
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
              style={{
                padding: '0 24px',
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
                  mt: '71px',
                  lineHeight: '24px',
                  textAlign: 'start',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </motion.div>
          )}

          <motion.div
            variants={imgAndTextVariants}
            animate={active ? 'active' : 'inactive'}
            style={{ height: '100%' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  borderRadius: '24px',
                  py: '22px',
                  px: '28px',
                  mb: '30px',
                  backgroundImage:
                    'linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))',
                  '@media (max-width:660px)': {
                    mb: '24px',
                  },
                }}
              >
                <Image src={Verified} alt="verified icon" />
              </Box>
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '26px',
                  color: 'rgba(255, 255, 255, 1)',
                  textAlign: 'center',
                  maxWidth: '366px',
                  px: '24px',
                  '@media (max-width:660px)': {
                    fontSize: '24px',
                    px: '16px',
                  },
                }}
              >
                Learn to protect your investments and trade confidently with
                proven risk management techniques.
              </Typography>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              position: 'absolute',
              right: '13px',
              bottom: '13px',
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

export default Mentorship;
