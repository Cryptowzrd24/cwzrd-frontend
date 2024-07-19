import React, { useEffect, useState } from 'react';

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
  const [showResultsBtn, setShowResultsBtn] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(true);
  const [hasNonNullFilter, setHasNonNullFilter] = useState(false);
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
        setShowResultsBtn(false);
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
    setIsMineableActive((prevState: any) => {
      const newState = !prevState;
      dispatch(selectSwitchFilter({ label: 'mineable', isActive: newState }));
      return newState;
    });
  };

  const toggleAudited = () => {
    setIsAuditedActive((prevState: any) => {
      const newState = !prevState;
      dispatch(selectSwitchFilter({ label: 'audited', isActive: newState }));
      return newState;
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
    setShowCloseBtn(false);
    setShowResultsBtn(true);
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
    setShowResultsBtn(false);
    setShowCloseBtn(true);
  };

  useEffect(() => {
    const checkNonNullFilters = () => {
      const {
        circulatingSupply,
        volume,
        market,
        price,
        percentChange,
        mineable,
        audited,
      } = filterItem;

      const isRangeFilterSelected = (filter: any) => {
        return filter.min !== null || filter.max !== null;
      };

      return (
        isRangeFilterSelected(circulatingSupply) ||
        isRangeFilterSelected(volume) ||
        isRangeFilterSelected(market) ||
        isRangeFilterSelected(price) ||
        isRangeFilterSelected(percentChange) ||
        mineable !== false ||
        audited !== false
      );
    };

    setHasNonNullFilter(checkNonNullFilters());
  }, [filterItem]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={styles.modalFilterMain}
          style={{ height: '585px', overflowY: 'scroll', width: '436px' }}
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
                  setShowResultsBtn={setShowResultsBtn}
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
                value={isMineableActive}
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
                size="medium"
                sx={styles.switch}
                checked={filterItem.audited}
                onChange={toggleAudited}
                name="audited"
                value={isAuditedActive}
              />
            </Box>
          </Box>
          <Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.filterFooterBtns}>
              {!expanded &&
                showCloseBtn &&
                (filterCount === null || filterCount === 0) && (
                  <Button
                    sx={styles.closeCancelBtn}
                    size="medium"
                    variant="text"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                )}
              {expanded && expanded !== 'cryptoCurrency' && (
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
              )}
              {((!expanded && !showCloseBtn) ||
                ((filterItem.mineable || !expanded) && hasNonNullFilter) ||
                ((filterItem.audited || !expanded) && hasNonNullFilter) ||
                (filterItem.cryptoCurrency && showResultsBtn)) && (
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
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default FilterModal;
