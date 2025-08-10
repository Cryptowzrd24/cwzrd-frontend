// Previous code not responsive
{
  /*import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import bannerGraph from '../../../../../public/images/technicals-page/techBannerGraph.png';
import bannerBg from '../../../../../public/images/technicals-page/techBannerBgImg.jpeg';
import bannerBgBrown from '../../../../../public/images/technicals-page/techBannerImgBrown.png';
import bannerBgSkyBlue from '../../../../../public/images/technicals-page/techBannerImgSkyBlue.png';
import bannerBgGreen from '../../../../../public/images/technicals-page/techBannerImgGreen.png';
import bannerBgPurple from '../../../../../public/images/technicals-page/techBannerImgPurple.png';
import bannerBgBronze from '../../../../../public/images/technicals-page/techBannerImgBrown.png';

import usaIcon from '../../../../../public/images/technicals-page/usaIcon.png';
import ausIcon from '../../../../../public/images/technicals-page/ausIcon.png';

import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';

type BgColor = 'purple' | 'brown' | 'blue' | 'green' | 'bronze';
interface TechnicalsBannerProps {
  bgColor: BgColor;
  coinName: string;
  coinImg: any;
  isFxPage?: boolean;
}

function TechnicalsBanner({
  bgColor,
  coinName,
  coinImg,
  isFxPage,
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
          <Box sx={{ display: 'flex' }}>
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
              <Image
                src={isFxPage ? ausIcon : coinImg}
                alt="analysis card"
                width={32}
                height={32}
              />
            </Box>
            {isFxPage && (
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
                  position: 'relative',
                  left: '-10px',
                }}
              >
                <Image
                  src={isFxPage ? usaIcon : coinImg}
                  alt="analysis card"
                  width={32}
                  height={32}
                />
              </Box>
            )}
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

export default TechnicalsBanner;*/
}

