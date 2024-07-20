import React from 'react';

import styles from './index.module.scss';
import { Typography } from '@mui/material';
import StepIndicator from '../elements/stepIndicator.element';

interface ICardHeaderProps {
  heading: string;
  stepSetter: (index: number) => void;
  currentStep: number;
  staticTextColor?: string;
}

const CardHeader = (props: ICardHeaderProps) => {
  const { heading, stepSetter, currentStep, staticTextColor } = props;

  return (
    <div className={styles.heading}>
      <Typography
        sx={{
          fontSize: '12px',
          lineHeight: '18.2px',
          fontWeight: '700',
          color: `${staticTextColor ?? 'unset'}`,
          letterSpacing: '1.4px',
          textTransform: 'uppercase',
        }}
      >
        {heading}
      </Typography>
      <div className={styles.stepper}>
        <StepIndicator
          currentStep={currentStep}
          invertColor={!!staticTextColor}
          totalSteps={['1', '2']}
          setStep={(index: number) => stepSetter(index)}
        />
      </div>
    </div>
  );
};

export default CardHeader;
