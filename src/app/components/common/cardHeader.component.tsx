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
          fontSize: { xs: '14px !important', sm: '16px !important' },
          lineHeight: '15.6px',
          marginBottom: '10px',
          fontWeight: '600',
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
