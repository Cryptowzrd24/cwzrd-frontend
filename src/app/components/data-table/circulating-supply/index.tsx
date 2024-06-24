import { priceNumberFormatter } from '@/utils/price-number-formater';
import { CustomCellRendererProps } from 'ag-grid-react';
import React from 'react';
import styles from './index.module.css';

import { LinearProgress } from '@mui/material';

export const CirculatingSupply = (props: CustomCellRendererProps) => {
  const val =
    props.value === 0
      ? '$0'
      : '$' + priceNumberFormatter(props.value)?.slice(0, 10);

  const percentage =
    (props.data.circulating_supply / props.data.max_supply) * 100;
  return (
    <div className={styles['circulating-comp']}>
      <p className={styles['price-main']}>{`${val} ${props.data.symbol}`}</p>
      {props.data.max_supply !== null && (
        <div className={styles['row-tooltip-progress-bar']}>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              borderRadius: '5px',
              width: '100%',
              height: '5px',
              backgroundColor: 'rgba(17, 17, 17, 0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'rgba(17, 17, 17, 0.2)',
              },
            }}
          />
        </div>
      )}
    </div>
  );
};
