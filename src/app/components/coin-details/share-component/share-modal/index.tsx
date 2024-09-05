import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box, Popover } from '@mui/material';

const ShareModal = ({ coinImage, coinDetails, isOpen, handleIsOpen }: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleClose = () => {
    handleIsOpen(false);
  };

  const copyToClipboard = (event: React.MouseEvent<HTMLElement>) => {
    navigator.clipboard
      .writeText(
        `http://localhost:3000/market/coin-details/${coinDetails.coin_id}`,
      )
      .then(() => {
        setAnchorEl(event.currentTarget);
        setPopoverOpen(true);

        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          PaperProps={{
            sx: {
              borderRadius: '16px',
            },
          }}
          onClose={handleClose}
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
            pt={'17px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            overflow={'hidden'}
          >
            <Image height={80} width={80} alt={'coin image'} src={coinImage} />
          </Box>
          <DialogContent>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '1.5em',
                marginBlock: '5px',
                lineHeight: '1.5em',
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
                paddingTop: '6px',
                color: 'rgb(78,91,115)',
                marginTop: '5px',
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
                  height: '36px',
                  position: 'absolute',
                  right: 31,
                  borderRadius: '10px',
                  border: 'transparent',
                  background:
                    'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '21px',
                  paddingInline: '12px',
                  cursor: 'pointer',
                }}
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </Box>
          </DialogContent>
        </Dialog>

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
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              color: 'white',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            Link copied to clipboard!
          </Box>
        </Popover>
      </React.Fragment>
    </>
  );
};

export default ShareModal;
