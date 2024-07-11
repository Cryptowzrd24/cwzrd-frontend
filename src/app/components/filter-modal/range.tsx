import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Chip, Stack, Typography } from '@mui/material';

import styles from './styles';

interface RangeProps {
  headerName: string;
  rangeUnit: string;
  setMinVal: (val: number) => void;
  setMaxVal: (val: number) => void;
  range: { min: number | null; max: null | number };
}

export const Range = ({
  headerName,
  rangeUnit,
  setMinVal,
  setMaxVal,
  range,
}: RangeProps) => {
  const rangeData = [
    { label: '$0 - $1', min: 0, max: 1 },
    { label: '$0 - $100', min: 0, max: 100 },
    { label: '$101 - $1,000', min: 101, max: 1000 },
    { label: '$1000 +', min: 1000, max: 99999 },
  ];

  const handleMinValChange = (value: string) => {
    setMinVal(Number(value));
  };
  const handleMaxValChange = (value: string) => {
    setMaxVal(Number(value));
  };

  const handleChipRangeClick = (minVal: any, maxVal: any) => {
    handleMinValChange(minVal);
    handleMaxValChange(maxVal);
  };

  const rangeChips = rangeData.map((elem) => {
    return (
      <Chip
        sx={{
          '& .MuiChip-icon': {
            marginRight: '-12px',
          },
        }}
        label={elem.label}
        onClick={() => handleChipRangeClick(elem.min, elem.max)}
        clickable
      />
    );
  });

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
            onChange={(e) => handleMinValChange(e.target.value)}
            value={range.min}
            type="number"
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
            onChange={(e) => handleMaxValChange(e.target.value)}
            value={range.max}
            type="number"
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
