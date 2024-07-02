import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
const BannerSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          background: 'rgba(230, 230, 230, 1)',
          paddingLeft: '56px',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          maxWidth: '100%',
          height: '441px',
        }}
      >
        <Stack>
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
          />
          <Box sx={{ maxWidth: '100%' }}>
            <Skeleton
              variant="rectangular"
              width={611}
              height={24}
              sx={{ borderRadius: '16px', mb: '7px', maxWidth: '100%' }}
            />
          </Box>
          <Skeleton
            variant="rectangular"
            width={317}
            height={24}
            sx={{ borderRadius: '16px', mb: '34px' }}
          />
          <Skeleton
            variant="rectangular"
            width={185}
            height={56}
            sx={{ borderRadius: '48px' }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default BannerSkeleton;
