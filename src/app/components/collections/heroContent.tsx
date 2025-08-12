'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import CollectionCardWrapper from '@/app/components/common/collection-cards/collection-card-wrapper';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: '2px', letterSpacing: '1.5px', fontSize: 14 }}
      >
        MARKET CAP
      </Typography>
      <Typography
        variant="h1"
        sx={{
          maxWidth: '830px',
          width: '100%',
          '@media (max-width: 576px)': {
            fontSize: '24px !important',
            fontWeight: '700 !important',
            lineHeight: '120%',
            letterSpacing: '0.24px',
          },
        }}
      >
        Top NFT
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
          }}
        >
          Collections{' '}
        </span>{' '}
      </Typography>
      <Box
        sx={{
          fontSize: '15px',
          maxWidth: '600px',
          lineHeight: '24px',
          mt: '8px',
        }}
      >
        Listed below are the stats for NFT collections{' '}
        {isExpanded && (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            corrupti iure optio facilis voluptatum similique corporis doloribus
            laborum iusto, cupiditate eveniet dolore tempore eaque rerum
            delectus provident porro nisi? Similique.
          </span>
        )}
        <span
          style={{
            color: '#7248F7',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '500',
          }}
          onClick={handleToggle}
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </span>
      </Box>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'start',
              // height: { xs: '300px', lg: '300px' },
              height: 'auto',
              overflow: 'auto',
              overflowY: 'hidden',
              marginTop: '16px',
            }}
          >
            <CollectionCardWrapper
              headerName={'Market Cap'}
              tooltipName={'Market_cap'}
              type={'area'}
            />
            <CollectionCardWrapper
              headerName={'Sales Volume'}
              tooltipName={'volume'}
              type={'bar'}
            />
            <CollectionCardWrapper
              headerName={'Total Sales'}
              tooltipName={'sales'}
              type={'bar'}
            />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;
