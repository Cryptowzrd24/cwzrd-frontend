'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const ExaminationCard = () => {
  const isTabView = useMediaQuery('(min-width: 978px)');
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
          // padding: '24px 42px 60px 24px',
          width: isTabView ? '307.5px' : '100%',
          height: '352.75px',
          borderRadius: '24px',
          position: 'relative',
          transition: 'all 0.325s linear',
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
            mb: '18px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            padding: '24px 0 0 24px',
            '@media (max-width: 576px)': {
              fontSize: '10px !important',
              padding: '16px 0 0 16px',
            }
          }}
        >
          Examinations
        </Typography>
        <Box
          sx={{
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: '60px',
          }}
        >
          <motion.img
            src={'/images/platform/exam.png'}
            alt="daily coverage"
            width={75}
            height={75}
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
                color: 'rgba(255, 255, 255, 1)',
                mt: '27px',
                letterSpacing: 0.1,
                width: '223.5px',
                lineHeight: '33px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                paddingLeft: '18px',
                '@media (max-width: 576px)': {
                  fontSize: '24px !important',
                  // width: '100%',
                  fontWeight : '600',
                }
              }}
            >
              Featuring with 450 questions spread across 47 exams.
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
                  mt: '82px',
                  letterSpacing: 0.1,
                  lineHeight: '20px',
                  textAlign: 'start',
                  marginLeft: '-34px',
                  paddingLeft: '24px',
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
    </>
  );
};

export default ExaminationCard;
