'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CollectionCard from './card';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { getPopularNfts } from '@/app/services/collections';
import VerifiedBlack from '../../../../../public/icons/collections/verifiedBlack';
import { useRouter } from 'next/navigation';

const CollectionBanner = () => {
  const [nfts, setNfts] = useState<any[]>([]); // Initialize as an empty array
  const router = useRouter();

  const fetchPopularNfts = async () => {
    const data = await getPopularNfts();
    const mappedNfts = await mapPopularNfts(data);
    setNfts(mappedNfts);
  };

  const mapPopularNfts = async (nfts: any) => {
    return nfts.map((nft: any) => ({
      id: nft.cryptoId.toString(),
      image1: '/images/collections/background1.png',
      image2: nft.logo,
      title: nft.name,
      subheading: nft.symbol,
      icon: <VerifiedBlack />,
      state1: 'Items',
      value1: `${nft.assets} Items`,
      state2: '24h Volume',
      value2: `${nft.oneDay.volume.toFixed(2)} ${nft.floorPriceToken}`,
      backgroundImage: '/images/banner/bannerBlur1.png',
      alias: nft.platformAlias,
      contractAddress: nft.contractAddress,
    }));
  };

  useEffect(() => {
    fetchPopularNfts();
  }, []);

  return (
    <>
      {nfts.length > 0 && (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000, // Set delay between slides (in ms)
            disableOnInteraction: false, // Autoplay even if the user interacts with the slide
          }}
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay to modules
        >
          {nfts.map((nft, index) => (
            <SwiperSlide key={nft.id}>
              <Box
                sx={{
                  backgroundImage: `url(${nft.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  padding: { xs: '30px 60px', md: '52px 48px 52px 100px' },
                  display: 'flex',
                  gap: '10px',
                  flexDirection: {
                    xs: 'column',
                    lg: 'row',
                  },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'start', lg: 'end' },
                  position: 'relative',
                  borderRadius: '24px',
                }}
              >
                <CollectionCard cardDetails={nfts} id={index} />
                <Stack>
                  <div
                    style={{
                      padding: '12px 20px 12px 24px',
                      borderRadius: '56px',
                      background: 'rgba(255, 255, 255, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      zIndex: 9999,
                    }}
                    onClick={() =>
                      router.push(
                        `/market/nft-details/${nfts[index].contractAddress}/${nfts[index].alias}`,
                      )
                    }
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: '700', fontSize: '16px' }}
                    >
                      View Collection
                    </Typography>
                    <ArrowRightBlack />
                  </div>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}

          {/* Swiper Navigation Buttons */}
          <Box className="swiper-button-next" sx={{ color: '#000' }}></Box>
          <Box className="swiper-button-prev" sx={{ color: '#000' }}></Box>
        </Swiper>
      )}
    </>
  );
};

export default CollectionBanner;
