'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const ProfitCard = () => {
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
      transition: { duration: 0.325 },
    },
    inactive: {
      color: 'rgba(255, 255, 255, 1)',
      transition: { duration: 0.325 },
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
    hidden: { opacity: 0, visibility: 'hidden', y: 20 },
    visible: {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      transition: { delay: 0.625, duration: 0.325 },
    },
  };

  return (
    <>
      <motion.div
        style={{
          padding: '24px',
          maxWidth: '473px',
          height: '100%',
          borderRadius: '24px',
          flex: 1,
          position: 'relative',
          transition: 'all 0.325s linear',
          boxSizing: 'border-box',
          boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        }}
        initial="initial"
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
            mb: '24px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
          }}
          variants={textVariants}
        >
          Take profit guidance
        </Typography>
        <Box
          sx={{
            paddingLeft: '26px',
          }}
        >
          <motion.img
            src={'/images/membership/profitGuidance.svg'}
            alt="trade"
            width={60}
            height={60}
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
                fontSize: '30px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '27.5px',
                letterSpacing: 0.1,
                maxWidth: '380px',
                lineHeight: '33px',
                fontWeight: 700,
              }}
            >
              Maximize your earnings with
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {' '}
                expert take profit strategies.{' '}
              </span>
              We help identify the
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {' '}
                perfect moments{' '}
              </span>
              to cash in on your trades.
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
            right: '14px',
            bottom: '14px',
            transition: 'all 0.5s ease-in-out',
            transform: active ? 'rotate(45deg)' : '',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
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

export default ProfitCard;
