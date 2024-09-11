import { Box, Typography } from '@mui/material';
import React from 'react';
import LikeIcon from '../../../../public/icons/airdrops-main/likeIcon';
import Dislike from '../../../../public/icons/airdrops-main/dislike';

const HeroCard = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 24px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '16px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 0.6)',
                mb: '4px',
              }}
            >
              Potential Reward:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '600',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
                letterSpacing: '-0.5px',
              }}
            >
              Airdrop
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 0.6)',
                mb: '4px',
              }}
            >
              Status:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '600',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
                letterSpacing: '-0.5px',
              }}
            >
              Confirmed
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 0.6)',
                mb: '4px',
              }}
            >
              Reward Drop:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '600',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
                letterSpacing: '-0.5px',
              }}
            >
              ~ Q2
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Box
              sx={{
                mt: '4px',
                cursor: 'pointer',
              }}
            >
              <LikeIcon />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: '13px', fontWeight: '600' }}
            >
              880
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                mt: '8px',
                cursor: 'pointer',
              }}
            >
              <Dislike />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: '13px', fontWeight: '600' }}
            >
              3
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroCard;
