import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';

const NewsLetterCardsSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          background: 'rgba(230, 230, 230, 1)',
          borderRadius: '24px',
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
          maxWidth: '100%',
          height: '176px',
          overflow: 'hidden',
          mb:"12px"
        }}
      >
        <Skeleton
          variant="rectangular"
          width={317}
          height={176}
          sx={{ borderRadius: '24px', width: '100%' }}
        />
        <Stack>
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px', width: '100%' }}
          />
          <Skeleton
            variant="rectangular"
            width={489}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px', width: '100%' }}
          />
          <Skeleton
            variant="rectangular"
            width={353}
            height={20}
            sx={{ borderRadius: '16px', width: '100%' }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default NewsLetterCardsSkeleton;
