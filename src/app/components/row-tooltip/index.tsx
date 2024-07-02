import { CustomCellRendererProps } from 'ag-grid-react';
import styles from './index.module.css';
import { LinearProgress } from '@mui/material';
import { priceNumberFormatter } from '@/utils/price-number-formater';

export const RowTooltip = (props: CustomCellRendererProps) => {
  const percentage =
    (props.data.circulating_supply / props.data.max_supply) * 100;
  return (
    <div className={styles['row-tooltip']}>
      <div className={styles['row-tooltip-percent']}>
        <p>Percentage</p>
        <p>{percentage.toFixed(2)}%</p>
      </div>
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
      <div className={styles['row-tooltip-circulating-supply']}>
        <p>Circulating Supply</p>
        <p className="text-light">
          {priceNumberFormatter(props.data.circulating_supply)?.slice(0, 10)}{' '}
          {props.data.symbol}
        </p>
      </div>
      <div className={styles['row-tooltip-max-supply']}>
        <p>Max Supply</p>
        <p className="text-light">
          {priceNumberFormatter(props.data.circulating_supply)?.slice(0, 10)}{' '}
          {props.data.symbol}
        </p>
      </div>
    </div>
  );
};
