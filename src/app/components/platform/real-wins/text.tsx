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
            fontSize: '56px',
            fontWeight: '600',
            lineHeight: '61.1px',
            mb: '8px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          Real Wins from Our Community
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            color: 'rgba(17, 17, 17, 0.8)',
            maxWidth: '464px',
          }}
        >
          See real wins and success stories from traders who have used our
          platform to achieve their financial goals.
        </Typography>
        <Box sx={{ mt: '56px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(114, 72, 247, 1)',
              lineHeight: '23.4px',
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
