import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
interface stepProps {
  currentStep: any;
  setCurrentStep: any;
}

const Steps = ({ currentStep, setCurrentStep }: stepProps) => {
  const handleStepClick = (step: any) => {
    setCurrentStep(step);
  };
  return (
    <>
      <Box
        sx={{
          padding: '20px 24px 32px 24px',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '16px',
        }}
        onClick={() => handleStepClick(1)}
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
              cursor: 'pointer',
            }}
          >
            Step 1
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Go to the Website and connect your wallet.
          </Typography>
        </Stack>
      </Box>
      {/* ----------------------------------------------- */}
      <Box
        sx={{
          padding: '20px 24px 32px 24px',
          boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          borderRadius: '16px',
          mt: '16px',
          cursor: 'pointer',
        }}
        onClick={() => handleStepClick(2)}
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
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Click on the "Mint" button and confirm the transaction.{' '}
          </Typography>
        </Stack>
      </Box>
      {/* ---------------------- */}
      <Box
        sx={{
          padding: '20px 24px 32px 24px',
          boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          borderRadius: '16px',
          mt: '16px',
          cursor: 'pointer',
        }}
        onClick={() => handleStepClick(3)}
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
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            If the transaction was successful, you will see a notice about it
            and get the mint ID. Save it, you may need it in the next step.{' '}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Steps;
