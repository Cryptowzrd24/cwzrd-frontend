'use client';
import { Box, MenuItem, Select } from '@mui/material';
import styles from './index.module.css';
import React, { useState } from 'react';
import { PageArrowDownIcon } from '../../../../../public/icons/Grid-Header/pageArrowDown';
import { FilterIcon } from '../../../../../public/icons/Grid-Header/filter';
import { LineGraphIcon } from '../../../../../public/icons/lineGraph';
import { ExpandIcon } from '../../../../../public/icons/expandIcon';
import { DownloadIcon } from '../../../../../public/icons/downloadIcon';

interface GraphFilterProps {
  selectedFilter: string;
  setSelectedFilter: (val: string) => void;
}

const stylesPage = {
  select: (width: any) => ({
    '& .MuiSelect-select': {
      width: width,
      padding: '5px 12px',
      background: '#f3f3f3',
      color: 'rgba(17, 17, 17, 1)',
      fontSize: '11px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      paddingRight: '20px !important',
    },
    '& .MuiSvgIcon-root': {
      color: 'rgba(17, 17, 17, 1)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-icon': {
      right: '9px',
      top: '6px',
    },
    backgroundColor: '#f3f3f3',
    borderRadius: '8px',
  }),
};

function GraphFilter({ selectedFilter, setSelectedFilter }: GraphFilterProps) {
  const [volumeValue, setVolumeValue] = useState('24h');
  const volumes = ['24h', '3d', '7d', '1m', '6m', '1y'];
  const getSelectClass = (value: any) => {
    return value === 100 || value === '24h' || value === '1m' ? '34px' : '26px';
  };
  const handleChangeVolume = (event: any) => {
    setVolumeValue(event.target.value);
  };

  const handleSelectedFilter = (val: string) => {
    setSelectedFilter(val);
  };

  return (
    <div className={styles.graphCustomHeader}>
      <div className={styles.filterHeaderSecOne}>
        <div>
          <Select
            value={volumeValue}
            onChange={handleChangeVolume}
            disableUnderline
            sx={stylesPage.select(getSelectClass(volumeValue))}
            IconComponent={(props) => (
              <Box
                component="svg"
                sx={{
                  width: '20px',
                  height: '20px',
                  color: 'rgba(17, 17, 17, 1)',
                }}
                {...props}
              >
                <PageArrowDownIcon stroke={true} />
              </Box>
            )}
          >
            {volumes.map((v: any) => (
              <MenuItem
                key={v}
                value={v}
                // onClick={() => setVolume(v)}
                sx={{
                  '&.MuiMenuItem-root.MuiButtonBase-root': {
                    width: '61px',
                    padding: '0px 20px !important',
                    borderRadius: '4px',
                    height: '24px',
                    marginLeft: '3px',
                    fontSize: '11px !important',
                    fontWeight:
                      volumeValue === v
                        ? '700 !important'
                        : 'normal !important',
                  },
                }}
              >
                {v}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Box
            onClick={() => handleSelectedFilter('filter')}
            className={
              selectedFilter === 'filter'
                ? `${styles.iconBoxFilterSelected}`
                : `${styles.iconBoxFilter}`
            }
          >
            <FilterIcon isDark={true} />
          </Box>
          <Box
            className={
              selectedFilter === 'candlestick'
                ? `${styles.iconBoxCandlestickSelected}`
                : `${styles.iconBoxCandlestick}`
            }
            onClick={() => handleSelectedFilter('candlestick')}
          >
            <LineGraphIcon />
          </Box>
        </div>
      </div>
      <div className={styles.filterHeaderSecTwo}>
        <div style={{ width: '32px', height: '24px' }}>
          <DownloadIcon />
        </div>
        <div
          style={{
            width: '32px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ExpandIcon />
        </div>
      </div>
    </div>
  );
}

export default GraphFilter;
