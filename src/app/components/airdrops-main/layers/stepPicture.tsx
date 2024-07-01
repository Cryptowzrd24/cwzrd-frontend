import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../../../public/images/airdrops/banner.png';
import Image from 'next/image';

interface stepPicture {
  currentStep: any;
}
const StepPicture = ({ currentStep }: stepPicture) => {
  let elements;

  switch (currentStep) {
    case 1:
      elements = (
        <>
          Go to the{' '}
          <span
            style={{
              color: 'rgba(114, 72, 247, 1)',
              fontSize: '24px',
              fontWeight: '700',
            }}
          >
            Website
          </span>{' '}
          and connect your wallet.
        </>
      );
      break;
    case 2:
      elements = (
        <>
          Click on the{' '}
          <span
            style={{
              color: 'rgba(114, 72, 247, 1)',
              fontSize: '24px',
              fontWeight: '700',
            }}
          >
            "Mint"
          </span>{' '}
          button and confirm the transaction.
        </>
      );
      break;
    case 3:
      elements = (
        <>
          If the transaction was successful, you will see a notice about it and
          get the mint ID. Save it, you may need it in the next step.
        </>
      );
      break;
    default:
      elements = <></>;
  }
  return (
    <>
      <Box
        sx={{
          padding: '32px',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '16px',
        }}
      >
        <Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'rgba(1, 200, 119, 1)',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(31, 215, 115, 0.1)',
              mb: '16px',
              maxWidth: { lg: '10%', md: '12%', xl: '8%' },
            }}
          >
            Step {currentStep}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '24px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
              mb: '24px',
            }}
          >
            {elements}
          </Typography>
          <Image
            src={banner}
            alt="banner"
            width={714}
            height={355}
            layout="responsive"
          />
        </Stack>
      </Box>

    </>
  );
};

export default StepPicture;
