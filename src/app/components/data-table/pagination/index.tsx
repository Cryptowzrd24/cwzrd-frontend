import { Box, Typography, Pagination as MuiPagination } from '@mui/material';

interface PaginationTypes {
  length: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const Pagination = ({
  length,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationTypes) => {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, length);
  return (
    <Box
      style={{
        paddingTop: '24px',
        borderTop: '1px solid #1111111A',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
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
        Showing {start} - {end} out of {length}
      </Typography>
      <MuiPagination
        style={{
          fontFamily: 'Sf Pro Display',
        }}
        color={'secondary'}
        count={Math.ceil(length / pageSize)}
        page={currentPage}
        onChange={onPageChange}
      />
    </Box>
  );
};
