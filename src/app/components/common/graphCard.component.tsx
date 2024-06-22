"use client";

import React, { useState } from "react";

import StepIndicator from "../elements/stepIndicator.element";
import AreaChart from "../elements/areaGraphCard.element";

import { getGraphColor, getPositiveNegativeIcon } from "@/app/helpers/functions";


import styles from "./index.module.scss";
import BarChart from "../elements/barGraphCard.element";
import { Card, Typography } from "@mui/material";



const GraphCard = (props: IMarketCapCardProps) => {
    const { heading, value, percent, graphAttr } = props;
    const [currentStep, setCurrentStep] = useState(0)

    const stepSetter = (index: number) => {

    }

    return (
        <Card className={styles.market_cap_wrapper}>
            <div className={styles.header_wrapper}>
            <div className={styles.heading}>
                    <Typography sx={{fontSize: "14px", lineHeight: "18px", fontWeight: "600"}}>
                        {heading}
                    </Typography>
                    <div className={styles.stepper}>
                        <StepIndicator currentStep={currentStep} totalSteps={['1', '2', '3']} setStep={(index: number) => stepSetter(index)} />
                    </div>
                </div>
                <div className={styles.value}>{value?.prefix}{value.data}{value?.postfix}</div>
                <div style={{
                    fontSize: '14px',
                    color: getPositiveNegativeIcon(percent) === '-' ? '#F56D6D' : '#45CA94'
                }}>
                    {getPositiveNegativeIcon(percent)}{Math.abs(percent)}%
                </div>
            </div>
            <div>
                {graphAttr.type === 'area' ? <AreaChart data={graphAttr.data} color={getGraphColor(percent)} /> : null}
                {graphAttr.type === 'bar' ? <BarChart data={graphAttr.data} color={getGraphColor(percent)} /> : null}

            </div>
        </Card>
    );
};

export default GraphCard;




