import React from 'react';
import RightRed from '../../../../../../public/icons/News-Letter/rightRed';
import { Box, Divider, Typography } from '@mui/material';
import rect1 from '../../../../../../public/images/news-letter/rectangle1.png';
import rect2 from '../../../../../../public/images/news-letter/rectangle2.png';
import Image from 'next/image';

function TopPicks({ showAll }: any) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        paddingInline: '12px',
        paddingTop: showAll ? '16px' : '20px',
        paddingBottom: showAll ? '12px' : '14px',
        boxShadow: '2px 4px 28px 0px #0000000D',
        // marginBottom: '24px',
        width: '305px',
        height: '517px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          pb: '10px',
          justifyContent: 'space-between',
          width: '100%',
          // paddingBottom: '15px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '0.7px',
          }}
        >
          ⭐️ Picks for you
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
              fontWeight: '600',
              mb: '3px',
              letterSpacing: 'normal',
              fontSize: '14px',
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Box sx={{ marginTop: '11px', marginBottom: '13px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
              // height: '120px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '15px',
                lineHeight: '18.2px',
                width: '210px',
                letterSpacing: '0.2px',
              }}
            >
              Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '10px',
                lineHeight: '13px',
                marginTop: '12px',
                letterSpacing: '0.2px',
              }}
            >
              06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
            </Typography>
          </Box>
          <Image
            src={rect1.src}
            alt={'image'}
            height={showAll ? 80 : 100}
            width={showAll ? 73 : 90}
            style={{
              borderRadius: '8px',
              // marginLeft: '10px',
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ width: '100%' }} />

      <Box sx={{ marginTop: '14px', marginBottom: '15px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
              // height: '120px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '15px',
                lineHeight: '18.2px',
                width: '210px',
                letterSpacing: '0.2px',
              }}
            >
              VanEck's Spot Bitcoin of ETF Goes Live on Australia's Biggest
              Stock
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '10px',
                lineHeight: '13px',
                marginTop: '12px',
                letterSpacing: '0.2px',
              }}
            >
              06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
            </Typography>
          </Box>
          <Image
            src={rect2.src}
            alt={'image'}
            height={showAll ? 80 : 100}
            width={showAll ? 70 : 90}
            style={{
              borderRadius: '8px',
              // marginLeft: '10px',
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ width: '100%' }} />

      <Box sx={{ marginTop: '14px', marginBottom: '15px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
              // height: '120px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '15px',
                lineHeight: '18.2px',
                width: '210px',
                letterSpacing: '0.2px',
              }}
            >
              Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '10px',
                lineHeight: '13px',
                marginTop: '12px',
                letterSpacing: '0.2px',
              }}
            >
              06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
            </Typography>
          </Box>
          <Image
            src={rect1.src}
            alt={'image'}
            height={showAll ? 80 : 100}
            width={showAll ? 70 : 90}
            style={{
              borderRadius: '8px',
              // marginLeft: '10px',
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ width: '100%' }} />

      {showAll && (
        <>
          <Box sx={{ marginTop: '14px', marginBottom: '15px', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'space-between',
                  // height: '120px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '15px',
                    lineHeight: '18.2px',
                    width: '210px',
                    letterSpacing: '0.2px',
                  }}
                >
                  VanEck's Spot Bitcoin of ETF Goes Live on Australia's Biggest
                  Stock
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '10px',
                    lineHeight: '13px',
                    marginTop: '12px',
                    letterSpacing: '0.2px',
                  }}
                >
                  06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
                </Typography>
              </Box>
              <Image
                src={rect2.src}
                alt={'image'}
                height={showAll ? 80 : 100}
                width={showAll ? 70 : 90}
                style={{
                  borderRadius: '8px',
                  // marginLeft: '10px',
                }}
              />
            </Box>
          </Box>

          <Divider sx={{ width: '100%' }} />

          <Box sx={{ marginTop: '14px', marginBottom: '15px', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'space-between',
                  // height: '120px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '15px',
                    lineHeight: '19.2px',
                    width: '210px',
                    letterSpacing: '0.2px',
                  }}
                >
                  India financial watchdog and imposed $2.25 million penalty on
                  crypto
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '10px',
                    lineHeight: '13px',
                    marginTop: '12px',
                    letterSpacing: '0.2px',
                  }}
                >
                  06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
                </Typography>
              </Box>
              <Image
                src={rect1.src}
                alt={'image'}
                height={showAll ? 80 : 100}
                width={showAll ? 70 : 90}
                style={{
                  borderRadius: '8px',
                  // marginLeft: '10px',
                }}
              />
            </Box>
          </Box>

          <Divider sx={{ width: '100%' }} />
        </>
      )}
    </Box>
  );
}

export default TopPicks;
