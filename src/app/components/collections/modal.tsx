'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Search from '../../../../public/icons/collections/search';
import img2 from '../../../../public/images/collections/Ellipse 1 (1).png';
import Link from '../../../../public/icons/collections/link';
import Discord from '../../../../public/icons/collections/discord';
import Twitter from '../../../../public/icons/collections/twitter';
interface ModalProps {
  onCloseModal: () => void;
  image: string;
}
const Modal: React.FC<ModalProps> = ({ image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Box
        sx={{
          borderRadius: '16px',
          maxWidth: '520px',
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 7px 29px 0px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fefefe',
          border: '8px solid rgba(255, 255, 255, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Stack>
          <div
            style={{
              width: 'auto',
              height: '330px',
              position: 'relative',
            }}
          >
            <Image
              src={image}
              alt="background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'absolute',
              top: '260px',
              left: '12px',
            }}
          >
            <Stack
              sx={{
                padding: '9px 14px 7px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontSize: '20px' }}>
                7
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(17, 17, 17, 1)' }}
              >
                DAYS
              </Typography>
            </Stack>
            <Stack
              sx={{
                padding: '9px 14px 7px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontSize: '20px' }}>
                12
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(17, 17, 17, 1)' }}
              >
                HRS
              </Typography>
            </Stack>
            <Stack
              sx={{
                padding: '9px 14px 7px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <Typography variant="h5" sx={{ fontSize: '20px' }}>
                46
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(17, 17, 17, 1)' }}
              >
                MINS
              </Typography>
            </Stack>
            <Stack
              sx={{
                padding: '9px 14px 7px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <Typography variant="h5" sx={{ fontSize: '20px' }}>
                30
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(17, 17, 17, 1)' }}
              >
                SECS
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ padding: '16px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '4px',
                // mt: '16px',
              }}
            >
              <Typography variant="h5" sx={{ fontSize: '20px' }}>
                Dragon Street #47
              </Typography>
              <Box
                sx={{
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'rgba(114, 72, 247, 0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Search />
              </Box>
            </Box>
            <Box
              sx={{
                padding: '6px 12px 6px 8px',
                borderRadius: '100px',
                border: '1px solid rgba(17, 17, 17, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                alignItems: 'center',
                mb: '16px',
                width: '80px',
              }}
            >
              <Image src={img2} alt="ellipse" width={16} height={16} />
              <Typography
                variant="body1"
                sx={{ fontSize: '11px', fontWeight: '500' }}
              >
                Polygon
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: '8px',
                background: 'rgba(17, 17, 17, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                gap: { xs: '10px', sm: '64px' },
                mb: '16px',
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
                  Items
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '14px', fontWeight: '700' }}
                >
                  10,000{' '}
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
                  Strats
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '14px', fontWeight: '700' }}
                >
                  May 31{' '}
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
                  Mint Price
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '14px', fontWeight: '700' }}
                >
                  10 USD
                </Typography>
              </Stack>
            </Box>
            <Typography variant="body2" sx={{ mb: '16px' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              recusandae cumque fugiat similique fuga.
              {isExpanded && (
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  corrupti iure optio facilis voluptatum similique corporis
                  doloribus laborum iusto, cupiditate eveniet dolore tempore
                  eaque rerum delectus provident porro nisi? Similique.
                </span>
              )}
              <span
                style={{
                  color: '#7248F7',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
                onClick={handleToggle}
              >
                {isExpanded ? ' See Less' : ' See More'}
              </span>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'Center', gap: '6px' }}>
              <Box
                sx={{
                  padding: '6px 12px 6px 8px',
                  borderRadius: '100px',
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  alignItems: 'center',
                  // mb: '4px',
                  width: '100px',
                  // maxWidth: '82px',
                  cursor: 'pointer',
                }}
              >
                <Link />{' '}
                <Typography
                  variant="body1"
                  sx={{ fontSize: '11px', fontWeight: '500' }}
                >
                  Official site
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '6px 12px 6px 8px',
                  borderRadius: '100px',
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  alignItems: 'center',
                  width: '80px',
                  cursor: 'pointer',
                }}
              >
                <Discord />{' '}
                <Typography
                  variant="body1"
                  sx={{ fontSize: '11px', fontWeight: '500' }}
                >
                  Discord
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '6px 12px 6px 8px',
                  borderRadius: '100px',
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '4px',
                  alignItems: 'center',
                  // mb: '16px',
                  width: '80px',
                  cursor: 'pointer',
                }}
              >
                <Twitter />{' '}
                <Typography
                  variant="body1"
                  sx={{ fontSize: '11px', fontWeight: '500' }}
                >
                  Twitter
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Modal;
