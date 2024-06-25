"use client"
import React, { useState } from 'react'
import CardHeader from './cardHeader.component'
import { Card, Typography } from '@mui/material'

import styles from "./index.module.scss";
import Avatars from '../elements/avatarGroup.element';


interface ICard8Props {
    heading: string
    staticTextColor?: string
    text1:  string
    text2: string
    bg?: string
    footerButton?: string 

}

const Card8 = (props: ICard8Props) => {

    const { heading, staticTextColor, text1, text2, bg} = props

    const [currentStep, setCurrentStep] = useState(0)


    const stepSetter = (index: number) => {

    }

    return (
        <Card className={styles.market_cap_wrapper}
            style={{
                background: bg ?? "#FFFFFF",
                boxShadow: "0px 4px 28px 0px rgba(0, 0, 0, 0.05)"
            }}
        >
            <div className={styles.header_wrapper}>
                <CardHeader
                    heading={heading}
                    currentStep={currentStep}
                    stepSetter={stepSetter}
                    staticTextColor={staticTextColor}
                />

                <div style={{display: "flex", marginTop: "35px"}}>
                    <Avatars />
                </div>

                <div style={{ marginTop: "15px" }}>
                    <Typography sx={{
                        background: "rgba(17, 17, 17, 1)",
                        fontFamily: 'SF Pro Display',
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "28.8px",
                        letterSpacing: "1px",
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text'
                    }} >
                        {text1}
                    </Typography>
                </div>
                <div style={{ marginTop: "5px" }}>
                    <Typography sx={{
                        background: "linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)",
                        fontFamily: 'SF Pro Display',
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "28.8px",
                        letterSpacing: "1px",
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text'
                    }} >
                        {text2}
                    </Typography>
                </div>

            </div>
        </Card>
    )
}

export default Card8
