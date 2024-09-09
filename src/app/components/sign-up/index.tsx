import { signUp } from '@/app/services';
import { Box, Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmailError('');
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPasswordError('');
      setPassword(e.target.value);
    } else if (e.target.name === 'name') {
      setNameError('');
      setName(e.target.value);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name: string) => {
    return name.trim().length > 4;
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
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

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!validateName(name)) {
      setNameError('Name cannot be empty');
      valid = false;
    } else {
      setNameError('');
    }

    if (valid) {
      const response = await signUp({ email, password, name });
      console.log('-----', response);
    }
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      gap={3}
    >
      <Box>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '2px',
            lineHeight: '26px',
          }}
        >
          Full Name
        </Typography>
        <TextField
          size={'medium'}
          placeholder="Enter your full name..."
          fullWidth
          value={name}
          name="name"
          onChange={handleChange}
          id="email"
          error={!!nameError}
          helperText={nameError}
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
                borderColor: nameError ? 'red' : '#7248F7',
              },
              '&.Mui-focused fieldset': {
                borderColor: nameError ? 'red' : '#7248F7',
                boxShadow: nameError
                  ? '0 0 5px 2px rgba(255, 0, 0, 0.3)'
                  : '0 0 5px 2px rgba(114, 72, 247, 0.3)',
              },
            },
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '2px',
            lineHeight: '26px',
          }}
        >
          Email Address
        </Typography>
        <TextField
          size={'medium'}
          placeholder="Enter your email address..."
          fullWidth
          value={email}
          name="email"
          onChange={handleChange}
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
      <Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '2px',
              lineHeight: '26px',
            }}
          >
            Password
          </Typography>
          <Link
            style={{
              textDecoration: 'none',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '2px',
              lineHeight: '26px',
              color: 'rgb(112,121,139)',
            }}
            href="#"
          >
            Forgot password?
          </Link>
        </Box>
        <TextField
          type="password"
          placeholder="Enter your password..."
          value={password}
          name="password"
          onChange={handleChange}
          fullWidth
          id="password"
          error={!!passwordError}
          helperText={passwordError}
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
                borderColor: passwordError ? 'red' : '#7248F7',
              },
              '&.Mui-focused fieldset': {
                borderColor: passwordError ? 'red' : '#7248F7',
                boxShadow: passwordError
                  ? '0 0 5px 2px rgba(255, 0, 0, 0.3)'
                  : '0 0 5px 2px rgba(114, 72, 247, 0.3)',
              },
            },
          }}
        />
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
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
