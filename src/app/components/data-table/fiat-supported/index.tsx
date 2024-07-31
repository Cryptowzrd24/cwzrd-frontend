import React, { useState } from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';
import { Modal, Box, Typography, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import infoIcon from '@/app/assets/icons/infoIcon.svg';
import Image from 'next/image';

export const FiatSupported = (props: CustomCellRendererProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  console.log('props----------', props);
  const fiats = props.value;

  if (!fiats || !Array.isArray(fiats) || fiats.length === 0) {
    return <div className={styles['fiat-supported']}>-</div>;
  }

  const getFlagUrl = (fiat: string) => {
    return `https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/${fiat}.svg`;
  };

  const firstThreeFiats = fiats.slice(0, 3).map((fiat) => fiat.trim());
  const remainingFiatsCount = fiats.length - 3;

  const filteredFiats = fiats.filter((fiat) =>
    fiat.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles['fiat-supported']}>
      <div
        style={{
          fontSize: '12px',
          color: 'rgba(17, 17, 17, 1)',
          fontWeight: 500,
          lineHeight: '16px',
        }}
      >
        {firstThreeFiats.join(', ')}
      </div>
      {remainingFiatsCount > 0 && (
        <div
          style={{
            lineHeight: '15.6px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            and +{remainingFiatsCount} more
            <span onClick={handleOpen} style={{ marginTop: '3px' }}>
              <Image className={styles['info-icon']} src={infoIcon} alt="" />
            </span>
          </div>
        </div>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '440px',
            width: '100%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: '30px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '26px',
            border: 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '24px',
                fontWeight: '700',
                letterSpacing: 1,
                mb: '20px',
              }}
            >
              {props.data?.exchange} Fiat Supported
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: '24px',
                  color: 'GrayText',
                  opacity: '0.5',
                  mb: '10px',
                }}
              />
            </IconButton>
          </Box>

          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: '16px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // Background color set here to ensure it remains during focus
                '& fieldset': {
                  borderRadius: '8px',
                  borderColor: '#eff2ff5', // Outline color
                },
                '&:hover fieldset': {
                  borderColor: '#eff2ff5', // Outline color on hover
                },
                '&.Mui-focused': {
                  '& fieldset': {
                    borderColor: '#eff2ff5', // Outline color when focused
                  },
                },
              },
              '& .MuiOutlinedInput-input': {
                color: 'black', // Text color
                fontSize: '14px', // Font size
              },
              '& .MuiInputBase-input': {
                color: 'black', // Ensure text is black when typing
              },
            }}
          />

          <Box
            sx={{
              maxHeight: '300px',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            }}
          >
            {filteredFiats.length > 0 ? (
              filteredFiats.map((fiat, index) => {
                const trimmedFiat = fiat.trim();
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '10px 0',
                      fontSize: '14px',
                      fontWeight: '500',
                    }}
                  >
                    <img
                      src={getFlagUrl(trimmedFiat)}
                      alt={`${trimmedFiat} flag`}
                      style={{ width: '24px', height: '24px' }}
                    />
                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                      {trimmedFiat}
                    </Typography>
                  </Box>
                );
              })
            ) : (
              <Typography sx={{ mt: 1 }}>No results found</Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
