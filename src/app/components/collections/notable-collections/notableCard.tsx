import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
interface CardProps {
  id: string;
  image: string;

  title: string;
  status: string;
  statusAction: string;
  price: string;
  amount: string;
}

const NotableCard: React.FC<CardProps> = ({
  image,
  title,
  status,
  statusAction,
  price,
  amount,
}) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: '16px',
          maxWidth: '300px',
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        }}
      >
        <Stack>
          <Image
            src={image}
            alt="banner"
            width={300}
            height={248}
            layout="responsive"
          />
          <Box sx={{ padding: '0 24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mt: '16px',
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                gap: '48px',
                mb: '24px',
                mt: '16px',
              }}
            >
              <Stack>
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
              <Stack>
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
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default NotableCard;
