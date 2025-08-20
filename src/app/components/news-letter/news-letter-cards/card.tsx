import Image from 'next/image';
import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

interface CardProps {
  img1: string;
  img2: string;
  title1: string;
  title2: string;
  title3: string;
  heading: string;
  description: string;
  date: string;
  author: string;
  isMainPage?: boolean;
  isNewsDetail?: boolean;
}

const Card: React.FC<CardProps> = ({
  img2,
  heading,
  description,
  date,
  author,
  isMainPage,
  isNewsDetail,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        gap: '12px',
        padding: isMainPage || isNewsDetail ? '' : '8px 24px 8px 8px',
        borderRadius: '16px',
        backgroundColor: '#fff',
        boxShadow:
          isMainPage || isNewsDetail ? '' : '0px 4px 28px 0px rgba(0,0,0,0.05)',

        '@media (max-width: 978px)': {
          // width: '100%',
        },

        '@media (max-width: 576px)': {
          padding: '8px',
          width: 'auto',
        },
      }}
    >
      <Box
        height={isMainPage ? 161 : isNewsDetail ? 90 : 106}
        // sx={{ width: '100px' }}
      >
        <Image
          src={img2}
          alt="main picture"
          width={isMainPage ? 158 : isNewsDetail ? 86 : 120}
          height={isMainPage ? 161 : isNewsDetail ? 90 : 80}
          className="rounded-lg card-image"
          style={{
            borderRadius: isMainPage || isNewsDetail ? '12px' : '12px',
            objectFit: isMainPage || isNewsDetail ? 'cover' : 'none',
            width: '100%',
          }}
        />
      </Box>
      <Stack
        sx={{
          position: 'relative',
          zIndex: '1000',
          width: '100%',
          justifyContent: isMainPage ? 'space-between' : '',
        }}
      >
        {!isNewsDetail && (
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              marginBlock: '8px 6px',
            }}
          >
            {['TRADE', 'BITCOIN', 'CRYPTO'].map((title) => (
              <Box
                sx={{
                  minWidth: 52,
                  height: 17,
                  background:
                    'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%)',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    background:
                      'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '10px !important',
                    fontWeight: '500',
                    lineHeight: '13px',
                    letterSpacing: '1px',
                    paddingInline: '8px',
                  }}
                >
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        <Box
          sx={{
            ...((isMainPage || isNewsDetail) &&
              description && { mb: '6px', marginLeft: '6px' }),
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: description && '8px',
              // width: '90%',
              '@media (max-width: 576px)': {
                width: '100%',
                fontSize: '13px !important',
              },
            }}
          >
            {heading}
          </Typography>
          {(isMainPage || isNewsDetail) && description && (
            <Typography
              sx={{
                overflow: 'hidden',
                color: 'rgba(17, 17, 17, 0.80)',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '150%',
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            background:
              isMainPage || isNewsDetail ? 'transparent' : '#1111110D',
            padding: isMainPage || isNewsDetail ? '6px 0px' : '6px 12px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
            {date} | {author}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Card;
