import React from 'react';

import styles from './index.module.scss';

const StepIndicator = ({
  currentStep,
  totalSteps,
  setStep,
  invertColor,
}: IStepProps) => {
  const renderSteps = () => {
    return totalSteps?.map((step, index) => {
      const isActive = Number(step) === currentStep;
      return (
        <li
          onClick={() => setStep && setStep(index + 1)}
          key={index}
          className={`${invertColor ? styles.step_itemWhite : styles.step_itemDefault} ${isActive ? (invertColor ? styles.activeWhite : styles.activeDefault) : ''}`}
        ></li>
      );
    });
  };

  return <ul className={styles.step_indicator}>{renderSteps()}</ul>;
};

export default StepIndicator;
