"use client";
import React, { useState } from 'react'
import Image from 'next/image'

import StepIndicator from '../elements/stepIndicator.element'

import styles from "./index.module.scss";
import { Card, Typography } from '@mui/material';

interface ICard2Props {
    heading: string
    items: any
}

const Card2 = (props: ICard2Props) => {

    const { heading, items } = props

    const [currentStep, setCurrentStep] = useState(0)

    const stepSetter = (index: number) => {

    }

    return (
        <Card className={styles.market_cap_wrapper}>
            <div className={styles.header_wrapper}>
                <div className={styles.heading}>
                    <Typography sx={{ fontSize: "14px", lineHeight: "18px", fontWeight: "600" }}>
                        {heading}
                    </Typography>
                    <div className={styles.stepper}>
                        <StepIndicator currentStep={currentStep} totalSteps={['1', '2', '3']} setStep={(index: number) => stepSetter(index)} />
                    </div>
                </div>
            </div>
            <div className={styles.recently_added}>
                <ul>
                    {items.map((item: any) => (
                        <li key={item.name}>
                            <div className={styles.profile}>
                                <div className={styles.medal}>
                                    <span>{item.medal}</span>
                                </div>
                                <div className={styles.title} style={{ marginLeft: "unset" }}>
                                    <span>{item.text1}</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "5px" }}>
                                {item.images.map((img: any, index: number) => (
                                    <div className={styles.profile_block}>
                                        <Image className={styles.image} src={img} alt="" />
                                    </div>
                                ))

                                }
                            </div>
                        </li>
                    ))}
                </ul>
                <div style={{ fontWeight: 700, color: '#7248F7', fontSize: "16px", padding: "0px 15px", position: "absolute", right: "0px", bottom: "12px" }}>
                    More &gt;
                </div>
            </div>
        </Card>
    )
}

export default Card2
