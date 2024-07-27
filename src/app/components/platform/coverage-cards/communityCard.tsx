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
          padding: '32px',
          width: '347px',
          height: '407px',
          borderRadius: '32px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}
      >
        <Box>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
                fontWeight: '500',
                mb: '8px',
              }}
            >
              Open community chat
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: -0.5,
                // maxWidth: '298px',
                fontWeight: '400',
                lineHeight: '27px',
                textAlign: 'justify',
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
