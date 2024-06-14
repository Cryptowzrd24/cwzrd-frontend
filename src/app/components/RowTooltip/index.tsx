import styles from './index.module.css';
import { LinearProgress } from '@mui/material';

export const RowTooltip = () => {
  return (
    <div className={styles['row-tooltip']}>
      <div className={styles['row-tooltip-percent']}>
        <p>Percentage</p>
        <p>53.56%</p>
      </div>
      <div className={styles['row-tooltip-progress-bar']}>
        <LinearProgress
          variant="determinate"
          value={70}
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
        <p className="text-light">19,720,370 BTC</p>
      </div>
      <div className={styles['row-tooltip-max-supply']}>
        <p>Max Supply</p>
        <p className="text-light">21,000,000 BTC</p>
      </div>
    </div>
  );
};
