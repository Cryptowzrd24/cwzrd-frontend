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
          padding: '24px 40px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 7px 29px 0px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
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
                fontSize: '16px',
                fontWeight: '600',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              Airdrop
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
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
                fontSize: '16px',
                fontWeight: '600',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              Confirmed
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '2px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '16px',
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
                fontSize: '16px',
                fontWeight: '600',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
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
            gap:"32px"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <LikeIcon />
            <Typography
              variant="body1"
              sx={{ fontSize: '16px', fontWeight: '600',mt:"6px" }}
            >
              880
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Dislike />
            <Typography
              variant="body1"
              sx={{ fontSize: '16px', fontWeight: '600',mb:"4px" }}
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
