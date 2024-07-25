'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import exam from '../../../../../public/images/platform/export.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const ExportCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
          padding: '32px',
          maxWidth: '410px',
          borderRadius: '32px',
          position: 'relative',
          height:"528px"
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '24px',
            letterSpacing: '1px',
          }}
        >
          Easy to export notes
        </Typography>
        <Box sx={{ paddingLeft: '24px' }}>
          <Image src={exam} alt="trade" width={100} height={100} />
          {active ? (
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '74px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
              }}
            >
              Easily export your saved notes into a downloadable PDF
            </Typography>
          ) : (
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '74px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
              }}
            >
              Easily export your saved notes into a downloadable PDF{' '}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '28px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              background: '#FFFFFF',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            <PlusIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ExportCard;
