// 'use client';
// import { login } from '@/app/services';
// import {
//   Box,
//   Button,
//   IconButton,
//   InputAdornment,
//   Popover,
//   TextField,
//   Typography,
// } from '@mui/material';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import ForgotPassword from '../forgot-password';
// import { motion } from 'framer-motion';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '@/app/redux/user';
// import Cookies from 'js-cookie';
// import LoadingOverlay from '../loading-overlay';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// const Login = ({ setIsAuthenticated, setFirstLogin }: any) => {
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [emailError, setEmailError] = useState<string>('');
//   const [passwordError, setPasswordError] = useState<string>('');
//   const [forgotPassword, setForgotPassowrd] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const dispatch = useDispatch();

//   const handleChange = (field: string, value: string) => {
//     if (field === 'email') {
//       setEmailError('');
//       setEmail(value);
//     } else if (field === 'password') {
//       setPasswordError('');
//       setPassword(value);
//     }
//   };

//   const validateEmail = (email: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password: string) => {
//     return password.length > 7;
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     let valid = true;

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (valid) {
//       setLoading(true);
//       const response = await login({ email, password });
//       if (response?.token) {
//         if (response?.first_attempt) {
//           dispatch(
//             loginSuccess({
//               email,
//               name: 'Test',
//               token: response?.token,
//               isFirstLogin: true,
//             }),
//           );
//           setFirstLogin(true);
//         }
//         dispatch(
//           loginSuccess({
//             email,
//             name: 'Test',
//             token: response?.token,
//             isFirstLogin: false,
//           }),
//         );
//         Cookies.set('authToken', response?.token);

//         setIsAuthenticated(true);
//       } else if (response?.error) {
//         setErrorMessage(response?.error);
//         setAnchorEl(e.currentTarget);
//         setPopoverOpen(true);

//         setTimeout(() => {
//           setPopoverOpen(false);
//           setAnchorEl(null);
//         }, 3000);
//       }
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (Cookies.get('firstLogin')?.length) {
//       setFirstLogin(true);
//     }
//   }, [Cookies.get('firstLogin')]);

//   return (
//     <>
//       <Box
//         display={'flex'}
//         flexDirection={'column'}
//         justifyContent={'center'}
//         gap={3}
//       >
//         {forgotPassword ? (
//           <motion.div
//             initial={{ transform: 'scale(0.96)', opacity: '0.5' }}
//             animate={{ transform: 'scale(1)', opacity: '1' }}
//             transition={{ duration: 0.4 }}
//             key={'forgotPassword'}
//           >
//             <ForgotPassword setForgotPassowrd={setForgotPassowrd} />
//           </motion.div>
//         ) : (
//           <>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: '12px',
//                   fontWeight: '600',
//                   marginBottom: '2px',
//                   lineHeight: '26px',
//                 }}
//               >
//                 Email Address
//               </Typography>
//               <TextField
//                 size={'medium'}
//                 placeholder="Enter your email address..."
//                 fullWidth
//                 value={email}
//                 name="email"
//                 onChange={(e) =>
//                   handleChange(e.currentTarget.name, e.currentTarget.value)
//                 }
//                 id="email"
//                 error={!!emailError}
//                 helperText={emailError}
//                 FormHelperTextProps={{
//                   sx: {
//                     fontSize: '12px',
//                     letterSpacing: '0.5px',
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '12px',
//                     '&:hover fieldset': {
//                       borderColor: emailError ? 'red' : '#7248F7',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: emailError ? 'red' : '#7248F7',
//                       boxShadow: emailError
//                         ? '0 0 5px 2px rgba(255, 0, 0, 0.3)'
//                         : '0 0 5px 2px rgba(114, 72, 247, 0.3)',
//                     },
//                   },
//                 }}
//               />
//             </Box>
//             <Box>
//               <Box display={'flex'} justifyContent={'space-between'}>
//                 <Typography
//                   sx={{
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     marginBottom: '2px',
//                     lineHeight: '26px',
//                   }}
//                 >
//                   Password
//                 </Typography>
//                 <Link
//                   style={{
//                     textDecoration: 'none',
//                     fontSize: '12px',
//                     fontWeight: '600',
//                     marginBottom: '2px',
//                     lineHeight: '26px',
//                     color: 'rgb(112,121,139)',
//                   }}
//                   href="#"
//                   onClick={() => setForgotPassowrd(true)}
//                 >
//                   Forgot password?
//                 </Link>
//               </Box>
//               <TextField
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                       >
//                         {showPassword ? (
//                           <VisibilityIcon />
//                         ) : (
//                           <VisibilityOffIcon />
//                         )}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter your password..."
//                 value={password}
//                 name="password"
//                 onChange={(e) =>
//                   handleChange(e.currentTarget.name, e.currentTarget.value)
//                 }
//                 fullWidth
//                 id="password"
//                 error={!!passwordError}
//                 helperText={passwordError}
//                 FormHelperTextProps={{
//                   sx: {
//                     fontSize: '12px',
//                     letterSpacing: '0.5px',
//                   },
//                 }}
//                 sx={{
//                   '& .MuiOutlinedInput-root': {
//                     borderRadius: '12px',
//                     '&:hover fieldset': {
//                       borderColor: passwordError ? 'red' : '#7248F7',
//                     },
//                     '&.Mui-focused fieldset': {
//                       borderColor: passwordError ? 'red' : '#7248F7',
//                       boxShadow: passwordError
//                         ? '0 0 5px 2px rgba(255, 0, 0, 0.3)'
//                         : '0 0 5px 2px rgba(114, 72, 247, 0.3)',
//                     },
//                   },
//                 }}
//               />
//             </Box>
//             <Button
//               sx={{
//                 background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
//                 borderRadius: '12px',
//                 border: 'none',
//                 color: '#fff',
//                 height: '45px',
//                 '&:hover': {
//                   background:
//                     'linear-gradient(90deg, #BF48F7 0%, #7248F7 100%)',
//                   border: 'none',
//                   color: '#fff',
//                 },
//               }}
//               onClick={handleSubmit}
//               fullWidth
//               variant="outlined"
//             >
//               {loading ? (
//                 <LoadingOverlay
//                   size={'25px'}
//                   background={'transparent'}
//                   color={'white'}
//                 />
//               ) : (
//                 'Login'
//               )}
//             </Button>
//           </>
//         )}
//       </Box>
//       <Popover
//         open={popoverOpen}
//         anchorEl={anchorEl}
//         onClose={() => setPopoverOpen(false)}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//         sx={{
//           '& .MuiPaper-root': {
//             backgroundColor: 'transparent',
//             boxShadow: 'none',
//             padding: 0,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             padding: '8px 16px',
//             background: 'red',
//             color: 'white',
//             borderRadius: '4px',
//             textAlign: 'center',
//           }}
//         >
//           {errorMessage}
//         </Box>
//       </Popover>
//     </>
//   );
// };

// export default Login;

'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, loginUser } from '@/app/redux/user'; // Update the import path accordingly
import { AppDispatch, RootState } from '@/app/redux/store'; // Adjust the import path
import LoadingOverlay from '../loading-overlay';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ForgotPassword from '../forgot-password';

const Login = ({ setShowAuthModal }: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const userStatus = useSelector((state: RootState) => state.user.status);
  const userError = useSelector((state: RootState) => state.user.error);
  const { isFirstLogin } = useSelector((state: RootState) => state.user);

  const handleChange = (field: string, value: string) => {
    if (field === 'email') {
      setEmailError('');
      setEmail(value);
    } else if (field === 'password') {
      setPasswordError('');
      setPassword(value);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length > 7;
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    if (valid) {
      dispatch(loginUser({ email, password }));
    }
  };

  useEffect(() => {
    if (userStatus === 'succeeded') {
      setShowAuthModal(false);
      // if (isFirstLogin) {
      //   setShowAuthModal(false);
      // } else {
      //   setShowAuthModal(true);
      // }
    } else if (userStatus === 'failed' && userError) {
      setAnchorEl(document.body);
      setPopoverOpen(true);
      setTimeout(() => {
        setPopoverOpen(false);
        setAnchorEl(null);
        dispatch(clearError());
      }, 3000);
    }
  }, [userStatus, userError, isFirstLogin]);

  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        gap={3}
      >
        {forgotPassword ? (
          <motion.div
            initial={{ transform: 'scale(0.96)', opacity: '0.5' }}
            animate={{ transform: 'scale(1)', opacity: '1' }}
            transition={{ duration: 0.4 }}
            key={'forgotPassword'}
          >
            <ForgotPassword setForgotPassowrd={setForgotPassword} />
          </motion.div>
        ) : (
          <>
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
                onChange={(e) =>
                  handleChange(e.currentTarget.name, e.currentTarget.value)
                }
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
                  onClick={() => setForgotPassword(true)}
                >
                  Forgot password?
                </Link>
              </Box>
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
                placeholder="Enter your password..."
                value={password}
                name="password"
                onChange={(e) =>
                  handleChange(e.currentTarget.name, e.currentTarget.value)
                }
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
              disabled={userStatus === 'loading'}
            >
              {userStatus === 'loading' ? (
                <LoadingOverlay
                  size={'25px'}
                  background={'transparent'}
                  color={'white'}
                />
              ) : (
                'Login'
              )}
            </Button>
          </>
        )}
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
            background: 'red',
            color: 'white',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          {userError}
        </Box>
      </Popover>
    </>
  );
};

export default Login;
