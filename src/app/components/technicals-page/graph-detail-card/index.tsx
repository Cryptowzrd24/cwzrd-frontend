import { Box, Typography } from '@mui/material';
import React from 'react';
import CommentsLikes from '../comments-likes';
import GraphCard from '../../../../../public/images/graph-image.png';
import litecoinImg from '../../../../../public/images/coin-details/lite-coin.png';
import Image from 'next/image';

interface GraphDetailsCardProps {
  image?: any;
  isInverted?: boolean;
  isFxPage?: boolean;
  dualImg?: any;
}

const GraphDetailsCard = ({
  image,
  isInverted,
  isFxPage,
  dualImg,
}: GraphDetailsCardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isInverted ? 'row-reverse' : '',
        width: '960px',
        height: '330px',
        background:
          'radial-gradient(83.94% 66.65% at 16.06% 44.55%, rgba(255, 255, 255, 1) 55.91%, rgba(217, 223, 255, 0.9) 100%)',
        borderRadius: '16px',
        boxShadow: '0 0 28px 0 rgba(0, 0, 0, 0.08)',

        '@media (max-width: 1400px)': {
          width: 'auto',
        },

        '@media (max-width: 768px)': {
          height: 'auto',
          flexDirection: 'column-reverse',
        },
      }}
    >
      <Box
        sx={{
          padding: '76px 32px 76px 32px',
          maxWidth: '370px',
          '@media (max-width: 768px)': {
            padding: '16px',
          },
        }}
      >
        <Typography
          sx={{
            width: '90%',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '23.4px',
            wordSpacing: '1px',
          }}
        >
          The EURJPY takes advantage of the support line stability
        </Typography>
        <Typography
          sx={{
            maxWidth: '370px',
            marginTop: '8px',
            fontSize: '12px !important',
            fontWeight: '400',
            lineHeight: '17.4px',
            wordSpacing: '0.4px',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
          }}
        >
          Users can mint new tokens using the company's new Alloy platform,
          which will be part of Tether's upcoming tokenization venture, CEO
          Paolo Ardoino said. CoinDesk Flash gives you the power of news that
          moves markets — be the first to get the latest crypto financial
          opportunities, trends, and technology insights.{' '}
        </Typography>
        <Box sx={{ mt: '16px' }}>
          <CommentsLikes />
        </Box>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          height: '297px',
          width: '750px',
          borderRadius: '12px',
          margin: '16px',

          '@media (max-width: 1400px)': {
            width: '100%',
          },

          '@media (max-width: 768px)': {
            width: 'auto',
          },
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex' }}>
          <Box
            sx={
              isInverted
                ? {
                    position: 'absolute',
                    left: -2,
                    top: -1,
                    zIndex: 23,
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    position: 'absolute',
                    right: 25,
                    top: 6,
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
            }
          >
            <Image
              src={image ? image : litecoinImg.src}
              alt="coin-image"
              width={32}
              height={32}
            />
          </Box>
          {isFxPage && (
            <Box
              sx={
                isInverted
                  ? {
                      position: 'absolute',
                      left: 29,
                      zIndex: 23,
                      width: '44px',
                      height: '44px',
                      background: 'rgba(255, 255, 255, 1)',
                      boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : {
                      position: 'absolute',
                      right: 55,
                      // right: 25,
                      top: 6,
                      width: '44px',
                      height: '44px',
                      background: 'rgba(255, 255, 255, 1)',
                      boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
              }
            >
              <Image
                src={dualImg ? dualImg : litecoinImg.src}
                alt="coin-image"
                width={32}
                height={32}
              />
            </Box>
          )}
        </Box>
        <img
          src={GraphCard.src}
          alt="card"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </Box>
    </Box>
  );
};

export default GraphDetailsCard;
