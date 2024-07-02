import { Backdrop, Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './modal';
interface CardProps {
  id: string;
  image: string;
  subtitle: string;
  icon: React.ReactNode;
  title: string;
  status: string;
  statusAction: string;
  price: string;
  amount: string;
}

const Card: React.FC<CardProps> = ({
  image,
  subtitle,
  icon,
  title,
  status,
  statusAction,
  price,
  amount,
  id,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        style={{
          padding: '16px 0 16px 16px',
          borderRadius: '16px',
          maxWidth: '315px',
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 7px 29px 0px',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
      >
        <Stack>
          <Image src={image} alt="banner" width={300} height={239} />
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              mt: '16px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.6)',
              }}
            >
              {subtitle}
            </Typography>
            {icon}
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '293px',
              width: '100%',
              gap: '48px',
            }}
          >
            <Stack
              sx={{
                padding: '12px 16px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.6)',
                }}
              >
                {status}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '14px', fontWeight: '700' }}
              >
                {statusAction}
              </Typography>
            </Stack>
            <Stack
              sx={{
                padding: '12px 16px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.6)',
                }}
              >
                {price}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '14px', fontWeight: '700' }}
              >
                {amount}{' '}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </div>
      {open && (
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backdropFilter: 'blur(5px)',
          }}
          open={open}
          onClick={handleClose}
        >
          <Modal onCloseModal={handleClose} image={image} />
        </Backdrop>
      )}
    </>
  );
};

export default Card;
