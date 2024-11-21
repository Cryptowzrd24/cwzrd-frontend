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
            border: '1px solid rgba(99, 77, 253, 0.39)',
            maxWidth: '400px',
            background: 'rgba(255, 255, 255, 0.1)',
            marginBottom: '32px',
          }}
        >
          <Image src={Crown} width={20} height={20} alt="Crown" />

          <Typography
            variant="h5"
            sx={{
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '19.2px',
              color: 'rgba(0, 0, 0, 0.69)',
            }}
          >
            Revolutioning Crypto Education
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '72px',
            fontWeight: '500',
            lineHeight: '72px',
            marginBottom: '32px',
            textAlign: 'center',
            letterSpacing: '1px',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Conquer The
          <br />
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Crypto Market
          </span>{' '}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '62px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Image src={Signals} width={24} height={24} alt="Signals" />

            <Typography
              variant="h5"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '18px',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Profitable Signals
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Image
              src={GraduationCap}
              width={24}
              height={24}
              alt="GraduationCap"
            />

            <Typography
              variant="h5"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '18px',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Learning Focused
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Image src={Speedometer} width={24} height={24} alt="Speedometer" />

            <Typography
              variant="h5"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '18px',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              The WZRD Platform
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <Image src={Clock} width={24} height={24} alt="Clock" />

            <Typography
              variant="h5"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '18px',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Lifetime Membership
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: 'rgba(255,255,255,1)',
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
