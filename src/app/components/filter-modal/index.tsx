import React from 'react';

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

interface FilterModalProps {
  open: boolean;
  setOpen: any;
}

function FilterModal({ open, setOpen }: FilterModalProps) {
  const handleClose = () => setOpen(null);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalFilterMain}>
          <Typography
            sx={styles.filterHeading}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            More Filters
            <Divider sx={styles.divider} />
          </Typography>
          <Box sx={styles.accordian}>
            <Accordian name={'All Cryptocurrencies'} Component={<Select />} />
            <Divider />
            <Accordian
              name={'Market Cap'}
              Component={<Range headerName="Market Cap Range" rangeUnit="$" />}
            />
            <Divider />
            <Accordian
              name={'Price'}
              Component={<Range headerName="Price Range" rangeUnit="$" />}
            />
            <Divider />
            <Accordian
              name={'% Change'}
              Component={<Range headerName="Change Range" rangeUnit="%" />}
            />
            <Divider />
            <Accordian
              name={'Volume'}
              Component={<Range headerName="Volume Range" rangeUnit="$" />}
            />
            <Divider />
            <Accordian
              name={'Circulating Supply'}
              Component={
                <Range headerName="Circulating Supply Range" rangeUnit="" />
              }
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
                // checked={state.gilad}
                // onChange={handleChange}
                name="audited"
              />
            </Box>
          </Box>
          <Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.filterFooterBtns}>
              <Button size="medium" variant="text">
                Close
              </Button>
              {/* <Button variant="text">Apply</Button> */}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default FilterModal;
