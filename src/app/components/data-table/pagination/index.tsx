import { Box, Typography, Pagination as MuiPagination } from '@mui/material';

export const Pagination = () => {
  return (
    <Box
      style={{
        paddingTop: '24px',
        borderTop: '1px solid #1111111A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        style={{
          color: '#11111166',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '20.8px',
        }}
      >
        1-10 of 9,383 assets
      </Typography>
      <MuiPagination
        style={{
          fontFamily: 'Sf Pro Display',
        }}
        color={'secondary'}
        count={10}
      />
    </Box>
  );
};
