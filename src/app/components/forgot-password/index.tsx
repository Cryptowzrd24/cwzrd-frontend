import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { forgotPassword } from '@/app/services';

const ForgotPassword = ({ setForgotPassowrd }: any) => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (valid) {
      const response = await forgotPassword(email);
      console.log('-----', response);
    }
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      gap={2}
      mt={'-20px'}
    >
      <Box>
        <Box sx={{ ml: '-12px' }}>
          <IconButton
            aria-label="close"
            onClick={() => setForgotPassowrd(false)}
            sx={(theme) => ({
              color: theme.palette.grey[500],
            })}
          >
            <ArrowBackIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
        <Typography
          sx={{ fontSize: '24px', lineHeight: '34px', fontWeight: '700' }}
        >
          Forgot your password?
        </Typography>
        <Typography
          sx={{
            marginTop: '4px',
            marginBottom: '6px',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'rgb(89,102,125)',
          }}
        >
          Enter your email below, you will receive an email with instructions on
          how to reset your password in a few minutes. You can also set a new
          password if you've never set one before.
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '2px',
              lineHeight: '26px',
            }}
          >
            Enter your e-mail address
          </Typography>
          <TextField
            size={'medium'}
            placeholder="Enter your e-mail address"
            fullWidth
            value={email}
            name="email"
            onChange={(e) => handleChange(e)}
            id="email"
            error={!!emailError}
            helperText={emailError}
            FormHelperTextProps={{
              sx: {
                fontSize: '12px',
                letterSpacing: '0.5px',
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                '&:hover fieldset': {
                  borderColor: emailError ? 'red' : '#7248F7',
                },
                '&.Mui-focused fieldset': {
                  borderColor: emailError ? 'red' : '#7248F7',
                  boxShadow: emailError
                    ? '0 0 5px 2px rgba(255, 0, 0, 0.3)'
                    : '0 0 5px 2px rgba(114, 72, 247, 0.3)',
                },
              },
            }}
          />
        </Box>
      </Box>
      <Button
        sx={{
          background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
          borderRadius: '12px',
          border: 'none',
          color: '#fff',
          height: '50px',
          '&:hover': {
            background: 'linear-gradient(90deg, #BF48F7 0%, #7248F7 100%)',
            border: 'none',
            color: '#fff',
          },
        }}
        onClick={handleSubmit}
        fullWidth
        variant="outlined"
      >
        Send Instructions
      </Button>
    </Box>
  );
};

export default ForgotPassword;
