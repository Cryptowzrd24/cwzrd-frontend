import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box, Container, Grid } from '@mui/material';
import NavbarSkeleton from './navbar';
import HeroSkeleton from './hero';
import CardSkeleton from './cards';
import HeaderSkeleton from './header';
import BannerSkeleton from './banner';
import NewsLetterSkeleton from './newsLetter';
import NewsLetterCardsSkeleton from './newsLetterCards';
import LiveExplorerSkeleton from './liveExplorer';
import TechnicalCardSkeleton from './technicalCards';
import FooterSkeleton from './footer';
import TickerSkeleton from './ticker';

export default function SkeletonComponent() {
  return (
    <>
      <TickerSkeleton />

      {/* --------------------------------------------------------------------- */}

      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mb: '80px' }}>
          <NavbarSkeleton />
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box sx={{ mb: '60px' }}>
          <HeroSkeleton />
        </Box>

        {/* ------------------------------------------------------------------------- */}

        <Box
          sx={{
            mb: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box sx={{ mb: '80px' }}>
          <HeaderSkeleton />
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box sx={{ mb: '120px' }}>
          <BannerSkeleton />
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box sx={{ mb: '80px' }}>
          <NewsLetterSkeleton />
        </Box>

        {/* -------------------------------------------------------------------- */}

        <Box>
          <Grid
            container
            spacing={4}
            sx={{
              mb: '48px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Grid item xs={12} md={9} sx={{ mt: '12px' }}>
              <NewsLetterCardsSkeleton />
              <NewsLetterCardsSkeleton />
              <NewsLetterCardsSkeleton />
              <NewsLetterCardsSkeleton />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <LiveExplorerSkeleton />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Skeleton
            variant="rectangular"
            width={185}
            height={56}
            sx={{ borderRadius: '48px' }}
          />
        </Box>

        {/* ----------------------------------------------------------------------------------- */}

        <Box sx={{ mb: '40px', mt: '150px' }}>
          <NewsLetterSkeleton />
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box
          sx={{
            mb: '48px',
            mt: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
          }}
        >
          <TechnicalCardSkeleton />
          <TechnicalCardSkeleton />
          <TechnicalCardSkeleton />
          <TechnicalCardSkeleton />
        </Box>

        {/* ----------------------------------------------------------------------------- */}

        <Box
          sx={{
            mb: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Skeleton
            variant="rectangular"
            width={70}
            height={20}
            sx={{ borderRadius: '16px' }}
          />
          <Skeleton
            variant="rectangular"
            width={185}
            height={56}
            sx={{ borderRadius: '48px' }}
          />
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Skeleton variant="circular" width={48} height={48} />
            <Skeleton variant="circular" width={48} height={48} />
          </Box>
        </Box>

        {/* ---------------------------------------------------------------------------- */}

        <Box sx={{ mb: '104px' }}>
          <BannerSkeleton />
        </Box>

        {/* ---------------------------------------------------------------------------- */}
      </Container>
      <Box sx={{ mb: '104px' }}>
        <FooterSkeleton />
      </Box>
    </>
  );
}
