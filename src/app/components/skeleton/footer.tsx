import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';
const FooterSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          background: 'rgba(230, 230, 230, 1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '396px',
          width: '100%',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            background: 'rgba(230, 230, 230, 1)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box>
              <Stack>
                <Skeleton
                  variant="rectangular"
                  width={70}
                  height={20}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />
                <Skeleton
                  variant="rectangular"
                  width={518}
                  height={24}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />{' '}
                <Skeleton
                  variant="rectangular"
                  width={317}
                  height={24}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Skeleton
                  variant="rectangular"
                  width={569}
                  height={20}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />
                <Skeleton
                  variant="rectangular"
                  width={411}
                  height={20}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />{' '}
                <Skeleton
                  variant="rectangular"
                  width={569}
                  height={20}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />{' '}
                <Skeleton
                  variant="rectangular"
                  width={411}
                  height={20}
                  sx={{ borderRadius: '16px', mb: '7px', width: '100%' }}
                />
              </Stack>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            marginTop: '120px',
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
          }}
        >
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
        </Box>
      </Box>
    </>
  );
};

export default FooterSkeleton;
