import React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
// import { cardDetails } from './data';
interface cardProps {
  id: string;
  cardDetails: any;
}
const CollectionCard = ({ id, cardDetails }: cardProps) => {
  const cardData = cardDetails.find((card: any) => card.id === id);

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
      <Box sx={{ padding: '16px 16px 0 16px', position: 'relative' }}>
        {/* <Image
          src={cardData.image1}
          alt="background"
          width={410}
          height={180}
          layout="responsive"
        /> */}
        <div
          style={{
            width: '410px',
            height: '180px',
            position: 'relative',
          }}
        >
          <Image
            src={cardData.image1}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ borderRadius: '12px' }}
          />
        </div>

        <Box
          sx={{
            padding: '5px 12px',
            borderRadius: '8px',
            background: 'rgba(17, 17, 17, 1)',
            position: 'absolute',
            top: '28px',
            left: '30px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              background: 'rgba(17, 17, 17, 1)',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Popular
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: '24px' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <Box sx={{ mt: '8px' }}>
            <Image src={cardData.image2} alt="icon" width={48} height={48} />
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
