import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../../../public/images/airdrops/banner.png';
import Image from 'next/image';

interface stepPicture {
  currentStep: any;
}
const StepPicture = ({ currentStep }: stepPicture) => {
  let description = '';
  switch (currentStep) {
    case 1:
      description = 'Go to the  Website and connect your wallet.';
      break;
    case 2:
      description = 'Click on the "Mint" button and confirm the transaction.';
      break;
    case 3:
      description =
        'If the transaction was successful, you will see a notice about it and get the mint ID. Save it, you may need it in the next step.';
      break;
    default:
      description = '';
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
              maxWidth: '15%',
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
            {description}

            {/* Go to the{' '}
            <span style={{ color: 'rgba(114, 72, 247, 1)', fontWeight: '700' }}>
              Website
            </span>
              and connect your wallet. */}
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

      {/* --------------------------------------------------------------------------------- */}
      {/* {true && (
        <Box
          sx={{
            padding: '32px',
            boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
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
                maxWidth: '15%',
              }}
            >
              Step 2
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
              Click on the
              <span
                style={{ color: 'rgba(114, 72, 247, 1)', fontWeight: '700' }}
              >
                "Mint"
              </span>
              button and confirm the transaction.{' '}
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
      )} */}
      {/* ----------------------------------------------------------------------------------------------- */}
      {/* {true && (
        <Box
          sx={{
            padding: '32px',
            boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
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
                maxWidth: '15%',
              }}
            >
              Step 3
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
              If the transaction was successful, you will see a notice about it
              and get the mint ID. Save it, you may need it in the next step.
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
      )} */}
    </>
  );
};

export default StepPicture;
