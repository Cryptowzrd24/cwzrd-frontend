import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import LifetimeBanner from '../../../../../public/images/membership/lifetimeBanner.png';

const AddToCartCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/membership/lifetimeBg.png')`,
        width: '343px',
        backgroundSize: 'cover',
        borderRadius: '24px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Image src={LifetimeBanner} alt="crypto icons" width={343} />

        <Box
          sx={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(255, 255, 255, 1)',
            padding: '8px 16px',
            borderRadius: '32px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '16px',
              fontFamily: 'SF Pro Text',
              background: 'linear-gradient(80deg, #9F48F7 100%, #634DFD 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Black Friday Sale
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          px: '32px',
          mb: '16px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '8px',
          }}
        >
          Lifetime Membership
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Sf Pro Text',
            mb: '32px',
          }}
        >
          A one-time fee with no reoccurring monthly charge ensures you get the
          most for your money.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            mb: '24px',
          }}
        >
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: '400',
              lineHeight: '40px',
              color: 'rgba(255, 255, 255, 1)',
              fontFamily: 'SF Pro Display',
            }}
          >
            £450.99
          </Typography>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '6px 12px',
              borderRadius: '56px',
              border: '0.5px solid #FFF',
            }}
          >
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '600',
                lineHeight: '13px',
                fontFamily: 'SF Pro Display',
                color: 'rgba(255,255,255,1)',
              }}
            >
              One-time fee
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            borderRadius: '56px',
            width: '100%',
            padding: '12px 24px',
            background:
              'linear-gradient(117deg, #F7841A -4.07%, #F74848 100.68%)',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '21px',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(255,255,255,1)',
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default AddToCartCard;
