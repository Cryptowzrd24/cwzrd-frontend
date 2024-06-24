"use client";
import React, { useState } from 'react'
import Image from 'next/image'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StepIndicator from '../elements/stepIndicator.element'

import styles from "./index.module.scss";
import { Button, Card, Stack, Typography, styled } from '@mui/material';
import CardHeader from './cardHeader.component';

interface ICard2Props {
    heading: string
    items: any
}

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 700,
    padding: '0px 0px 0px 0px',
    margin: "5px 11px 0px 0px",
    lineHeight: 1.5,
    borderColor: '#0063cc',
    fontFamily: [
        "SF Pro Display"
    ].join(','),
});

const Card2 = (props: ICard2Props) => {

    const { heading, items } = props

    const [currentStep, setCurrentStep] = useState(0)

    const stepSetter = (index: number) => {

    }

    return (
        <Card className={styles.market_cap_wrapper}>
            <div className={styles.header_wrapper}>
                <CardHeader
                    heading={heading}
                    currentStep={currentStep}
                    stepSetter={stepSetter}
                />
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
                {/* <div style={{ fontWeight: 700, color: '#7248F7', fontSize: "16px", padding: "0px 15px", position: "absolute", right: "0px", bottom: "12px" }}>
                    More &nbsp; <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                </div> */}

                <Stack direction="row" style={{ justifyContent: "flex-end" }}>
                    <BootstrapButton variant="text" size="medium" sx={{ color: '#7248F7' }}>
                        More &nbsp;  <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                    </BootstrapButton>
                </Stack>
            </div>
        </Card>
    )
}

export default Card2
