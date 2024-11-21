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
      backgroundImage: 'linear-gradient(180deg, #ffff 0%, #ffff 100%)',
      transition: { duration: 0.325 },
    },
    inactive: {
      backgroundImage: `url('/images/membership/riskManagement.png')`,
      transition: { duration: 0.325 },
    },
  };

  const textVariants = {
    active: { color: 'rgba(0, 0, 0, 1)', transition: { duration: 0.325 } },
    inactive: {
      color: 'rgba(255, 255, 255, 1)',
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

  const iconVariants = {
    hidden: { rotate: 0, filter: 'invert(0)' },
    visible: { rotate: 45, filter: 'invert(1)' },
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
    <motion.div
      style={{
        padding: '24px',
        width: '50%',
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
        variant="body1"
        component={motion.div}
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          textTransform: 'uppercase',
          mb: '30px',
          letterSpacing: '1px',
          lineHeight: '15.6px',
        }}
        variants={textVariants}
      >
        Risk management guidance
      </Typography>

      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
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
                mt: '85px',
                letterSpacing: 0.1,
                lineHeight: '26px',
                textAlign: 'start',
                marginLeft: '28px',
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
                width: '366px',
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
            right: '14px',
            bottom: '14px',
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
  );
};

export default Mentorship;
