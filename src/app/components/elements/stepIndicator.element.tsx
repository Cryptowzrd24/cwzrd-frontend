import React from "react"

import styles from './index.module.scss'; 

const StepIndicator = ({ currentStep, totalSteps, setStep } : IStepProps ) => {
  const renderSteps = () => {
    return totalSteps?.map((step, index) => {
      const isActive = index === currentStep
      return (
        <li
          onClick={() => setStep && setStep(index + 1)}
          key={index}
          className={`${styles.step_item} ${isActive ? styles.active : ''}`}
        >
        </li>
      )
    })
  }

  return (
    <ul className={styles.step_indicator}>
      {renderSteps()}
    </ul>
  )
}

export default StepIndicator