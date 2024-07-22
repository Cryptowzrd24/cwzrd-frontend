import React from 'react';

import styles from './index.module.scss';
import { Typography } from '@mui/material';

interface ICardHeaderProps {
  heading: string;

  staticTextColor?: string;
}

const CardHeader = (props: ICardHeaderProps) => {
  const { heading, staticTextColor } = props;

  return (
    <div className={styles.heading}>
      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: '15.6px',
          fontWeight: '700',
          color: `${staticTextColor ?? '#111'}`,
          letterSpacing: '1.4px',
          textTransform: 'uppercase',
        }}
      >
        {heading}
      </Typography>
    </div>
  );
};

export default CardHeader;
