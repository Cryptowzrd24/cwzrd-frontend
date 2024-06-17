"use client";

import React from "react";

import AreaChart from "../elements/areaGraphCard.element";

import { getGraphColor, getPositiveNegativeIcon } from "@/app/helpers/functions";


import styles from "./index.module.scss";


const GraphCard = (props: IMarketCapCardProps) => {
    const { value, percent, graphAttr } = props;
    
    return (
        <div className={styles.market_cap_wrapper}>
            <div className={styles.header_wrapper}>
                <div className={styles.heading}>🔥 Market CAP</div>
                <div className={styles.value}>${value}</div>
                <div style={{
                    fontSize: '14px',
                    color: getPositiveNegativeIcon(percent) === '-' ? '#F56D6D' : '#45CA94'
                }}>
                    {getPositiveNegativeIcon(percent)}{percent}%
                </div>
            </div>
            <div className="h-[100px]">
                {graphAttr.type === 'area' ? <AreaChart data={graphAttr.data} color={getGraphColor(percent)} /> : null}

            </div>
        </div>
    );
};

export default GraphCard;




