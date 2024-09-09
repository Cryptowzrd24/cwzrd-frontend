import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Tab, Tabs } from '@mui/material';
import Login from '../login';
import SignUp from '../sign-up';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AuthModal = ({ isAuthenticated, handleIsAuthenticated }: any) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = () => {
    handleIsAuthenticated(false);
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          PaperProps={{
            sx: {
              borderRadius: '16px',
              width: '480px',
            },
          }}
          onClose={handleClose}
          open={isAuthenticated}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent>
            <Box sx={{ width: '100%' }}>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    '& .MuiTabs-indicator': {
                      display: 'flex',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      height: '5px',
                      '&::before': {
                        content: '""',
                        maerginTop: '-10px',
                        width: '30px',
                        borderRadius: '15px',
                        background:
                          'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                      },
                    },
                  }}
                >
                  <Tab
                    label="Log In"
                    {...a11yProps(0)}
                    sx={{
                      textTransform: 'none',
                      fontWeight: '500',
                      fontSize: '22px',
                      '&.Mui-selected': {
                        color: 'black',
                        fontWeight: '700',
                      },
                    }}
                  />
                  <Tab
                    label="Sign Up"
                    {...a11yProps(1)}
                    sx={{
                      textTransform: 'none',
                      fontSize: '22px',
                      fontWeight: '500',
                      '&.Mui-selected': {
                        color: 'black',
                        fontWeight: '700',
                      },
                    }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Login />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <SignUp />
              </CustomTabPanel>
            </Box>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default AuthModal;
