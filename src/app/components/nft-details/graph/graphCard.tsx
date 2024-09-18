import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
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

const GraphCard: React.FC<CardProps> = ({ image, price }) => {
  return (
    <>
      <Box
        sx={{
          width: '200px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '16px',
        }}
      >
        <Stack>
          <Box sx={{ marginLeft: '8px', marginTop: '8px' }}>
            <img
              src={image}
              alt="banner"
              style={{
                width: '184px',
                height: '169px',
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '8px',
              paddingInline: '16px',
            }}
          >
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              04/14/2024
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 400,
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              12:00:00 PM
            </Typography>
          </Box>

          <Box
            sx={{
              height: '36px',
              width: '184px',
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '8px',
              marginLeft: '8px',
              gap: '48px',
              opacity: '80%',
            }}
          >
            <Stack>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontFamily: 'Sf Pro Display',
                }}
              >
                Item
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '700',
                  fontFamily: 'Sf Pro Display',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                #2705
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.6)',
                  fontFamily: 'Sf Pro Display',
                }}
              >
                {price}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '700',
                  fontFamily: 'Sf Pro Display',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                0.3475 ETH
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default GraphCard;
