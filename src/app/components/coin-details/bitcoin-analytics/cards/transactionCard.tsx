import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Detail from '../../../../../../public/icons/coin-details/detail';
import graph2 from '../../../../../../public/images/coin-details/graph2.png';
import Image from 'next/image';
const TransactionCard = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: '24px',
          padding: '24px',
          color: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          maxWidth: '630px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'baseline' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
            }}
          >
            Average transaction fees
          </Typography>
          <Detail />
        </Box>
        <Box sx={{ display: 'flex', gap: '56px', alignItems: 'center' }}>
          <Stack>
            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
              <Box
                sx={{
                  border: '1px solid rgba(71, 211, 78, 1)', // Adjust border color as needed
                  borderRadius: '50%', // Ensures the Box is circular
                  width: '5px',
                  height: '5px',
                  background:
                    'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                }}
              ></Box>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(17, 17, 17, 0.6)',
                  }}
                >
                  0.000168 BTC
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  $7.030042%
                </Typography>
              </Stack>
            </Box>
          </Stack>
          {/* ----------------------------------- */}
        </Box>
        <Box sx={{ mt: '16px' }}>
          <Image
            src={graph2}
            alt="graph"
            width={582}
            height={223}
            layout="responsive"
          />
        </Box>
      </Box>
    </>
  );
};

export default TransactionCard;
