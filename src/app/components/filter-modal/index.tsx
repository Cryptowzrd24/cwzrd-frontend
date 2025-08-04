import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import styles from './styles';
import { Accordian } from './accordian';
import { Range } from './range';
import { Select } from './select';
import { Switch } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAllFilters,
  selectRangeFilter,
  selectSwitchFilter,
} from '@/app/redux/reducers/filters';
import { RangeFilterKeys } from '@/app/models/range-filter-keys';

type RangeKey = (typeof RangeFilterKeys)[number];
interface Range {
  min: number | null;
  max: number | null;
}
type Ranges = {
  [key: string]: Range;
};
interface FilterModalProps {
  open: boolean;
  setOpen: any;
}

function FilterModal({ open, setOpen }: FilterModalProps) {
  const dispatch = useDispatch();
  const filterItem = useSelector((state: any) => state.filters.filters);
  const filterCount = useSelector(
    (state: any) => state.filters.selectedFilterCount,
  );

  const [expanded, setExpanded] = useState<string | false>(false);
  const [isMineableActive, setIsMineableActive] = useState(false);
  const [isAuditedActive, setIsAuditedActive] = useState(false);
  const [ranges, setRanges] = useState<Ranges>({
    market: { min: null, max: null },
    price: { min: null, max: null },
    percentChange: { min: null, max: null },
    volume: { min: null, max: null },
    circulatingSupply: { min: null, max: null },
  });

  const handleClose = () => setOpen(null);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (panel !== 'cryptoCurrency') {
        // setShowResultsBtn(false);
      }
    };

  const setMinVal = (key: string) => (minVal: number) => {
    setRanges((prevRanges) => ({
      ...prevRanges,
      [key]: { ...prevRanges[key], min: minVal },
    }));
  };

  const setMaxVal = (key: string) => (maxVal: number | null) => {
    setRanges((prevRanges) => ({
      ...prevRanges,
      [key]: { ...prevRanges[key], max: maxVal },
    }));
  };

  const toggleMineable = () => {
    dispatch(
      selectSwitchFilter({ label: 'mineable', isActive: !isMineableActive }),
    );
    setIsMineableActive((prevState: any) => {
      return !prevState;
    });
  };

  const toggleAudited = () => {
    dispatch(
      selectSwitchFilter({ label: 'audited', isActive: !isAuditedActive }),
    );
    setIsAuditedActive((prevState: any) => {
      return !prevState;
    });
  };

  const handleSubmitFilter = (label: RangeKey) => {
    dispatch(
      selectRangeFilter({
        label,
        min: ranges[label].min,
        max: ranges[label].max,
      }),
    );
    setExpanded(false);
  };

  const handleCancelFilter = () => {
    setExpanded(false);
  };

  const handleShowResults = () => {
    setOpen(null);
  };

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
    setExpanded(false);
  };

  // useEffect(() => {
  //   const checkNonNullFilters = () => {
  //     const {
  //       circulatingSupply,
  //       volume,
  //       market,
  //       price,
  //       percentChange,
  //       mineable,
  //       audited,
  //     } = filterItem;

  //     const isRangeFilterSelected = (filter: any) => {
  //       return filter.min !== null || filter.max !== null;
  //     };

  //     return (
  //       isRangeFilterSelected(circulatingSupply) ||
  //       isRangeFilterSelected(volume) ||
  //       isRangeFilterSelected(market) ||
  //       isRangeFilterSelected(price) ||
  //       isRangeFilterSelected(percentChange) ||
  //       mineable !== false ||
  //       audited !== false
  //     );
  //   };

  //   setHasNonNullFilter(checkNonNullFilters());
  // }, [filterItem]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...styles.modalFilterMain,
            width: {
              xs: '90%',
              sm: '436px',
              md: '496px',
            },
            height: {
              xs: '50vh',
              sm: '500px',
              md: '585px',
            },
            maxWidth: {
              xs: '400px',
              sm: '436px',
              md: '496px',
            },
            maxHeight: {
              xs: '600px',
              sm: '500px',
              md: '585px',
            },
            padding: {
              xs: '16px',
              sm: '24px',
              md: '32px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography
                sx={styles.filterHeading}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                More Filters
              </Typography>
            </Box>
            <CloseIcon
              sx={{ cursor: 'pointer', ml: 'auto' }}
              onClick={handleClose}
            />
          </Box>
          <Divider sx={styles.divider} />
          <Box sx={styles.accordian}>
            <Accordian
              name={'All Cryptocurrencies'}
              Component={
                <Select
                  setExpanded={setExpanded}
                  // setShowResultsBtn={setShowResultsBtn}
                />
              }
              expanded={expanded === 'cryptoCurrency'}
              onChange={handleAccordionChange('cryptoCurrency')}
              accordianName="cryptoCurrency"
            />
            <Divider />
            <Accordian
              name={'Market Cap'}
              Component={
                <Range
                  headerName="Market Cap Range"
                  rangeUnit="$"
                  setMinVal={setMinVal('market')}
                  setMaxVal={setMaxVal('market')}
                  range={ranges.market}
                />
              }
              expanded={expanded === 'market'}
              onChange={handleAccordionChange('market')}
              accordianName="market"
            />
            <Divider />
            <Accordian
              name={'Price'}
              Component={
                <Range
                  headerName="Price Range"
                  rangeUnit="$"
                  setMinVal={setMinVal('price')}
                  setMaxVal={setMaxVal('price')}
                  range={ranges.price}
                />
              }
              expanded={expanded === 'price'}
              onChange={handleAccordionChange('price')}
              accordianName="price"
            />
            <Divider />
            <Accordian
              name={'% Change'}
              Component={
                <Range
                  headerName="Change Range"
                  rangeUnit="%"
                  setMinVal={setMinVal('percentChange')}
                  setMaxVal={setMaxVal('percentChange')}
                  range={ranges.percentChange}
                />
              }
              expanded={expanded === 'percentChange'}
              onChange={handleAccordionChange('percentChange')}
              accordianName="percentChange"
            />
            <Divider />
            <Accordian
              name={'Volume'}
              Component={
                <Range
                  headerName="Volume Range"
                  rangeUnit="$"
                  setMinVal={setMinVal('volume')}
                  setMaxVal={setMaxVal('volume')}
                  range={ranges.volume}
                />
              }
              expanded={expanded === 'volume'}
              onChange={handleAccordionChange('volume')}
              accordianName="volume"
            />
            <Divider />
            <Accordian
              name={'Circulating Supply'}
              Component={
                <Range
                  headerName="Circulating Supply Range"
                  rangeUnit=""
                  setMinVal={setMinVal('circulatingSupply')}
                  setMaxVal={setMaxVal('circulatingSupply')}
                  range={ranges.circulatingSupply}
                />
              }
              expanded={expanded === 'circulatingSupply'}
              onChange={handleAccordionChange('circulatingSupply')}
              accordianName="circulatingSupply"
            />
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
              }}
            >
              <Typography
                sx={styles.minableAuditedText}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Mineable
              </Typography>
              <Switch
                sx={styles.switch}
                checked={filterItem.mineable}
                onChange={toggleMineable}
                name="mineable"
              />
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
              }}
            >
              <Typography
                sx={styles.minableAuditedText}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Audited
              </Typography>
              <Switch
                sx={styles.switch}
                checked={filterItem.audited}
                onChange={toggleAudited}
                name="audited"
              />
            </Box>
          </Box>
          <Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.filterFooterBtns}>
              {[
                'market',
                'price',
                'volume',
                'circulatingSupply',
                'percentChange',
              ].includes(expanded || '') ? (
                <Box>
                  <Button
                    sx={styles.closeCancelBtn}
                    size="medium"
                    variant="text"
                    onClick={handleCancelFilter}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={styles.applyBtn}
                    variant="text"
                    onClick={() => handleSubmitFilter(expanded as RangeKey)}
                  >
                    Apply Filter
                  </Button>
                </Box>
              ) : filterCount > 0 ? (
                <Box>
                  <Button
                    sx={styles.closeCancelBtn}
                    variant="text"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </Button>
                  <Button
                    sx={styles.applyBtn}
                    variant="text"
                    onClick={handleShowResults}
                  >
                    Show Results
                  </Button>
                </Box>
              ) : (
                <Button
                  sx={styles.closeCancelBtn}
                  size="medium"
                  variant="text"
                  onClick={handleClose}
                >
                  Close
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default FilterModal;
