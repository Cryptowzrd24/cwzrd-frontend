'use client';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoadingOverlay from '../../loading-overlay';
import { resetPassword } from '@/app/services';

const PasswordResetModal = ({ verificationKey }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');
  const [showRePassword, setShowRePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const handleChange = (e: any) => {
    if (e.target.name === 'password') {
      setPasswordError('');
      setPassword(e.target.value);
    } else if (e.target.name === 're-password') {
      setRePasswordError('');
      setRePassword(e.target.value);
    }
  };

  const validatePassword = (password: string) => {
    console.log('pass', password);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log('is valid', passwordRegex.test(password));
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let valid = true;

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!validatePassword(rePassword)) {
      setRePasswordError(
        'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
      );
      valid = false;
    } else {
      setRePasswordError('');
    }
    if (password !== rePassword) {
      setRePasswordError('Passwords do not match.');
      valid = false;
    } else {
      setRePasswordError('');
    }

    if (valid) {
      setLoading(true);
      const response = await resetPassword({
        password,
        rePassword,
        verificationKey,
      });

      if (response?.message) {
        setColor('green');
        setMessage(response?.message);
        setAnchorEl(e.currentTarget);
        setPopoverOpen(true);
        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
          setMessage('');
          setColor('');
          setPassword('');
          setRePassword('');
        }, 3000);
      } else if (response?.error) {
        setColor('red');
        setMessage(response?.error);
        setAnchorEl(e.currentTarget);
        setPopoverOpen(true);

        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
          setMessage('');
          setColor('');
        }, 3000);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          PaperProps={{
            sx: {
              borderRadius: '16px',
              width: '500px',
              padding: '0 24px 18px 24px',
            },
          }}
          open={true}
        >
          <DialogContent>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                // marginInline: '12px',
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  marginBlock: '14px',
                  fontWeight: '700',
                  fontSize: '32px',
                  lineHeight: '28px',
                  textAlign: 'center',
                  wordSpacing: '3.5px',
                }}
              >
                Reset Password
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
                  New Password
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
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your new password..."
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

              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '2px',
                    lineHeight: '26px',
                  }}
                >
                  Confrim New Password
                </Typography>

                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowRePassword(!showRePassword)}
                          edge="end"
                        >
                          {showRePassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  type={showRePassword ? 'text' : 'password'}
                  placeholder="Enter your new password again..."
                  value={rePassword}
                  name="re-password"
                  onChange={handleChange}
                  fullWidth
                  id="re-password"
                  error={!!rePasswordError}
                  helperText={rePasswordError}
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
                        borderColor: rePasswordError ? 'red' : '#7248F7',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: rePasswordError ? 'red' : '#7248F7',
                        boxShadow: rePasswordError
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
                  background:
                    'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  borderRadius: '12px',
                  border: 'none',
                  marginTop: '16px',
                  color: '#fff',
                  height: '45px',
                  '&:hover': {
                    background:
                      'linear-gradient(90deg, #BF48F7 0%, #7248F7 100%)',
                    border: 'none',
                    color: '#fff',
                  },
                }}
                onClick={handleSubmit}
                fullWidth
                variant="outlined"
              >
                {loading ? (
                  <LoadingOverlay background={'transparent'} color={'white'} />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </React.Fragment>
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
      >
        <Box
          sx={{
            padding: '8px 16px',
            background: color,
            color: 'white',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          {message}
        </Box>
      </Popover>
    </>
  );
};

export default PasswordResetModal;
