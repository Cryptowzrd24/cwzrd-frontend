import { signUp } from '@/app/services';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import LoadingOverlay from '../loading-overlay';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = ({ setActiveTab }: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState({ color: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name: string) => {
    return name.trim().length > 2;
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
      setPasswordError(
        'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!validateName(name)) {
      setNameError('Name cannot be less than 3 characters');
      valid = false;
    } else {
      setNameError('');
    }

    if (valid) {
      setLoading(true);
      const response = await signUp({ email, password, name });

      if (response?.message) {
        setAlertMessage({
          color: 'green',
          message: response?.message,
        });
        setAnchorEl(e.currentTarget);
        setPopoverOpen(true);

        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
          setName('');
          setEmail('');
          setPassword('');
          setActiveTab(0);
        }, 4000);
      } else if (response?.error) {
        setAlertMessage({ color: 'red', message: response?.error });
        setAnchorEl(e.currentTarget);
        setPopoverOpen(true);

        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
        }, 3000);
      }
      setLoading(false);
    }
  };

  return (
    <>
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

          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            type={showPassword ? 'text' : 'password'}
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
          disabled={loading}
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
          {loading ? (
            <LoadingOverlay
              size={'25px'}
              background={'transparent'}
              color={'white'}
            />
          ) : (
            'Sign Up'
          )}
        </Button>
      </Box>
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={() => setPopoverOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: 0,
          },
        }}
      >
        <Box
          sx={{
            padding: '8px 16px',
            background: alertMessage?.color,
            color: 'white',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          {alertMessage?.message}
        </Box>
      </Popover>
    </>
  );
};

export default SignUp;
