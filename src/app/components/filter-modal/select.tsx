import { selectCurrencyTypeFilter } from '@/app/redux/reducers/filters';
import { Button, Divider, Stack } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Select = () => {
  const dispatch = useDispatch();
  const styles = {
    buttonText: {
      display: 'flex',
      justifyContent: 'start',
    },
  };

  const handleCoinTypeSelect = (type: string) => {
    dispatch(selectCurrencyTypeFilter(type));
  };

  return (
    <div>
      <Stack direction="column" spacing={1}>
        <Button
          size="small"
          sx={styles.buttonText}
          variant="text"
          onClick={() => handleCoinTypeSelect('allCryptoCurrencies')}
        >
          All Cryptocurrencies
        </Button>
        <Divider />
        <Button
          size="small"
          sx={styles.buttonText}
          variant="text"
          onClick={() => handleCoinTypeSelect('coins')}
        >
          Coins
        </Button>
        <Divider />
        <Button
          size="small"
          sx={styles.buttonText}
          variant="text"
          onClick={() => handleCoinTypeSelect('tokens')}
        >
          Tokens
        </Button>
      </Stack>
    </div>
  );
};
