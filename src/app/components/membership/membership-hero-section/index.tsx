import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Crown from '../../../../../public/icons/membership/crown.svg';
import Signals from '../../../../../public/icons/membership/signals.svg';
import Clock from '../../../../../public/icons/membership/clock.svg';
import GraduationCap from '../../../../../public/icons/membership//graduation-cap.svg';
import Speedometer from '../../../../../public/icons/membership/speedometer.svg';
import AddToCartCard from './AddToCartCard';
import FeaturesSection from './FeaturesSection';
import FeatureHeaderCard from './FeatureHeaderCard';

const featuresHeader = [
  { imagePath: Signals, title: 'Profitable Signals' },
  { imagePath: GraduationCap, title: 'Learning Focused' },
  { imagePath: Speedometer, title: 'The WZRD Platform' },
  { imagePath: Clock, title: 'Lifetime Membership' },
];

const MembershipHeroSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            padding: '12px 24px',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            maxWidth: '400px',
            marginBottom: '32px',
            '@media (max-width:660px)': {
              display: 'none',
            },
          }}
        >
          <Image src={Crown} width={20} height={20} alt="Crown" />

          <Typography
            variant="h5"
            sx={{
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19.2px',
              backgroundImage:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Sf Pro Text',
            }}
          >
            Revolutioning Crypto Education
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '72px',
            fontWeight: '700',
            lineHeight: '72px',
            marginBottom: '32px',
            textAlign: 'center',
            letterSpacing: '1px',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(255, 255, 255, 1)',
            '@media (max-width:834px)': {
              fontSize: '56px',
            },
            '@media (max-width:660px)': {
              fontSize: '48px',
            },
          }}
        >
          Black friday
          <br />
          <span
            style={{
              color: 'rgba(255, 255, 65, 1)',
            }}
          >
            40 % discount
          </span>{' '}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '62px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {featuresHeader.map((feature, index) => (
            <FeatureHeaderCard
              key={index}
              imagePath={feature.imagePath}
              title={feature.title}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          background: 'rgba(31,31,31,1)',
          borderRadius: '24px',
          maxWidth: '855px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '8px',
            gap: '8px',
            '@media (max-width:786px)': {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <AddToCartCard />
          <FeaturesSection />
        </Box>
      </Box>
    </>
  );
};

export default MembershipHeroSection;
