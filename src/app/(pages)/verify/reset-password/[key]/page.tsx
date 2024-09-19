import PasswordResetModal from '@/app/components/verify/reset-password';
import { Box, Container } from '@mui/material';
import React from 'react';

const ForgetPassword = (props: any) => {
  const { key } = props.params;

  return (
    <Container>
      <Box sx={{ height: '60vh', padding: '24px' }}>
        <PasswordResetModal verificationKey={key} />
      </Box>
    </Container>
  );
};

export default ForgetPassword;
