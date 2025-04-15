'use client';
import React, { useState, useEffect, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, Button, Typography } from '@mui/material';
import VerifiedEmail from '../../../../../public/icons/verifiedEmail';
import Error from '../../../../../public/icons/error';
import { verifyEmail } from '@/app/services';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const VerifyEmailModal = ({ verificationKey }: any) => {
  const [isSuccess, setIsSuccess] = useState({});
  const hasVerifiedRef = useRef(false);

  const verify = async () => {
    const response = await verifyEmail(verificationKey);
    setIsSuccess(response);
  };

  useEffect(() => {
    if (!hasVerifiedRef.current) {
      verify();
      hasVerifiedRef.current = true;
    }
  }, []);

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: '16px',
            width: '500px',
            paddingBlock: '18px',
            '@media (max-width: 576px)': {
              margin: '10px',
            },
          },
        }}
        open={true}
      >
        <DialogContent sx={{ '@media (max-width: 576px)': { padding: 0 } }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {/* @ts-expect-error: isSuccess may not have error */}
            {isSuccess?.error ? <Error /> : <VerifiedEmail />}
            <Typography
              sx={{
                marginBlock: '14px',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '28px',
                textAlign: 'center',
                wordSpacing: '3.5px',
                userSelect: 'none',

                '@media (max-width: 576px)': {
                  fontSize: '20px !important',
                },
              }}
            >
              Account Verification
            </Typography>
            <Typography
              sx={{
                userSelect: 'none',
                fontWeight: '500',
                fontSize: '16px',
                textAlign: 'center',
                color: 'rgb(107,118,138)',
                overflowWrap: 'break-word',
                lineHeight: '25px',
                letterSpacing: '1.2px',
              }}
            >
              {/* @ts-expect-error: isSucces may not have error */}
              {isSuccess?.error
                ? // @ts-expect-error : isSuccess may not have error
                  isSuccess.error
                : isSuccess && (
                    <>
                      Your email has been verified.
                      <br></br> Please login to continue using{' '}
                      <b
                        style={{
                          background:
                            'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        CRYPTOWZRD
                      </b>{' '}
                      <br></br>
                      with full features!
                    </>
                  )}
            </Typography>

            <Button
              sx={{
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                height: '50px',
                color: 'white',
                marginTop: '5px',
              }}
              href="/market/coin"
              id="go-back-btn"
            >
              <ArrowBackIosNewIcon fontSize="small" />{' '}
              <Typography sx={{ color: 'white', marginInline: '5px' }}>
                Go back
              </Typography>
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default VerifyEmailModal;
