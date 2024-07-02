import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';
const TechnicalCardSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          padding: '40px 32px 32px 32px',
          borderRadius: '24px',
          background: 'rgba(230, 230, 230, 1)',
        }}
      >
        <Stack>
          <Skeleton
            variant="rectangular"
            width={146}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px' }}
          />
          <Skeleton
            variant="rectangular"
            width={330}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px' }}
          />
          <Skeleton
            variant="rectangular"
            width={256}
            height={20}
            sx={{ borderRadius: '16px', mb: '8px' }}
          />
          <Skeleton
            variant="rectangular"
            width={300}
            height={20}
            sx={{ borderRadius: '16px', mb: '30px' }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              mb: '40px',
            }}
          >
            <Skeleton
              variant="rectangular"
              width={102}
              height={40}
              sx={{ borderRadius: '48px' }}
            />
            <Skeleton
              variant="rectangular"
              width={102}
              height={40}
              sx={{ borderRadius: '48px' }}
            />
          </Box>
          <Skeleton
            variant="rectangular"
            width={330}
            height={167}
            sx={{ borderRadius: '12px' }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default TechnicalCardSkeleton;
