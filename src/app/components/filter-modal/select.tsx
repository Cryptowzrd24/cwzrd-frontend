import { selectCurrencyTypeFilter } from '@/app/redux/reducers/filters';
import { Box, Button, Divider, Stack } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import checkedIcon from '../../assets/icons/checked-tick.svg';
import Image from 'next/image';

interface SelectProps {
  setExpanded: (expanded: string | false) => void;
  setShowResultsBtn: (val: boolean) => void;
}
export const Select = ({ setExpanded, setShowResultsBtn }: SelectProps) => {
  const dispatch = useDispatch();

  const filterItem = useSelector((state: any) => state.filters.filters);

  const styles = {
    buttonText: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  const handleCoinTypeSelect = (type: string) => {
    dispatch(selectCurrencyTypeFilter(type));
    setExpanded(false);
    setShowResultsBtn(true);
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
          <Box component="span">All Cryptocurrencies</Box>
          {(filterItem.cryptoCurrency === 'allCryptoCurrencies' ||
            filterItem.cryptoCurrency === null) && (
            <Image src={checkedIcon} alt="" />
          )}
        </Button>
        <Divider />
        <Button
          size="small"
          sx={styles.buttonText}
          variant="text"
          onClick={() => handleCoinTypeSelect('coins')}
        >
          <Box component="span">Coins</Box>
          {filterItem.cryptoCurrency === 'coins' && (
            <Image src={checkedIcon} alt="" />
          )}
        </Button>
        <Divider />
        <Button
          size="small"
          sx={styles.buttonText}
          variant="text"
          onClick={() => handleCoinTypeSelect('tokens')}
        >
          <Box component="span">Tokens</Box>
          {filterItem.cryptoCurrency === 'tokens' && (
            <Image src={checkedIcon} alt="" />
          )}
        </Button>
      </Stack>
    </div>
  );
};
