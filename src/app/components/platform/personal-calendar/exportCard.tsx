'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import exam from '../../../../../public/images/platform/export.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const ExportCard = () => {
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
            ? 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)'
            : '',
          padding: '32px 56px 32px 32px',
          maxWidth: '23.5%',
          borderRadius: '32px',
          position: 'relative',
          height: '528px',
          width: '100%',
          background: active ? '#7248F7 ' : '',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '24px',
            letterSpacing: '1px',
          }}
        >
          Easy to export notes
        </Typography>
        <Box sx={{ paddingLeft: !active ? '24px' : '0' }}>
          {!active && (
            <Image src={exam} alt="export" width={100} height={100} />
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
                  mt: '184px',
                  letterSpacing: 0.1,
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
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '74px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
              }}
            >
              {active
                ? ''
                : 'Easily export your saved notes into a downloadable PDF'}
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

export default ExportCard;
