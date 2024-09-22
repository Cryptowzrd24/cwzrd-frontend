import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography } from '@mui/material';
import selectedStar from '@/app/assets/icons/selectedStar.svg';
import EastIcon from '@mui/icons-material/East';
import Logo from '../../../../public/images/logo-hat.png';
import { useAppDispatch } from '@/app/redux/store';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
import Cookies from 'js-cookie';
import Image from 'next/image';
import {
  updateSelectedWatchListName,
  updateSelectedWatchListMain,
  updateFavorites,
} from '../../redux/market/index';

const FirstLoginModal = ({ firstLogin, setFirstLogin }: any) => {
  const dispatch = useAppDispatch();
  const [addWatchlist] = useAddWatchlistMutation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    // @ts-expect-error: Cookie might be undefined or invalid JSON
    const favorites = JSON?.parse(Cookies?.get('favorites')) || [];
    dispatch(updateSelectedWatchListName('My Favorite Coins'));
    dispatch(updateSelectedWatchListMain('My Favorite Coins'));
    dispatch(updateFavorites(favorites));
    try {
      await addWatchlist({
        token: Cookies.get('authToken'),
        collection_name: 'My Favorite Coins',
        main: true,
        ids: favorites,
      }).unwrap();
      setFirstLogin(false);
    } catch (error) {
      console.error('Failed to create watchlist:', error);
    }
    setLoading(false);
  };

  const handleClose = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    dispatch(updateSelectedWatchListName('My First Coin Watchlist'));
    dispatch(updateSelectedWatchListMain('My First Coin Watchlist'));
    dispatch(updateFavorites([]));
    Cookies.remove('favorites');
    try {
      await addWatchlist({
        token: Cookies.get('authToken'),
        collection_name: 'My First Coin Watchlist',
        main: true,
        ids: [],
      }).unwrap();
      setFirstLogin(false);
    } catch (error) {
      console.error('Failed to create watchlist:', error);
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: '16px',
            width: '500px',
          },
        }}
        onClose={handleClose}
        open={firstLogin}
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
              gap={2}
              sx={{ margin: '30px auto 42px' }}
            >
              <Box
                sx={{
                  height: '80px',
                  width: '80px',
                  borderRadius: '100px',
                  overflow: 'hidden',
                  background: 'rgb(237,240,243)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  alt="star image"
                  width={40}
                  height={40}
                  src={selectedStar.src}
                />
              </Box>
              <EastIcon
                sx={{
                  color: 'rgb(156,167,187)',
                  height: '35px',
                  width: '50px',
                }}
              />
              <Box
                sx={{
                  height: '80px',
                  width: '80px',
                  borderRadius: '100px',
                  overflow: 'hidden',
                  background: 'rgb(237,240,243)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image alt="logo image" width={40} height={40} src={Logo.src} />
              </Box>
            </Box>

            <Typography
              sx={{
                mb: '12px',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '28px',
                textAlign: 'center',
                wordSpacing: '3.5px',
              }}
            >
              You have a local watchlist added <br></br> while not logged in,
              want to keep this Watchlist, too?
            </Typography>

            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '14px',
                textAlign: 'center',
                color: 'rgb(107,118,138)',
                overflowWrap: 'break-word',
                lineHeight: '22px',
              }}
            >
              We'll combine this with your account's existing Watchlist(s){' '}
              <br></br> so you can keep track of all these coins and pairs
              you've<br></br> marked.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                paddingBlock: '12px',
                marginTop: '16px',
              }}
            >
              <Button
                disabled={loading}
                sx={{
                  background:
                    'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  borderRadius: '8px',
                  border: 'none',
                  color: '#fff',
                  height: '40px',
                  '&:hover': {
                    background:
                      'linear-gradient(90deg, #BF48F7 0%, #7248F7 100%)',
                    border: 'none',
                    color: '#fff',
                  },
                }}
                onClick={(e: any) => handleSubmit(e)}
                fullWidth
                variant="outlined"
              >
                Yes, please
              </Button>
              <Button
                disabled={loading}
                sx={{
                  borderColor: '#7248F7',
                  borderRadius: '8px',
                  color: '#7248F7',
                  height: '40px',
                  '&:hover': {
                    color: 'black',
                    borderColor: '#7248F7',
                  },
                }}
                onClick={handleClose}
                fullWidth
                variant="outlined"
              >
                No thanks
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default FirstLoginModal;
