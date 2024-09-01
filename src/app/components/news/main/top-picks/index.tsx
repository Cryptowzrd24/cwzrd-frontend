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
        overflow: 'hidden',
        paddingInline: '20px',
        paddingTop: '20px',
        paddingBottom: showAll ? '' : '14px',
        boxShadow: '2px 4px 28px 0px #0000000D',
        marginBottom: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '15px',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '15px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: 'black',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20.8px',
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
      <Divider sx={{ width: '100%', marginTop: '-13px' }} />
      <Box sx={{ marginBlock: '15px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // height: '120px',
          }}
        >
          <Typography
            sx={{
              width: '178px',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '23.4px',
            }}
          >
            Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip
          </Typography>
          <Image
            src={rect1.src}
            alt={'image'}
            height={showAll ? 80 : 100}
            width={showAll ? 70 : 90}
            style={{
              borderRadius: '8px',
              marginLeft: '10px',
            }}
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '11px',
            lineHeight: '14.3px',
            marginTop: '10px',
          }}
        >
          06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
        </Typography>
      </Box>
      <Divider sx={{ width: '100%', marginTop: '10px' }} />

      <Box sx={{ marginBlock: '15px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // height: '120px',
          }}
        >
          <Typography
            sx={{
              width: '178px',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '23.4px',
            }}
          >
            VanEck's Spot<br></br> Bitcoin ETF Goes<br></br> Live on Australia's
            Biggest Stock
          </Typography>
          <Image
            src={rect2.src}
            alt={'image'}
            height={showAll ? 80 : 100}
            width={showAll ? 70 : 90}
            style={{
              borderRadius: '8px',
              marginLeft: '10px',
            }}
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '11px',
            lineHeight: '14.3px',
            marginTop: '10px',
          }}
        >
          06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
        </Typography>
      </Box>
      <Divider sx={{ width: '100%', marginTop: '10px' }} />
      {showAll && (
        <>
          <Box sx={{ marginBlock: '15px', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // height: '120px',
              }}
            >
              <Typography
                sx={{
                  width: '178px',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '23.4px',
                }}
              >
                Dogecoin Long Liquidations Surge Past $60 Million Amid Market
                Dip
              </Typography>
              <Image
                src={rect1.src}
                alt={'image'}
                height={showAll ? 80 : 100}
                width={showAll ? 70 : 90}
                style={{
                  borderRadius: '8px',
                  marginLeft: '10px',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '11px',
                lineHeight: '14.3px',
                marginTop: '10px',
              }}
            >
              06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
            </Typography>
          </Box>
          <Divider sx={{ width: '100%', marginTop: '10px' }} />

          <Box sx={{ marginBlock: '15px', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // height: '120px',
              }}
            >
              <Typography
                sx={{
                  width: '178px',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '23.4px',
                }}
              >
                VanEck's Spot<br></br> Bitcoin ETF Goes<br></br> Live on
                Australia's Biggest Stock
              </Typography>
              <Image
                src={rect2.src}
                alt={'image'}
                height={showAll ? 80 : 100}
                width={showAll ? 70 : 90}
                style={{
                  borderRadius: '8px',
                  marginLeft: '10px',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '11px',
                lineHeight: '14.3px',
                marginTop: '10px',
              }}
            >
              06/06/2023 at 00:06 AM &nbsp; | &nbsp; John Smith
            </Typography>
          </Box>
          {/* <Divider sx={{ width: '100%', marginTop: '10px' }} /> */}
        </>
      )}
    </Box>
  );
}

export default TopPicks;
