import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../../../public/images/spotlight-cards/1.png';
import img2 from '../../../../../public/images/spotlight-cards/2.png';
import img3 from '../../../../../public/images/spotlight-cards/3.png';
import img4 from '../../../../../public/images/spotlight-cards/4.png';
import img5 from '../../../../../public/images/spotlight-cards/5.png';
import img6 from '../../../../../public/images/spotlight-cards/6.png';
import img7 from '../../../../../public/images/spotlight-cards/7.png';
import score from '../../../../../public/images/spotlight-cards/score.png';
import score2 from '../../../../../public/images/spotlight-cards/score (1).png';
import graph from '../../../../../public/images/spotlight-cards/Frame.png';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';

const Card = () => {
  return (
    <>
      <Box
        sx={{
          padding: '16px',
          borderRadius: '8px',
          maxWidth: '362px',
          width: '100%',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
      >
        <Box
          sx={{
            padding: '16px',
            backgroundImage: `url('/images/spotlight-cards/background1.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '16px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Image src={img1} alt="bitcoin" width={40} height={40} />
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Bitcoin
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  BTC
                </Typography>
              </Stack>
            </Box>
            <Image src={score} alt="score" width={40} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: '32px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              $49,627.43
            </Typography>
            <Box
              sx={{
                borderRadius: '24px',
                padding: '4px 8px',
                background: 'rgba(69, 202, 148, 1)',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                +7.37%
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: '24px',
            gap: '48px',
          }}
        >
          <Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Market Cap <Shift />{' '}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                $49,627M{' '}
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Circulation Supply <Shift />{' '}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                19.63M (93.46%)
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Volume (24hours) <Shift />{' '}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                $33.96B
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Total Max. Supply <Shift />{' '}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                21.00M
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: '24px' }}>
          <Image src={graph} alt="graph" />
        </Box>
      </Box>
    </>
  );
};

export default Card;
