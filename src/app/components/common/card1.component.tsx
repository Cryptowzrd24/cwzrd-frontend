'use client';
import React, { useState } from "react";

import styles from "./index.module.scss";
import StepIndicator from "../elements/stepIndicator.element";
import { getTimeAgoText } from "@/app/helpers/functions";

import frogImage from "@/app/assets/images/frogImage.png";
import Image from "next/image";


interface ICard1Props {
    heading: string
    items: any
}

const Card1 = (props: ICard1Props) => {

    const { heading, items } = props

    const [currentStep, setCurrentStep] = useState(0)

    const stepSetter = (index: number) => {

    }

    return (
        <div className={styles.market_cap_wrapper}>
            <div className={styles.header_wrapper}>
                <div className={styles.heading}>
                    <div>
                        {heading}
                    </div>
                    <div className={styles.stepper}>
                        <StepIndicator currentStep={currentStep} totalSteps={['1', '2', '3']} setStep={(index: number) => stepSetter(index)} />
                    </div>
                </div>
            </div>
            <div className={styles.recently_added}>
                <ul>
                    {items.map((item: any) => (
                        <li key={item.name}>
                            <div className={styles.medal}>
                                <span>{item.medal}</span>
                            </div>
                            <div className={styles.profile_block}>
                                <Image className={styles.image} src={frogImage} alt="" />
                            </div>
                            <div className={styles.title}>
                                <span className="name">{item.text1}</span>
                                <span className="name2">{item.text2}</span>
                            </div>
                            <span className="time-ago">
                                {getTimeAgoText(item.time)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )

}

export default Card1;