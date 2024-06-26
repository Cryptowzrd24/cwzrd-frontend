import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Chip, Stack, Typography } from '@mui/material';

import styles from './styles';

interface RangeProps {
  headerName: string;
  rangeUnit: string;
}

export const Range = ({ headerName, rangeUnit }: RangeProps) => {
  const rangeChips = ['$0 - $1', '$0 - $100', '$101 - $1,000', '$1000 +'].map(
    (elem) => {
      return (
        <Chip
          sx={{
            '& .MuiChip-icon': {
              marginRight: '-12px',
            },
          }}
          label={elem}
          //   onClick={handleOpenFilterModal}
          clickable
        />
      );
    },
  );
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          sx={styles.accordianHeaderText}
          id="modal-modal-title"
          variant="h6"
          component="h6"
        >
          {headerName}
        </Typography>
        <Box sx={styles.priceRangeBox}>
          <TextField
            sx={styles.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            placeholder={`${rangeUnit}0`}
          />
          <Typography
            sx={styles.accordianHeaderText}
            id="modal-modal-title"
            variant="h6"
            component="h6"
          >
            to
          </Typography>
          <TextField
            sx={styles.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            placeholder={`${rangeUnit}1000`}
          />
        </Box>
        <Box sx={styles.mostSearchedBox}>
          <Typography
            sx={styles.mostSearchedHeading}
            id="modal-modal-title"
            variant="h6"
            component="h6"
          >
            Most Searched ranges
          </Typography>
          <Stack direction="row" spacing={2}>
            {rangeChips}
          </Stack>
        </Box>
      </Box>
    </div>
  );
};
