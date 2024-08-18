'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';
import { motion } from 'framer-motion';

const ProfitableCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: { backgroundColor: 'rgba(153, 23, 255, 1)' },
    active: {
      backgroundColor: '#6b0db3',
    },
    inactive: {
      backgroundColor: 'rgba(153, 23, 255, 1)',
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
      y: 0,
      transition: { delay: 0.625, duration: 0.325 },
      display: 'block',
    },
  };

  return (
    <>
      <motion.div
        style={{
          padding: '48px 40px 71px 40px',
          borderRadius: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: '380px',
          height: '228px',
          position: 'relative',
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <motion.img
          src={'/images/platform/vector.png'}
          alt="vector"
          width={160}
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
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 1)',
              textAlign: 'center',
              lineHeight: '44px',
              marginTop: '24px',
            }}
          >
            Profitable Opportunities
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
                textAlign: 'start',
                lineHeight: '22px',
                marginTop: '24px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book <br />
            </Typography>
          </motion.div>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            transform: active ? 'rotate(45deg)' : '',
            transition: '0.3s ease-in-out',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
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
    </>
  );
};

export default ProfitableCard;
