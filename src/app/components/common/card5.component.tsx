'use client';
import { Card, Typography } from '@mui/material'
import React, { useState } from 'react'

import styles from "./index.module.scss";
import StepIndicator from '../elements/stepIndicator.element';
import Image from 'next/image';
import CardHeader from './cardHeader.component';

interface ICard5Props {
    heading: string
    image: any
    text: string
}

const Card5 = (props: ICard5Props) => {

    const { heading, image, text } = props;

    const [currentStep, setCurrentStep] = useState(0)

    const stepSetter = (index: number) => {

    }

    return (
        <Card className={styles.market_cap_wrapper}
            style={{border: "1px solid #1111110D",boxShadow: "0px 4px 28px 0px #0000000D",}}
        >

            <div className={styles.header_wrapper}>
                <CardHeader
                    heading={heading}
                    currentStep={currentStep}
                    stepSetter={stepSetter} 
                />
                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    <Image
                        src={image}
                        alt="VECTOR"
                    />
                </div>
                <div style={{marginTop: "25px"}}>
                    <Typography sx={{
                        color: "rgba(17, 17, 17, 0.8)",
                        fontFamily: 'SF Pro Display',
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20.8px",
                        textAlign: "center",
                        letterSpacing:"1px",
                    }} >
                        {text}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}

export default Card5
