import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';
const HeaderSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          background: 'rgba(230, 230, 230, 1)',
          padding: '40px 26px',
          borderRadius: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />{' '}
          <Skeleton
            variant="rectangular"
            width={100}
            height={20}
            sx={{ borderRadius: '16px' }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeaderSkeleton;
