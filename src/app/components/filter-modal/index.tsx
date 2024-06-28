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
  min: number;
  max: number | null;
}
interface FilterModalProps {
  open: boolean;
  setOpen: any;
}

function FilterModal({ open, setOpen }: FilterModalProps) {
  const dispatch = useDispatch();
  const filterItem = useSelector((state: any) => state.filters);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [range, setRange] = useState<Range>({ min: 0, max: null });
  const [isMineableActive, setIsMineableActive] = useState(filterItem.mineable);
  const [isAuditedActive, setIsAuditedActive] = useState(filterItem.audited);
  const handleClose = () => setOpen(null);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setRange({ min: 0, max: null });
    };

  const setMinVal = (minVal: number) => {
    setRange((prevRange) => ({ ...prevRange, min: minVal }));
  };

  const setMaxVal = (maxVal: number | null) => {
    setRange((prevRange) => ({ ...prevRange, max: maxVal }));
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
    dispatch(selectRangeFilter({ label, min: range.min, max: range.max }));
  };

  const handleCancelFilter = () => {
    dispatch(clearAllFilters());
    setExpanded(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalFilterMain}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              sx={styles.filterHeading}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              More Filters
            </Typography>
            <CloseIcon
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={handleClose}
            />
          </Box>
          <Divider sx={styles.divider} />
          <Box sx={styles.accordian}>
            <Accordian
              name={'All Cryptocurrencies'}
              Component={<Select />}
              expanded={expanded === 'panel1'}
              onChange={handleAccordionChange('panel1')}
            />
            <Divider />
            <Accordian
              name={'Market Cap'}
              Component={
                <Range
                  headerName="Market Cap Range"
                  rangeUnit="$"
                  setMinVal={setMinVal}
                  setMaxVal={setMaxVal}
                  range={range}
                />
              }
              expanded={expanded === 'market'}
              onChange={handleAccordionChange('market')}
            />
            <Divider />
            <Accordian
              name={'Price'}
              Component={
                <Range
                  headerName="Price Range"
                  rangeUnit="$"
                  setMinVal={setMinVal}
                  setMaxVal={setMaxVal}
                  range={range}
                />
              }
              expanded={expanded === 'price'}
              onChange={handleAccordionChange('price')}
            />
            <Divider />
            <Accordian
              name={'% Change'}
              Component={
                <Range
                  headerName="Change Range"
                  rangeUnit="%"
                  setMinVal={setMinVal}
                  setMaxVal={setMaxVal}
                  range={range}
                />
              }
              expanded={expanded === 'percentChange'}
              onChange={handleAccordionChange('percentChange')}
            />
            <Divider />
            <Accordian
              name={'Volume'}
              Component={
                <Range
                  headerName="Volume Range"
                  rangeUnit="$"
                  setMinVal={setMinVal}
                  setMaxVal={setMaxVal}
                  range={range}
                />
              }
              expanded={expanded === 'volume'}
              onChange={handleAccordionChange('volume')}
            />
            <Divider />
            <Accordian
              name={'Circulating Supply'}
              Component={
                <Range
                  headerName="Circulating Supply Range"
                  rangeUnit=""
                  setMinVal={setMinVal}
                  setMaxVal={setMaxVal}
                  range={range}
                />
              }
              expanded={expanded === 'circulatingSupply'}
              onChange={handleAccordionChange('circulatingSupply')}
            />
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px 0',
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
                checked={isMineableActive}
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
                padding: '5px 0',
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
                checked={isAuditedActive}
                onChange={toggleAudited}
                name="audited"
              />
            </Box>
          </Box>
          <Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.filterFooterBtns}>
              {!expanded ? (
                <Button
                  sx={styles.closeCancelBtn}
                  size="medium"
                  variant="text"
                  onClick={handleClose}
                >
                  Close
                </Button>
              ) : (
                <Button
                  sx={styles.closeCancelBtn}
                  size="medium"
                  variant="text"
                  onClick={handleCancelFilter}
                >
                  Cancel
                </Button>
              )}
              {expanded && (
                <Button
                  sx={styles.applyBtn}
                  variant="text"
                  onClick={() => handleSubmitFilter(expanded as RangeKey)}
                >
                  Apply Filter
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
