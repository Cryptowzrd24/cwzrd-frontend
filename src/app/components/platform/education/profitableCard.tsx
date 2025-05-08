'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';
import { motion } from 'framer-motion';

const ProfitableCard = () => {
  const isTabView = useMediaQuery('(min-width: 1024px)');
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
          // padding: '42px 30px 53.25px 30px',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: isTabView ? '307.5px' : '100%',
          height: '310.5px',
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
          width={135}
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
              fontSize: '30px !important',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 1)',
              textAlign: 'center',
              lineHeight: '33px',
              marginTop: '24px',
              marginBottom: '22px',
              fontFamily: 'Sf Pro Display',

              '@media (max-width: 576px)': {
                paddingInline: '20px',
              },
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
                paddingInline: '30px',
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
            right: '10px',
            bottom: '10px',
            transform: active ? 'rotate(45deg)' : '',
            transition: '0.3s ease-in-out',
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
    </>
  );
};

export default ProfitableCard;
