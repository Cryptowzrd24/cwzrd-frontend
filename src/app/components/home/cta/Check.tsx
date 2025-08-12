import { Box } from '@mui/material';
import React from 'react';

const Check = () => {
  return (
    <Box
      sx={{
        padding: '8px 8px 5px',
        displat: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100px 100px 0px 100px',
        background: '#22C833',
        position: 'absolute',
        right: { xs: '10px', lg: '45px' },
        bottom: '100px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M14.3538 4.85403L6.35378 12.854C6.30735 12.9005 6.2522 12.9374 6.1915 12.9626C6.13081 12.9877 6.06574 13.0007 6.00003 13.0007C5.93433 13.0007 5.86926 12.9877 5.80856 12.9626C5.74786 12.9374 5.69272 12.9005 5.64628 12.854L2.14628 9.35403C2.05246 9.26021 1.99976 9.13296 1.99976 9.00028C1.99976 8.8676 2.05246 8.74035 2.14628 8.64653C2.2401 8.55271 2.36735 8.5 2.50003 8.5C2.63272 8.5 2.75996 8.55271 2.85378 8.64653L6.00003 11.7934L13.6463 4.14653C13.7401 4.05271 13.8674 4 14 4C14.1327 4 14.26 4.05271 14.3538 4.14653C14.4476 4.24035 14.5003 4.3676 14.5003 4.50028C14.5003 4.63296 14.4476 4.76021 14.3538 4.85403Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </Box>
  );
};

export default Check;
