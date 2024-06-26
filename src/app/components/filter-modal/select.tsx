import { Button, Divider, Stack } from '@mui/material';
import React from 'react';

export const Select = () => {
  const styles = {
    buttonText: {
      display: 'flex',
      justifyContent: 'start',
    },
  };

  return (
    <div>
      <Stack direction="column" spacing={1}>
        <Button size="small" sx={styles.buttonText} variant="text">
          All Cryptocurrencies
        </Button>
        <Divider />
        <Button size="small" sx={styles.buttonText} variant="text">
          Coins
        </Button>
        <Divider />
        <Button size="small" sx={styles.buttonText} variant="text">
          Tokens
        </Button>
      </Stack>
    </div>
  );
};
