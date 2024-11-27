'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const AirdropCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: `url('/images/membership/airdropBg.png')`,
    },
    active: {
      backgroundImage: `url('/images/membership/airdropBg.png')`,
    },
    inactive: {
      backgroundImage: `url('/images/membership/airdropBg.png')`,
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
          backgroundSize: 'cover',
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
            mb: '18px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            padding: '24px 0 0 24px',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          Airdrop calls
        </Typography>
        <Box
          sx={{
            padding: '0 24px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <motion.img
            src={'/images/membership/coin.png'}
            alt="dollar sign"
            width={180}
            height={115}
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              fill: '#F9C53A',
              filter:
                'drop-shadow(0px 19.141px 80.706px rgba(255, 208, 88, 0.24))',
            }}
          />

          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Typography
              sx={{
                fontSize: '26px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '32px',
                letterSpacing: 0.1,
                maxWidth: '388px',
                lineHeight: '28px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                '@media (max-width:855px)': {
                  fontSize: '20px',
                  lineHeight: '22px',
                  mt: '60px',
                },
              }}
            >
              Don't miss out on free opportunities. Stay informed on the latest
              airdrop calls and discover how to earn from them.
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
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '24px',
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
                  mt: '105px',
                  lineHeight: '24px',
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

export default AirdropCard;
