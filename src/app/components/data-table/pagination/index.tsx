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
  const totalPages = Math.ceil(length / pageSize);

  return (
    <Box
      sx={{
        paddingTop: '16px',
        borderTop: '1px solid #1111111A',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
          md: 'row',
        },
        alignItems: {
          xs: 'stretch',
          sm: 'center',
          md: 'center',
        },
        position: 'relative',
        justifyContent: {
          xs: 'space-between',
          sm: 'space-between',
          md: 'space-between',
        },
        gap: {
          xs: '16px',
          sm: '0px',
          md: '0px',
        },
        '@media (max-width: 550px)': {
          paddingTop: '12px',
          gap: '12px',
        },
      }}
    >
      {totalPages > 1 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'flex-end',
              md: 'flex-end',
            },
            '@media (max-width: 550px)': {
              justifyContent: 'center',
            },
          }}
        >
          <MuiPagination
            sx={{
              fontFamily: 'Sf Pro Display',
              '& .MuiPaginationItem-root': {
                borderRadius: '8px',
                margin: '0 2px',
                '@media (max-width: 550px)': {
                  minWidth: '36px',
                  height: '36px',
                  fontSize: '13px',
                  margin: '0 1px',
                },
                '@media (max-width: 400px)': {
                  minWidth: '32px',
                  height: '32px',
                  fontSize: '12px',
                },
              },
              '& .MuiPaginationItem-sizeSmall': {
                '@media (max-width: 550px)': {
                  minWidth: '32px',
                  height: '32px',
                },
                '@media (max-width: 400px)': {
                  minWidth: '28px',
                  height: '28px',
                },
              },
              '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#7248F7',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#5A3BC7',
                },
              },
              '& .MuiPaginationItem-page': {
                '&:hover': {
                  backgroundColor: '#F0ECFF',
                },
              },
            }}
            color={'secondary'}
            count={totalPages}
            page={currentPage}
            onChange={onPageChange}
            size="small"
            // showFirstButton
            // showLastButton
            siblingCount={1}
            boundaryCount={1}
          />
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: {
            xs: 'center',
            sm: 'flex-start',
            md: 'flex-start',
          },
          '@media (max-width: 550px)': {
            gap: '2px',
          },
        }}
      >
        <Typography
          sx={{
            color: '#11111166',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '18.2px',
            textAlign: {
              xs: 'center',
              sm: 'left',
              md: 'left',
            },
            '@media (max-width: 550px)': {
              fontSize: '12px',
              lineHeight: '15.6px',
            },
          }}
        >
          Showing {start} - {end} out of {length}
        </Typography>
        {/* {totalPages > 1 && (
          <Typography
            sx={{
              color: '#11111199',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '15.6px',
              textAlign: {
                xs: 'center',
                sm: 'left',
                md: 'left',
              },
              '@media (max-width: 550px)': {
                fontSize: '11px',
                lineHeight: '14.3px',
              },
            }}
          >
            Page {currentPage} of {totalPages}
          </Typography>
        )} */}
      </Box>
    </Box>
  );
};
