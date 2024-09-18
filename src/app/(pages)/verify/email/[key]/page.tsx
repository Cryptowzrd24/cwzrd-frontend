'use client';
import VerifyEmailModal from '@/app/components/verify/email';
import { Box, Container } from '@mui/material';
import React from 'react';

const VerifyEmail = (props: any) => {
  const { key } = props.params;

  return (
    <Container>
      <Box sx={{ height: '60vh', padding: '24px' }}>
        <VerifyEmailModal verificationKey={key} />
      </Box>
    </Container>
  );
};

export default VerifyEmail;
