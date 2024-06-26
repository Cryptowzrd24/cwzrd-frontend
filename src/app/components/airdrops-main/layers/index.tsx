'use client';
import React, { useState } from 'react';
import Header from './header';
import { Box, Grid } from '@mui/material';
import Steps from './steps';
import StepPicture from './stepPicture';

const Layers = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Box
        sx={{
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          padding: '24px',
        }}
      >
        <Box sx={{ mb: '32px' }}>
          <Header />
        </Box>
        <Grid container columnSpacing={3}>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              paddingRight: '18px',
            }}
          >
            <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              paddingLeft: '12px',
              borderLeft: '1px solid rgba(17, 17, 17, 0.1)',
            }}
          >
            <StepPicture currentStep={currentStep} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layers;
