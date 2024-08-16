'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import vector from '../../../../../public/images/platform/vector.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';
import { motion } from 'framer-motion';

const ProfitableCard = () => {
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
      <Stack
        sx={{
          background: 'rgba(153, 23, 255, 1)',
          padding: '48px 40px 71px 30px',
          borderRadius: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '380px',
          height: '228px',
          position: 'relative',
        }}
      >
        {!active && <Image src={vector} alt="vector" width={160} />}
        <Box sx={{ mt: '24px' }}>
          <motion.div
            key={active ? 'active' : 'inactive'}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
            style={{ paddingLeft: !active ? '32px' : '0' }}
          >
            {active ? (
              <Typography
                // variant="h1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  textAlign: 'start',
                  lineHeight: '16px',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
            ) : (
              <Typography
                variant="h1"
                sx={{
                  fontSize: '40px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 1)',
                  textAlign: 'center',
                  lineHeight: '44px',
                }}
              >
                Profitable Opportunities
              </Typography>
            )}
          </motion.div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '20px',
            bottom: '20px',
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
      </Stack>
    </>
  );
};

export default ProfitableCard;
