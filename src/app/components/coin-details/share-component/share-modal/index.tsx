import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box } from '@mui/material';

const ShareModal = ({ coinImage, coinDetails, isOpen, handleIsOpen }: any) => {
  const handleClose = () => {
    handleIsOpen(false);
  };
  console.log('-----', coinDetails);
  return (
    <>
      <React.Fragment>
        <Dialog
          sx={{ borderRadius: '18px !important' }}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={isOpen}
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
          <Box
            pt={'20px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            overflow={'hidden'}
            borderRadius={'25px'}
          >
            <Image
              style={{ borderRadius: '50px' }}
              height={80}
              width={80}
              alt={'coin image'}
              src={coinImage}
            />
          </Box>
          <DialogContent>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '1.5em',
                marginBlock: '5px',
                fontWeight: 'bold',
              }}
              variant={'h2'}
            >
              Share it with your friends
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                lineHeight: '24px',
                marginBottom: '12px',
                color: 'rgb(78,91,115)',
                textAlign: 'center',
              }}
              variant={'body1'}
            >
              The price of <b>{coinDetails?.slug}</b> is $
              {parseFloat(coinDetails?.statistics?.price).toFixed(2)}!
            </Typography>
            <Typography
              sx={{
                textAlign: 'start',
                fontWeight: '600',
                fontSize: '12px',
                lineHeight: '24px',
              }}
              variant={'body1'}
            >
              Or copy link
            </Typography>
            <Box
              gap={1}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <input
                style={{
                  borderRadius: '8px',
                  paddingInline: '10px',
                  paddingBlock: 'px 16px',
                  outlineStyle: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  lineHeight: '21px',
                  textAlign: 'start',
                  width: '100%',
                  height: '40px',
                  border: '0.5px solid lightgray',
                }}
                contentEditable={false}
                value={`http://localhost:3000/market/coin-details/${coinDetails.coin_id}`}
              ></input>
              <button
                style={{
                  height: '38px',
                  position: 'absolute',
                  right: 31,
                  borderRadius: '10px',
                  border: 'transparent',
                  background:
                    'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '21px',
                  paddingInline: '10px',
                }}
              >
                Copy
              </button>
            </Box>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default ShareModal;
