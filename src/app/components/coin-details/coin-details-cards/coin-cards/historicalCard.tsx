'use client';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SmallDetails from '../../../../../../public/icons/coin-details/smallDetails';
import LikeBlueIcon from '../../../../../../public/icons/coin-details/likeBlue';
import DislikeBlueIcon from '../../../../../../public/icons/coin-details/dislikeBlue';

const HistoricalCardContent = () => (
  <Stack>
    <Typography
      variant="body1"
      sx={{
        fontSize: '12px',
        fontWeight: '700',
        color: 'rgba(17, 17, 17, 1)',
        mb: '12px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
      }}
    >
      🚀 BTC Historical Price
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '8px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        24h Range
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        $61,514.38 - $67,862.17
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '8px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        7d Range
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        $61,514.38 - $67,862.17
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '8px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          color: 'rgba(17, 17, 17, 1)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        All-Time High
        <SmallDetails />
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        $73,737.94{' '}
        <span style={{ color: 'rgba(245, 109, 109, 1)', marginLeft: '5px' }}>
          -7.37%
        </span>
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: '16px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          color: 'rgba(17, 17, 17, 1)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        All-Time High
        <SmallDetails />
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '14px',
          fontWeight: '500',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        $47.81{' '}
        <span style={{ color: 'rgba(1, 200, 119, 1)', marginLeft: '4px' }}>
          +2381.1%
        </span>
      </Typography>
    </Box>
    <Box
      sx={{
        padding: '6px 10px',
        background: 'rgba(114, 72, 247, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '8px',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 1)',
          fontSize: '10px',
          fontWeight: '700',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          maxWidth: '120px',
          lineHeight: '13px',
        }}
      >
        How do you feel about BTC today?
      </Typography>
      <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px 8px 10px',
            borderRadius: '100px',
            background: 'rgba(255, 255, 255, 1)',
            cursor: 'pointer',
          }}
        >
          <LikeBlueIcon />
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(114, 72, 247, 1)',
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            43
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px 8px 10px',
            borderRadius: '100px',
            background: 'rgba(114, 72, 247, 1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
          }}
        >
          <DislikeBlueIcon />
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '18.2px',
            }}
          >
            9
          </Typography>
        </Box>
      </Box>
    </Box>
  </Stack>
);

const HistoricalCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          top: '-2px',
          left: '86%',
          display: 'flex',
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <Box
      sx={{
        padding: '20px 12px 12px 12px',
        backgroundImage: "url('/images/nft/trending.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '306px',
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        borderRadius: '16px',
        position: 'relative',
      }}
    >
      <style jsx global>{`
        .slick-dots li {
          position: relative;
          display: inline-block;
          width: 2px;
          height: 6px;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
        }

        .slick-dots li button:before {
          font-family: 'slick';
          font-size: 8px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          content: '•';
          text-align: center;
          opacity: 0.25;
          color: black;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      <Slider {...settings}>
        <Box sx={{ paddingRight: '10px' }}>
          <HistoricalCardContent />
        </Box>
        <Box sx={{ paddingRight: '10px' }}>
          <HistoricalCardContent />
        </Box>
        <Box sx={{ paddingRight: '10px' }}>
          <HistoricalCardContent />
        </Box>
      </Slider>
    </Box>
  );
};

export default HistoricalCard;
