'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import exam from '../../../../../public/images/platform/exam.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const ExaminationCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const backgroundStyle = active
    ? {
        backgroundImage: `linear-gradient(116.74deg, #F77F21 -4.07%, #F77F21 100.68%)`,
      }
    : {
        backgroundImage: `linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)`,
      };

  return (
    <>
      <Box
        sx={{
          ...backgroundStyle,
          padding: '32px 56px 80px 32px',
          maxWidth: '23.5%',
          width: '100%',
          height: '358px',
          borderRadius: '32px',
          position: 'relative',
          transition:
            'background-color 0.5s ease-in-out, background-image 0.5s ease-in-out',
        }}
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
          }}
        >
          Examinations
        </Typography>
        <Box
          sx={{
            transition: 'padding-left 0.5s ease-in-out',
          }}
        >
          {!active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Image src={exam} alt="exam" width={100} height={100} />
            </motion.div>
          )}
          <motion.div
            key={active ? 'active' : 'inactive'}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {active && (
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '137px',
                  letterSpacing: 0.1,
                  lineHeight: '22px',
                  opacity: 0.8,
                  transition: 'opacity 0.5s ease-in-out', // Subtle opacity change
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
            )}
            {!active && (
              <Typography
                variant="h1"
                sx={{
                  fontSize: '40px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '37px',
                  letterSpacing: 0.1,
                  maxWidth: '298px',
                  lineHeight: '44px',
                }}
              >
                Featuring with 450 questions spread across 47 exams.
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
            bottom: '28px',
            transform: active ? 'rotate(45deg)' : '',
            transition: 'transform 0.5s ease-in-out',
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
      </Box>
    </>
  );
};

export default ExaminationCard;
