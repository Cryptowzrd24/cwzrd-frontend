import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
const CommunityCard = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/open-community.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '307.5px',
          height: '352.5px',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Box>
          <Stack
            sx={{
              widht: '259.5px',
              paddingInline: '24px',
              paddingTop: '232.47px',
              paddingBottom: '24.03px',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '18.2px',
                fontWeight: '500',
                fontFamily: 'Sf Pro Display',
                mb: '6px',
              }}
            >
              Open community chat
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '400',
                lineHeight: '18px',
                opacity: '0.8',
              }}
            >
              Every trade recommendation is managed on your behalf. You can sit
              back and relax knowing that our experts are handling all the
              details to maximize your profits.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default CommunityCard;
