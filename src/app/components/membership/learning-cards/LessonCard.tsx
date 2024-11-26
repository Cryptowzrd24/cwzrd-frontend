'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const LessonCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: `linear-gradient(180deg, rgba(74, 132, 213, 1), rgba(89, 125, 255, 1))`,
    },
    active: {
      backgroundImage:
        'linear-gradient(116.74deg, #F77F21 -4.07%, #F77F21 100.68%)',
    },
    inactive: {
      backgroundImage: `linear-gradient(180deg, rgba(74, 132, 213, 1), rgba(89, 125, 255, 1))`,
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
        width: '50%',
        height: '380px',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '24px',
          position: 'relative',
          transition: 'all 0.325s linear',
          boxSizing: 'border-box',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 42px 32px',
            '@media (max-width:855px)': {
              padding: '0 16px 32px',
            },
          }}
        >
          <Box
            sx={{
              maxWidth: '392px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            <motion.img
              src={'/images/membership/lessonTrading.png'}
              alt="dollar sign"
              variants={imgAndTextVariants}
              initial="initial"
              animate={active ? 'active' : 'inactive'}
              style={{
                objectFit: 'contain',
                marginTop: '-5px',
                width: '100%',
              }}
            />
          </Box>

          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Typography
              sx={{
                fontSize: '26px',
                color: 'rgba(255, 255, 255, 1)',
                mb: '4px',
                lineHeight: '28px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                textAlign: 'center',
                '@media (max-width:660px)': {
                  mt: '4px',
                  fontSize: '26px',
                },
              }}
            >
              Expert Lessons on Trading
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 1)',
                fontWeight: '400',
                lineHeight: '21px',
                textAlign: 'center',
                fontFamily: 'Sf Pro Text',
                '@media (max-width:660px)': {
                  fontSize: '14px',
                },
              }}
            >
              Learn from the best with expert-led lessons on trading. Gain the
              knowledge you need to execute smart strategies and achieve
              long-term success.
            </Typography>
          </motion.div>

          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
              style={{ width: '100%' }}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '82px',
                  letterSpacing: 0.1,
                  lineHeight: '20px',
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

export default LessonCard;
