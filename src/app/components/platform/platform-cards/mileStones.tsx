'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const MileStones = () => {
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
          backgroundImage: `url('/images/platform/milestone.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '32px 48px 48px 32px',
          width: '100%',
          height: '390px',
          borderRadius: '32px',
          position: 'relative',
          flex: 1,
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
          Milestones
        </Typography>
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
                color: 'rgba(255, 255, 255, 1)',
                mt: '32px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
              }}
            >
              Trading community
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

export default MileStones;
