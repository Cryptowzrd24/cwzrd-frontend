import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';
const NavbarSkeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Skeleton
          variant="rectangular"
          width={158}
          height={48}
          sx={{ borderRadius: '48px' }}
        />
      </Box>

      {/* -------------------------------------------------------------------------------- */}

      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />{' '}
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />{' '}
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />{' '}
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />{' '}
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />{' '}
        <Skeleton
          variant="rectangular"
          width={70}
          height={20}
          sx={{ borderRadius: '16px' }}
        />
      </Box>

      {/* ------------------------------------------------------------------------------------------------- */}

      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Skeleton
          variant="rectangular"
          width={80}
          height={48}
          sx={{ borderRadius: '48px' }}
        />
        <Skeleton
          variant="circular"
          width={48}
          height={48}
          sx={{ borderRadius: '48px' }}
        />
        <Skeleton
          variant="circular"
          width={48}
          height={48}
          sx={{ borderRadius: '48px' }}
        />
      </Box>
    </Box>
  );
};

export default NavbarSkeleton;
