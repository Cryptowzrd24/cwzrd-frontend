'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CollectionCard from './card';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';
import ArrowLeftDark from '../../../../../public/icons/collections/arrowLeftDark';
import { cardDetails } from './data';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';
import { motion, AnimatePresence } from 'framer-motion';

const CollectionBanner = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    if (currentCardIndex < cardDetails.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };
  const currentCard = cardDetails[currentCardIndex];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.2,
          }}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              backgroundImage: `url(${currentCard.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              padding: '52px 48px 52px  100px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              position: 'relative',
              borderRadius: '24px',
            }}
          >
            <CollectionCard id={currentCard.id} />
            <Stack>
              <Box
                sx={{
                  padding: '12px 20px 12px 24px',
                  borderRadius: '56px',
                  background: 'rgba(255, 255, 255, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: '700', fontSize: '16px' }}
                >
                  View Collection
                </Typography>
                <ArrowRightBlack />
              </Box>
            </Stack>
            {/* ------------------- */}
            {cardDetails.length > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '10%',
                  right: '4px',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '12px',
                }}
              >
                {cardDetails.map((card, index) => (
                  <Box
                    key={card.id}
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor:
                        index === currentCardIndex ? '#fff' : 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                    }}
                    onClick={() => setCurrentCardIndex(index)}
                  />
                ))}
              </Box>
            )}
            {/* --------------------- */}
            {currentCardIndex < cardDetails.length - 1 && (
              <Box
                sx={{
                  padding: '12px',
                  borderRadius: '56px',
                  background: 'rgba(255, 255, 255, 1)',
                  position: 'absolute',
                  top: '50%',
                  right: '32px',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={handleNextClick}
              >
                <ArrowRightDark />
              </Box>
            )}
            {currentCardIndex > 0 && (
              <Box
                sx={{
                  padding: '12px',
                  borderRadius: '56px',
                  background: 'rgba(255, 255, 255, 1)',
                  position: 'absolute',
                  top: '50%',
                  left: '32px',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={handlePrevClick}
              >
                <ArrowLeftDark />
              </Box>
            )}
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CollectionBanner;
