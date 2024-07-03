import styles from './index.module.css';
import { LinearProgress } from '@mui/material';
import { priceNumberFormatter } from '@/utils/price-number-formater';
import Link from 'next/link';
import { ITooltipParams } from 'ag-grid-community';

interface CustomTooltipParams extends ITooltipParams {
  location: 'header' | 'cell';
}

export const RowTooltip = (props: CustomTooltipParams) => {
  const percentage =
    (props.data?.circulating_supply / props.data?.max_supply) * 100;
  return (
    <>
      {props.data?.max_supply !== null && props.location === 'cell' && (
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
              {priceNumberFormatter(props.data?.circulating_supply)?.slice(
                0,
                10,
              )}{' '}
              {props.data?.symbol}
            </p>
          </div>
          <div className={styles['row-tooltip-max-supply']}>
            <p>Max Supply</p>
            <p className="text-light">
              {priceNumberFormatter(props.data?.circulating_supply)?.slice(
                0,
                10,
              )}{' '}
              {props.data?.symbol}
            </p>
          </div>
        </div>
      )}
      {props.location === 'header' && (
        <div className={styles['tooltip']}>
          <p>
            The amount of coins that are circulating in the market and are in
            public hands. It is analogous to the flowing shares in the stock
            market.
          </p>
          <Link className={styles['link']} href={'/'}>
            Read More
          </Link>
        </div>
      )}
    </>
  );
};
