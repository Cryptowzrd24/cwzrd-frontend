'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CollectionCard from './card';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';
import ArrowLeftDark from '../../../../../public/icons/collections/arrowLeftDark';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';
import { motion, AnimatePresence } from 'framer-motion';
import { getPopularNfts } from '@/app/services/collections';
import VerifiedBlack from '../../../../../public/icons/collections/verifiedBlack';

const CollectionBanner = () => {
  const [nfts, setNfts] = useState<any[]>([]); // Initialize as an empty array
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const fetchPopularNfts = async () => {
    const data = await getPopularNfts();
    const mappedNfts = await mapPopularNfts(data);
    setNfts(mappedNfts);
  };

  const mapPopularNfts = async (nfts: any) => {
    return nfts.map((nft: any, index: number) => ({
      id: nft.cryptoId.toString(),
      image1:
        index % 2 === 0
          ? '/images/collections/background3.png'
          : index % 2 != 0 && index % 3 != 0
            ? '/images/collections/background2.png'
            : '/images/collections/background1.png',
      image2: nft.logo,
      title: nft.name,
      subheading: nft.symbol,
      icon: <VerifiedBlack />,
      state1: 'Items',
      value1: `${nft.assets} Items`,
      state2: '24h Volume',
      value2: `${nft.oneDay.volume.toFixed(2)} ${nft.floorPriceToken}`,
      backgroundImage:
        index % 2 === 0
          ? '/images/collections/banner.png'
          : index % 2 != 0 && index % 3 != 0
            ? '/images/banner/banner2.png'
            : '/images/banner/banner1.png',
    }));
  };

  const handleNextClick = () => {
    if (currentCardIndex < nfts.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  useEffect(() => {
    fetchPopularNfts();
  }, []);

  const currentCard = nfts[currentCardIndex];

  return (
    <>
      {nfts.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard?.id}
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
              <CollectionCard cardDetails={nfts} id={currentCard?.id} />
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
              {/* Dots */}
              {nfts.length > 1 && (
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
                  {nfts.map((card, index) => (
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
              {/* Right Arrow */}
              {currentCardIndex < nfts.length - 1 && (
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
              {/* Left Arrow */}
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
      )}
    </>
  );
};

export default CollectionBanner;
