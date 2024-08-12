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
        <Image src={vector} alt="vector" width={160} />
        <Box sx={{ mt: '24px' }}>
          <motion.div
            key={active ? 'active' : 'inactive'}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
            style={{ paddingLeft: '32px' }}
          >
            {active ? (
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
                Lorem ispum router
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
