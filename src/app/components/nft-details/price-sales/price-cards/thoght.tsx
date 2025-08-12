import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import LikeWhiteIcon from '../../../../../../public/icons/coin-details/likeWhite';
import DislikeBlackIcon from '../../../../../../public/icons/coin-details/dislikeBlack';

const Thought = () => {
  return (
    <>
      <Box
        sx={{
          padding: '24px 24px 16px 24px',
          backgroundImage: "url('/images/nft/trending-2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          maxWidth: {xs:'100%', md:'330px', lg:'330px', xl:'330px'},
          width: '100%',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: '24px',
          boxSizing: 'border-box',
          // height: '222px',
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'rgba(17, 17, 17, 1)',
              letterSpacing: '1.5px',
              lineHeight: '18.2px',
            }}
          >
            ⭐️ YOUR THOUGHTS
          </Typography>
          <Typography
            sx={{
              marginTop: '16px',
              fontSize: '24px',
              fontWeight: 700,
              fontFamily: 'Sf Pro Display',
              lineHeight: '28.8px',
              width: '260px',
              letterSpacing: '1px',
            }}
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '24px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                lineHeight: '28.8px',
              }}
            >
              How do you feel
            </span>{' '}
            about Persona today?
          </Typography>
        </Stack>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            marginTop: '40px',
            marginBottom: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 12px 8px 10px',
              borderRadius: '100px',
              background: 'rgba(114, 72, 247, 1)',
              cursor: 'pointer',
            }}
          >
            <LikeWhiteIcon />
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 1)',
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
              gap: '4px',
              padding: '8px 12px 8px 10px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 1)',
              border: '1px solid rgba(17, 17, 17, 0.05)',
              cursor: 'pointer',
            }}
          >
            <DislikeBlackIcon />
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(17, 17, 17, 1)',
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
    </>
  );
};

export default Thought;