// Responsive Technical Banner with Accordion for Mobile
import { Box, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import bannerGraph from '../../../../../public/images/technicals-page/techBannerGraph.png';
import bannerBg from '../../../../../public/images/technicals-page/techBannerBgImg.jpeg';
import bannerBgBrown from '../../../../../public/images/technicals-page/techBannerImgBrown.png';
import bannerBgSkyBlue from '../../../../../public/images/technicals-page/techBannerImgSkyBlue.png';
import bannerBgGreen from '../../../../../public/images/technicals-page/techBannerImgGreen.png';
import bannerBgPurple from '../../../../../public/images/technicals-page/techBannerImgPurple.png';
import bannerBgBronze from '../../../../../public/images/technicals-page/techBannerImgBrown.png';
import bannerBgBlack from '../../../../../public/images/technicals-page/techBannerImgBlack.png';

import usaIcon from '../../../../../public/images/technicals-page/usaIcon.png';
import ausIcon from '../../../../../public/images/technicals-page/ausIcon.png';

import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';

type BgColor = 'purple' | 'brown' | 'blue' | 'green' | 'bronze' | 'black';
interface TechnicalsBannerProps {
  bgColor: BgColor;
  coinName: string;
  coinImg: any;
  isFxPage?: boolean;
  width?: string;
  borderRadius?: string;
  isMainPage?:boolean
}

function TechnicalsBanner({
  bgColor,
  coinName,
  coinImg,
  isFxPage,
  width = 'auto',
  borderRadius,
  isMainPage
}: TechnicalsBannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
              : bgColor === 'black'
                ? bannerBgBlack
                : bannerBg;

  return (
    <Box
      sx={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: borderRadius || '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
        padding: '20px 16px',
        boxSizing:'border-box',
        '@media (max-width: 1120px)': {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          px: '32px',
        },

        '@media (max-width: 576px)': {
          flexDirection: 'column',
          px: '16px',
          position: 'relative',
          padding: '20px',
        },
      }}
    >
      {/* Desktop Layout */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          maxWidth: '254px',

          '@media (max-width: 576px)': {
            display: 'none',
          },
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              width: '44px',
              height: '44px',
              background: 'rgba(255, 255, 255, 1)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={isFxPage ? ausIcon : coinImg}
              alt="analysis card"
              width={32}
              height={32}
            />
          </Box>
          {isFxPage && (
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
                position: 'relative',
                left: '-10px',
              }}
            >
              <Image
                src={isFxPage ? usaIcon : coinImg}
                alt="analysis card"
                width={32}
                height={32}
              />
            </Box>
          )}
        </Box>
        <Typography
          sx={{
            fontSize: '18px !important',
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

      {/* Mobile Accordion Layout */}
      <Box
        sx={{
          display: 'none',
          width: '100%',

          '@media (max-width: 576px)': {
            display: 'block',
          },
        }}
      >
        {/* Row 1: Image, Title, and Accordion Button */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  width: '44px',
                  height: '44px',
                  background: 'rgba(255, 255, 255, 1)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={isFxPage ? ausIcon : coinImg}
                  alt="analysis card"
                  width={32}
                  height={32}
                />
              </Box>
              {isFxPage && (
                <Box
                  sx={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 1)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    left: '-10px',
                  }}
                >
                  <Image
                    src={isFxPage ? usaIcon : coinImg}
                    alt="analysis card"
                    width={32}
                    height={32}
                  />
                </Box>
              )}
            </Box>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
                lineHeight: '20.8px',
              }}
            >
              {coinName} Live Analysis
            </Typography>
          </Box>
          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              padding: '4px',
            }}
          >
            {isExpanded ? (
              <KeyboardArrowUpIcon sx={{ fontSize: '26px' }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: '26px' }} />
            )}
          </IconButton>
        </Box>

        {/* Row 2: Price and 1h% (Always visible) */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Box sx={{ flex: 1, textAlign: 'left' }}>
            <Typography
              sx={{
                fontSize: '10px',
                lineHeight: '13px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
                marginBottom: '6px',
              }}
            >
              Price
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '18.2px',
                fontWeight: 600,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
                marginBottom: '4px',
              }}
            >
              $123,710.68
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center', marginLeft: '20px' }}>
            <Typography
              sx={{
                fontSize: '10px',
                lineHeight: '13px',
                fontWeight: 400,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(255, 255, 255, 1)',
                marginBottom: '6px',
              }}
            >
              1h%
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '18.2px',
                fontWeight: 500,
                fontFamily: 'Sf Pro Display',
                color: 'rgba(76, 254, 182, 1)',
                marginTop: '2px',
              }}
            >
              +7.37%
            </Typography>
          </Box>
        </Box>

        {/* Expanded Content */}
        {isExpanded && (
          <>
            {/* Row 3: 24h% and 7d% */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography
                  sx={{
                    fontSize: '10px',
                    lineHeight: '13px',
                    fontWeight: 400,
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(255, 255, 255, 1)',
                    marginBottom: '6px',
                  }}
                >
                  24h%
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: '18.2px',
                    fontWeight: 500,
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(245, 109, 109, 1)',
                    marginTop: '2px',
                  }}
                >
                  -7.37%
                </Typography>
              </Box>
              <Box sx={{ flex: 1, textAlign: 'center', marginLeft: '20px' }}>
                <Typography
                  sx={{
                    fontSize: '10px',
                    lineHeight: '13px',
                    fontWeight: 400,
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(255, 255, 255, 1)',
                    marginBottom: '6px',
                  }}
                >
                  7d%
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: '18.2px',
                    fontWeight: 500,
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(76, 254, 182, 1)',
                    marginTop: '2px',
                  }}
                >
                  +7.37%
                </Typography>
              </Box>
            </Box>

            {/* Row 4: Market Cap and Graph */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography
                  sx={{
                    fontSize: '10px',
                    lineHeight: '13px',
                    fontWeight: 400,
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(255, 255, 255, 1)',
                    marginBottom: '6px',
                  }}
                >
                  Market Cap
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    lineHeight: '18.2px',
                    fontWeight: 600,
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(255, 255, 255, 1)',
                    marginTop: '2px',
                  }}
                >
                  $987,847,229.10
                  <span
                    style={{
                      marginLeft: '8px',
                      color: 'rgba(76, 254, 182, 1)',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'Sf Pro Display',
                      lineHeight: '15.6px',
                    }}
                  >
                    +7.37%
                  </span>
                </Typography>
              </Box>
              <Box sx={{ flex: 0, textAlign: 'right' }}>
                <Image
                  src={bannerGraph}
                  alt="banner-graph"
                  width={120}
                  height={45}
                />
              </Box>
            </Box>

            {/* Row 5: Read More */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '12px',
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 1)',
                  fontWeight: '600',
                  fontSize: '12px',
                  lineHeight: '15.6px',
                  fontFamily: 'Sf Pro Display',
                }}
              >
                Read More
              </Typography>
              <Box
                sx={{
                  ml: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ReadMoreIcon isGradient={true} />
              </Box>
            </Box>
          </>
        )}
      </Box>

      {/* Desktop Stats */}
      <Box
        sx={{
          display: 'flex',
          gap: isMainPage?'26px':'146px',
          '@media (max-width:1230px)': { gap: '32px' },
          '@media (max-width: 786px)': {
            flexDirection: 'column',
            gap: '16px',
          },
          '@media (max-width: 576px)': {
            display: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '32px',
            '@media (max-width: 576px)': {
              flexDirection: 'column',
              gap: '16px',
            },
          }}
        >
          <Box sx={{ display: 'flex', gap: '32px' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: '12px !important',
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
                  fontSize: '12px !important',
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
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '32px',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '12px !important',
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
                  fontSize: '12px !important',
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
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            '@media (max-width: 375px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '12px !important',
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
                  fontSize: '14px !important',
                  fontWeight: 600,
                  fontFamily: 'Sf Pro Display',
                  lineHeight: '18.2px',
                }}
              >
                +7.37%
              </span>
            </Typography>
          </Box>
          <Box>
            <Image
              src={bannerGraph}
              alt="banner-graph"
              width={105}
              height={40}
            />
          </Box>
        </Box>
      </Box>

      {/* Desktop Read More */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',

          '@media (max-width: 576px)': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '600',
            fontSize: '14px !important',
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
