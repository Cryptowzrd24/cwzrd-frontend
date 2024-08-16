'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import trade from '../../../../../public/images/platform/trade-header.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const MotionBox = motion(Box); // Create a motion-enabled Box component

const TradeManagement = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const backgroundVariants = {
    active: {
      backgroundColor: '#ffffff',
      transition: { duration: 0.5 }, // Adjust the duration as needed
    },
    inactive: {
      backgroundColor: '#000000',
      transition: { duration: 0.5 }, // Adjust the duration as needed
    },
  };

  return (
    <>
      <MotionBox
        sx={{
          backgroundImage: !active ? `url('/images/platform/trade.png')` : '',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '32px 48px 48px 32px',
          width: '100%',
          height: '390px',
          borderRadius: '32px',
          flex: 1,
          position: 'relative',
          background: 'inherit',
        }}
        variants={backgroundVariants}
        animate={active ? 'active' : 'inactive'}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: !active ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
            textTransform: 'uppercase',
            mb: '32px',
            letterSpacing: '1px',
          }}
        >
          Complete Trade management
        </Typography>
        <Box sx={{ paddingLeft: !active ? '32px' : '0' }}>
          {!active && <Image src={trade} alt="trade" width={80} height={80} />}
          <motion.div
            key={active ? 'active' : 'inactive'}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            {active ? (
              <Typography
                sx={{
                  fontSize: '14px',
                  color: !active
                    ? 'rgba(255, 255, 255, 1)'
                    : 'rgba(0, 0, 0, 1)',
                  mt: '145px',
                  letterSpacing: 0.1,
                  lineHeight: '22px',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book <br />
              </Typography>
            ) : (
              <Typography
                variant="h1"
                sx={{
                  fontSize: '40px',
                  color: !active
                    ? 'rgba(255, 255, 255, 1)'
                    : 'rgba(0, 0, 0, 1)',
                  mt: '32px',
                  letterSpacing: 0.1,
                  maxWidth: '298px',
                  lineHeight: '44px',
                }}
              >
                Sit back as our experts handle trades, <br />
                <span
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  maximizing profits.
                </span>
              </Typography>
            )}
          </motion.div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '24px',
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
              background: !active ? '#FFFFFF' : '#000',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            <PlusIcon active={active} />
          </Box>
        </Box>
      </MotionBox>
    </>
  );
};

export default TradeManagement;
