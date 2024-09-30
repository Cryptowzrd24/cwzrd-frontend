import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import bannerGraph from '../../../../../public/images/technicals-page/techBannerGraph.png';
import bannerBg from '../../../../../public/images/technicals-page/techBannerBgImg.jpeg';
import bannerBgBrown from '../../../../../public/images/technicals-page/techBannerImgBrown.png';
import bannerBgSkyBlue from '../../../../../public/images/technicals-page/techBannerImgSkyBlue.png';
import bannerBgGreen from '../../../../../public/images/technicals-page/techBannerImgGreen.png';
import bannerBgPurple from '../../../../../public/images/technicals-page/techBannerImgPurple.png';
import bannerBgBronze from '../../../../../public/images/technicals-page/techBannerImgBrown.png';

import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';

type BgColor = 'purple' | 'brown' | 'blue' | 'green' | 'bronze';
interface TechnicalsBannerProps {
  bgColor: BgColor;
  coinName: string;
  coinImg: any;
}

function TechnicalsBanner({
  bgColor,
  coinName,
  coinImg,
}: TechnicalsBannerProps) {
  const background =
    bgColor === 'blue'
      ? bannerBgSkyBlue
      : bgColor === 'green'
        ? bannerBgGreen
        : bgColor === 'brown'
          ? bannerBgBrown
          : bgColor === 'purple'
            ? bannerBgPurple
            : bgColor === 'bronze'
              ? bannerBgBronze
              : bannerBg;

  return (
    <Box
      sx={{
        height: '84px',
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '135px',
          height: '44px',
        }}
      >
        <Box
          sx={{
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '254px',
          }}
        >
          <Box
            sx={{
              width: '44px',
              height: '44px',
              background: 'rgba(255, 255, 255, 1)',
              boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={coinImg} alt="analysis card" width={32} height={32} />
          </Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              fontFamily: 'Sf Pro Display',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '23.4px',
              whiteSpace: 'nowrap',
            }}
          >
            {coinName} Live Analysis
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '15.6px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              Price
            </Typography>
            <Typography
              sx={{
                marginTop: '2px',
                fontSize: '16px',
                lineHeight: '20.8px',
                fontWeight: 600,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              $123,710.68
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '15.6px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              1h%
            </Typography>
            <Typography
              sx={{
                marginTop: '2px',
                fontSize: '16px',
                lineHeight: '20.8px',
                fontWeight: 500,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(76, 254, 182, 1)',
              }}
            >
              +7.37%
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '15.6px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              24h%
            </Typography>
            <Typography
              sx={{
                marginTop: '2px',
                fontSize: '16px',
                lineHeight: '20.8px',
                fontWeight: 500,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(245, 109, 109, 1)',
              }}
            >
              -7.37%
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '15.6px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              7d%
            </Typography>
            <Typography
              sx={{
                marginTop: '2px',
                fontSize: '16px',
                lineHeight: '20.8px',
                fontWeight: 500,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(76, 254, 182, 1)',
              }}
            >
              +7.37%
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '15.6px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              Market Cap
            </Typography>
            <Typography
              sx={{
                marginTop: '2px',
                fontSize: '16px',
                lineHeight: '20.8px',
                fontWeight: 600,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              $987,847,229.10
              <span
                style={{
                  marginLeft: '8px',
                  color: 'rgba(76, 254, 182, 1)',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Sf Pro Display',
                  lineHeight: '18.2px',
                }}
              >
                +7.37%
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginLeft: '42px' }}>
        <Image src={bannerGraph} alt="banner-graph" width={105} height={40} />
      </Box>
      <Box
        sx={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginRight: '22px',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '18.2px',
            fontFamily: 'Sf Pro Display',
          }}
          variant="body2"
          right={1}
        >
          Read More
        </Typography>
        <Box
          sx={{
            ml: '10px',
            mr: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ReadMoreIcon isGradient={true} />
        </Box>
      </Box>
    </Box>
  );
}

export default TechnicalsBanner;
