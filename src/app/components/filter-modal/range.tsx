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
  const ranges = {
    price: [
      { label: '$0 - $1', min: 0, max: 1 },
      { label: '$0 - $100', min: 0, max: 100 },
      { label: '$101 - $1,000', min: 101, max: 1000 },
      { label: '$1000 +', min: 1000, max: 99999 },
    ],
    market: [
      { label: '> $10B', min: 10000000000, max: null },
      { label: '$1B - $10B', min: 1000000000, max: 10000000000 },
      { label: '$10M - $100M', min: 10000000, max: 100000000 },
      { label: '$1M - $10M', min: 1000000, max: 10000000 },
      { label: '< $1M', min: 0, max: 1000000 },
    ],
    change: [
      { label: '+50%', min: 50, max: 1000 },
      { label: '+10% to +50%', min: 10, max: 50 },
      { label: '0% to 10%', min: 0, max: 10 },
      { label: '-10% to 0%', min: -10, max: 0 },
      { label: '-50% to 10%', min: -50, max: 10 },
      { label: '-50%', min: -100, max: -50 },
    ],
    volume: [
      { label: '> $10B', min: 10000000000, max: null },
      { label: '$1B - $10B', min: 1000000000, max: 10000000000 },
      { label: '$10M - $100M', min: 10000000, max: 100000000 },
      { label: '$1M - $10M', min: 1000000, max: 10000000 },
      { label: '< $1M', min: 0, max: 1000000 },
    ],
    circulating: [
      { label: '> 10B', min: 10000000000, max: null },
      { label: '1B - 10B', min: 1000000000, max: 10000000000 },
      { label: '10M - 100M', min: 10000000, max: 100000000 },
      { label: '1M - 10M', min: 1000000, max: 10000000 },
      { label: '< 1M', min: 0, max: 1000000 },
    ],
  };

  const handleMinValChange = (value: string) => {
    setMinVal(Number(value));
  };
  const handleMaxValChange = (value: string) => {
    if (value !== null) {
      setMaxVal(Number(value));
    } else {
      setMaxVal(value);
    }
  };

  const handleChipRangeClick = (minVal: any, maxVal: any) => {
    handleMinValChange(minVal);
    handleMaxValChange(maxVal);
  };

  const matchingKey = Object.keys(ranges).find((key) =>
    headerName.toLowerCase().includes(key),
  );

  const rangeData = matchingKey
    ? ranges[matchingKey as keyof typeof ranges]
    : null;

  const rangeChips = rangeData
    ? rangeData.map((elem) => (
        <Chip
          key={elem.label}
          sx={{
            '& .MuiChip-icon': {
              marginRight: '-12px',
            },
          }}
          label={elem.label}
          onClick={() => handleChipRangeClick(elem.min, elem.max)}
          clickable
        />
      ))
    : null;

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch' },
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
          <Stack
            direction="row"
            flexWrap={'wrap'}
            justifyContent={'start'}
            gap={2}
          >
            {rangeChips}
          </Stack>
        </Box>
      </Box>
    </div>
  );
};
