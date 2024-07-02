import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
const HeroSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '15px',
        }}
      >
        <Box>
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px' }}
          />
        </Box>
        <Box>
          <Skeleton
            variant="rectangular"
            width={220}
            height={24}
            sx={{ borderRadius: '16px' }}
          />
        </Box>
      </Box>
      <Box>
        <Skeleton
          variant="rectangular"
          width={1033}
          height={38}
          sx={{ borderRadius: '100px', mb: '15px' }}
        />
      </Box>
      <Box>
        <Skeleton
          variant="rectangular"
          width={635}
          height={38}
          sx={{ borderRadius: '100px', mb: '70px' }}
        />
      </Box>
      <Box>
        <Skeleton
          variant="rectangular"
          width={635}
          height={20}
          sx={{ borderRadius: '16px', mb: '8px' }}
        />
      </Box>
      <Box>
        <Skeleton
          variant="rectangular"
          width={390}
          height={20}
          sx={{ borderRadius: '16px' }}
        />
      </Box>
    </>
  );
};

export default HeroSkeleton;
