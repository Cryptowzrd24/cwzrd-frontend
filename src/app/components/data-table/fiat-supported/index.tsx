import React, { useState } from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';
import Vector from '../../../../../public/icons/vector';
import { Modal, Box, Typography, TextField } from '@mui/material';

export const FiatSupported = (props: CustomCellRendererProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

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

  console.log('fiats:', fiats);
  console.log('filteredFiats:', filteredFiats);

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
            <span style={{ cursor: 'pointer' }} onClick={handleOpen}>
              <Vector />
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
            maxWidth: '500px',
            width: '100%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: '26px',
            border: 'none',
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: '24px', fontWeight: '700', letterSpacing: 1 }}
          >
            Binance Fiat Supported
          </Typography>
          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                '& fieldset': {
                  borderRadius: '8px',
                },
                '&:hover fieldset': {
                  borderColor: 'currentColor',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'currentColor',
                },
              },
            }}
          />
          <Box
            sx={{
              maxHeight: '300px',
              overflowY: 'auto',
              mt: 2,
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
              filteredFiats.map((fiat, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    mt: 2,
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  <img
                    src={getFlagUrl(fiat)}
                    alt={`${fiat} flag`}
                    style={{ width: '20px', height: '15px' }}
                  />
                  <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                    {fiat}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography sx={{ mt: 1 }}>No results found</Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
