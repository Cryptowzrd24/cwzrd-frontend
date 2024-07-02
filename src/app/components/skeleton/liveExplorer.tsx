import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
const LiveExplorerSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          background: 'rgba(230, 230, 230, 1)',
          padding: '40px 32px 27px 32px',
          borderRadius: '24px',
        }}
      >
        <Stack>
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px' }}
          />
          <Skeleton
            variant="rectangular"
            height={20}
            sx={{ borderRadius: '16px', mb: '22px', maxWidth: '266px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            height={176}
            sx={{ borderRadius: '24px', mb: '18px', maxWidth: '266px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            height={176}
            sx={{ borderRadius: '16px', mb: '22px', maxWidth: '266px' }}
          />
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px' }}
          />
          <Skeleton
            variant="rectangular"
            height={20}
            sx={{ borderRadius: '16px', mb: '32px', maxWidth: '266px' }}
          />
          <Skeleton
            variant="rectangular"
            height={131}
            sx={{ borderRadius: '24px', maxWidth: '266px' }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default LiveExplorerSkeleton;
