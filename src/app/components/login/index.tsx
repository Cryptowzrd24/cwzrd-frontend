import { Box, Button, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
          Email Address
        </Typography>
        <TextField
          size={'medium'}
          placeholder="Enter your email address..."
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          id="email"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              '&:hover fieldset': {
                borderColor: '#7248F7',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7248F7',
                boxShadow: '0 0 5px 2px rgba(114, 72, 247, 0.3)',
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
          onChange={(e) => setPassword(e.currentTarget.value)}
          fullWidth
          id="password"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              '&:hover fieldset': {
                borderColor: '#7248F7',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7248F7',
                boxShadow: '0 0 5px 2px rgba(114, 72, 247, 0.3)',
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
          height: '45px',
          '&:hover': {
            background: 'linear-gradient(90deg, #BF48F7 0%, #7248F7 100%)',
            border: 'none',
            color: '#fff',
          },
        }}
        // disabled={email?.length < 5 && password.length < 8}
        onClick={handleSubmit}
        fullWidth
        variant="outlined"
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
