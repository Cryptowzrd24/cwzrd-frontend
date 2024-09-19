import { Box, Popover, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CopyIcon from '../../../../../../public/icons/nft/copy';
import { CustomCellRendererProps } from 'ag-grid-react';

export const SalesAddresses = (props: CustomCellRendererProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleCopy = (text: string, event: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setAnchorEl(event.currentTarget);
        setPopoverOpen(true);
        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <Stack sx={{ mt: '8px' }}>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '13px',
              fontWeight: '400',
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(17, 17, 17, 1)',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              <span
                style={{
                  color: 'rgba(17, 17, 17, 0.8)',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                From:{' '}
              </span>
              {props?.data?.addresses?.from}
            </span>
            <span
              style={{ cursor: 'pointer' }}
              onClick={(e: any) =>
                handleCopy(props?.data?.addresses?.from || '', e)
              }
            >
              <CopyIcon />
            </span>{' '}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              fontSize: '13px',
              fontWeight: '400',
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(17, 17, 17, 1)',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              <span
                style={{
                  color: 'rgba(17, 17, 17, 0.8)',
                  fontSize: '13px',
                  fontWeight: '400',
                }}
              >
                To:{' '}
              </span>
              {props?.data?.addresses?.to}
            </span>
            <span
              style={{ cursor: 'pointer' }}
              onClick={(e) => handleCopy(props?.data?.addresses?.from || '', e)}
            >
              <CopyIcon />
            </span>{' '}
          </Typography>
        </Box>
      </Stack>
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={() => setPopoverOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            padding: '8px 16px',
            background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Copied to clipboard!
        </Box>
      </Popover>
    </>
  );
};
