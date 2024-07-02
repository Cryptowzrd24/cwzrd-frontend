import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';

const Card = ({
  img,
  background,
  title,
  subtitle,
  score,
  price,
  change,
  marketCap,
  circulationSupply,
  volume,
  totalMaxSupply,
  graph,
}: any) => {
  const isPositiveChange = change.startsWith('+');
  const changeColor = isPositiveChange
    ? 'rgba(69, 202, 148, 1)'
    : 'rgba(245, 65, 65, 1)';
  return (
    <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '362px',
        width: '100%',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
      }}
    >
      <Box
        sx={{
          padding: '16px',
          backgroundImage: `url(${background})`,
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
            <Image src={img} alt={title} width={40} height={40} />
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {subtitle}
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
            {price}
          </Typography>
          <Box
            sx={{
              borderRadius: '24px',
              padding: '4px 8px',
              background: changeColor,
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
              {change}
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
              Market Cap <Shift />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {marketCap}
            </Typography>
          </Stack>
          <Stack sx={{ mt: '8px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Circulation Supply <Shift />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {circulationSupply}
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
              Volume (24hours) <Shift />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {volume}
            </Typography>
          </Stack>
          <Stack sx={{mt:"8px"}}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Total Max. Supply <Shift />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {totalMaxSupply}
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ mt: '24px' }}>
        <Image src={graph} alt="graph" />
      </Box>
    </Box>
  );
};

export default Card;
