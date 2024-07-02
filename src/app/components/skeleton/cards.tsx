
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const CardSkeleton = () => {
  return (
    <Box
      sx={{
        padding: '32px 78px 32px 32px',
        borderRadius: '24px',
        background: 'rgba(230, 230, 230, 1)',
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
          width={205}
          height={20}
          sx={{ borderRadius: '16px', mb: '8px' }}
        />
        <Skeleton
          variant="rectangular"
          width={126}
          height={20}
          sx={{ borderRadius: '16px', mb: '8px' }}
        />
        <Skeleton
          variant="rectangular"
          width={205}
          height={20}
          sx={{ borderRadius: '16px', mb: '8px' }}
        />
        <Skeleton
          variant="rectangular"
          width={126}
          height={20}
          sx={{ borderRadius: '16px', mb: '8px' }}
        />
        <Skeleton
          variant="rectangular"
          width={205}
          height={20}
          sx={{ borderRadius: '16px', mb: '8px' }}
        />
      </Stack>
    </Box>
  );
};

export default CardSkeleton;
