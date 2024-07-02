import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
const NewsLetterSkeleton = () => {
  return (
    <>
      <Box>
        <Stack>
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack>
              <Skeleton
                variant="rectangular"
                width={611}
                height={24}
                sx={{ borderRadius: '16px', mb: '7px', maxWidth: '100%' }}
              />
              <Skeleton
                variant="rectangular"
                width={317}
                height={24}
                sx={{ borderRadius: '16px', mb: '7px' }}
              />
            </Stack>
            <Stack>
              <Skeleton
                variant="rectangular"
                width={611}
                height={24}
                sx={{ borderRadius: '16px', mb: '7px', maxWidth: '100%' }}
              />
              <Skeleton
                variant="rectangular"
                width={317}
                height={24}
                sx={{ borderRadius: '16px', mb: '7px' }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default NewsLetterSkeleton;
