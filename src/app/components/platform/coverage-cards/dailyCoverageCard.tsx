'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import exam from '../../../../../public/images/platform/daily-coverage.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const DailyCoverageCard = () => {
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
          backgroundImage: !active
            ? `url('/images/platform/examination.png')`
            : '',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '32px 56px 80px 32px',
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '32px',
          position: 'relative',
          background: active ? '#F77F21' : '',
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
          Daily Coverage
        </Typography>
        <Box
          sx={{
            paddingLeft: !active ? '24px' : '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!active && (
            <Image src={exam} alt="daily coverage" width={150} height={150} />
          )}
          <motion.div
            key={active ? 'active' : 'inactive'} // Use a key to force remounting
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            {active && (
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '115px',
                  letterSpacing: 0.1,
                  // maxWidth: '298px',
                  lineHeight: '22px',
                  textAlign: 'start',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
            )}
            <Typography
              variant="h1"
              sx={{
                fontSize: '32px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '35px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '38.4px',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              {active ? '' : 'Daily Coverage on over 25 Cryptocurrencies'}
            </Typography>
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
      </Box>
    </>
  );
};

export default DailyCoverageCard;
