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

interface FilterModalProps {
  open: boolean;
  setOpen: any;
}

function FilterModal({ open, setOpen }: FilterModalProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleClose = () => setOpen(null);

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
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
              Component={<Range headerName="Market Cap Range" rangeUnit="$" />}
              expanded={expanded === 'panel2'}
              onChange={handleAccordionChange('panel2')}
            />
            <Divider />
            <Accordian
              name={'Price'}
              Component={<Range headerName="Price Range" rangeUnit="$" />}
              expanded={expanded === 'panel3'}
              onChange={handleAccordionChange('panel3')}
            />
            <Divider />
            <Accordian
              name={'% Change'}
              Component={<Range headerName="Change Range" rangeUnit="%" />}
              expanded={expanded === 'panel4'}
              onChange={handleAccordionChange('panel4')}
            />
            <Divider />
            <Accordian
              name={'Volume'}
              Component={<Range headerName="Volume Range" rangeUnit="$" />}
              expanded={expanded === 'panel5'}
              onChange={handleAccordionChange('panel5')}
            />
            <Divider />
            <Accordian
              name={'Circulating Supply'}
              Component={
                <Range headerName="Circulating Supply Range" rangeUnit="" />
              }
              expanded={expanded === 'panel6'}
              onChange={handleAccordionChange('panel6')}
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
                // checked={state.gilad}
                // onChange={handleChange}
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
                // checked={state.gilad}
                // onChange={handleChange}
                name="audited"
              />
            </Box>
          </Box>
          <Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.filterFooterBtns}>
              <Button size="medium" variant="text" onClick={handleClose}>
                Close
              </Button>
              {expanded && (
                <Button sx={styles.applyBtn} variant="text">
                  Apply
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
