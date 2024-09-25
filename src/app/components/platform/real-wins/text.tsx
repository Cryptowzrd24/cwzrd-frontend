import { Box, Typography } from '@mui/material';
import React from 'react';
import RightBlue from '../../../../../public/icons/collections/rightBlue';

const Text = () => {
  return (
    <>
      <Box sx={{ maxWidth: '460px', width: '100%' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '32px',
            fontWeight: '600',
            lineHeight: '35.2px',
            mb: '8px',
            color: 'rgba(17, 17, 17, 1)',
            textWrap: 'balance',
          }}
        >
          Real Wins from Our Community
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            color: 'rgba(17, 17, 17, 0.8)',
            width: '342px',
          }}
        >
          See real wins and success stories from traders who have used our
          platform to achieve their financial goals.
        </Typography>
        <Box sx={{ mt: '42px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13.5px',
              fontWeight: '500',
              color: 'rgba(114, 72, 247, 1)',
              lineHeight: '17.55px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '4px',
            }}
          >
            View Our Community Success
            <RightBlue />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Text;
