import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
// import { cardDetails } from './data';
interface cardProps {
  id: number;
  cardDetails: any;
}
const CollectionCard = ({ id, cardDetails }: cardProps) => {
  const cardData = cardDetails[id];

  if (!cardData) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  return (
    <Box
      sx={{
        borderRadius: '16px',
        maxWidth: '440px',
        width: '100%',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        background: 'rgba(255, 255, 255, 1)',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {/* <Image
          src={cardData.image1}
          alt="background"
          width={410}
          height={180}
          layout="responsive"
        /> */}
        <Box
          sx={{
            padding: { xs: '5px', lg: '5px 12px' },
            borderRadius: '8px',
            background: 'rgba(17, 17, 17, 1)',
            position: 'absolute',
            top: { xs: '15px', md: '26px' },
            right: '30px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              background: 'rgb(18, 15, 15)',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Popular
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: { xs: '10px', md: '24px' },
          mt: { xs: '40px', sm: '0' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: { xs: '8px', sm: '16px' },
          }}
        >
          <Box
            sx={{
              mt: '8px',
              width: { xs: '30px', sm: '48px' },
              height: { xs: '30px', sm: '48px' },
            }}
          >
            <Image
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              loader={({ src }) => src}
              src={cardData.image2}
              alt="icon"
              width={48}
              height={48}
            />
          </Box>
          <Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '32px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {cardData.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  mb: '16px',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    letterSpacing: '1.5px',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  {cardData.subheading}
                </Typography>
                {cardData.icon}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '32px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: 'rgba(17, 17, 17, 0.6)',
                    }}
                  >
                    {cardData.state1}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '20px',
                      fontWeight: '500',
                      color: 'rgba(17, 17, 17, 1)',
                    }}
                  >
                    {cardData.value1}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '400',
                      color: 'rgba(17, 17, 17, 0.6)',
                    }}
                  >
                    {cardData.state2}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '20px',
                      fontWeight: '500',
                      color: 'rgba(17, 17, 17, 1)',
                    }}
                  >
                    {cardData.value2}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionCard;
