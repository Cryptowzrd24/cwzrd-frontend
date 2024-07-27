'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import iphone from '../../../../../public/images/platform/iPhone.png';
import ExportCard from './exportCard';
import PlusIconBlack from '../../../../../public/icons/collections/plusIconWhite';
import { motion } from 'framer-motion';

const PersonalCalendar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            padding: '77px 68px 0px 94px',
            background: 'rgba(255, 255, 255, 1)',
            borderRadius: '32px',
            maxWidth: '690px',
            width: '100%',
            height: '514px',
            boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Image src={iphone} alt="iphone" width={292} height={514} />
            <Stack>
              <motion.div
                key={active ? 'active' : 'inactive'} // Use a key to force remounting
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '48px',
                    fontWeight: '700',
                    lineHeight: '57.6px',
                    color: 'rgba(17, 17, 17, 1)',
                    maxWidth: '324px',
                    mb: '64px',
                  }}
                >
                  {active
                    ? 'Easily export your saved notes into account'
                    : 'Personal Calendar: Keep Track of Everything'}
                </Typography>
              </motion.div>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20.8px',
                  color: 'rgba(17, 17, 17, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Your Life, Your Schedule
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  position: 'absolute',
                  right: '24px',
                  bottom: '28px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    background: 'rgba(17, 17, 17, 1)',
                    borderRadius: '100px',
                    cursor: 'pointer',
                  }}
                  onClick={handleClick}
                >
                  <PlusIconBlack />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
        <ExportCard />
      </Box>
    </>
  );
};

export default PersonalCalendar;
