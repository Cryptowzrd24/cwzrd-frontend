'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import trade from '../../../../../public/images/platform/trade-header.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const TradeManagement = () => {
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
          backgroundImage: `url('/images/platform/trade.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '32px 48px 48px 32px',
          width: '100%',
          height: '390px',
          borderRadius: '32px',
          flex: 1,
          position: 'relative',
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
          Complete Trade management
        </Typography>
        <Box sx={{ paddingLeft: '32px' }}>
          <Image src={trade} alt="trade" width={80} height={80} />
          <motion.div
            key={active ? 'active' : 'inactive'}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
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
                Hello world <br />
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

export default TradeManagement;
