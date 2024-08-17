'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const MotionBox = motion(Box); // Create a motion-enabled Box component

const MileStones = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  return (
    <>
      <MotionBox
        sx={{
          padding: '32px 48px 48px 32px',
          width: '100%',
          height: '390px',
          borderRadius: '32px',
          position: 'relative',
          flex: 1,
          transition: 'background 0.1s ease-in-out, transform 0.5s ease-in-out', // Ensure smooth background transition
          background: active
            ? 'rgb(113, 77, 195)'
            : "url('/images/platform/milestone.png') no-repeat center/cover", // Background shorthand for seamless transition
        }}
        onClick={handleClick}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '32px',
            letterSpacing: '1px',
            transition: 'color 0.5s ease-in-out', // Smooth color transition
          }}
        >
          Milestones
        </Typography>
        <motion.div
          key={active ? 'active' : 'inactive'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth text transition
          style={{
            paddingLeft: active ? '0' : '32px',
            transition: 'padding-left 0.5s ease-in-out', // Smooth padding transition
          }}
        >
          {active ? (
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '145px',
                letterSpacing: 0.1,
                lineHeight: '22px',
                transition: 'color 0.5s ease-in-out', // Smooth color transition
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Typography>
          ) : (
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '32px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
                transition: 'color 0.5s ease-in-out', // Smooth color transition
              }}
            >
              The Smallest trading community
            </Typography>
          )}
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '24px',
            transform: active ? 'rotate(45deg)' : '',
            transition: 'transform 0.3s ease-in-out', // Smooth rotation transition
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
              transition: 'background 0.5s ease-in-out', // Smooth background color transition
            }}
            onClick={handleClick}
          >
            <PlusIcon active={false} />
          </Box>
        </Box>
      </MotionBox>
    </>
  );
};

export default MileStones;
