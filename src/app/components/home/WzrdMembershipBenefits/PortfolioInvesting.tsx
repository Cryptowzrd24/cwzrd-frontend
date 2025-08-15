import { Box, Typography } from '@mui/material'
import React from 'react'
import PortfolioInvestingImg from "../../../../../public/images/home/wzrd_membership_benefits/portfolio_investing_img.svg"
import Image from 'next/image'

type Props = {}

const PortfolioInvesting = (props: Props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            borderRadius: "24px",
            height: '423px',
            alignContent: "center",
            padding: '24px',
            gap: "20px",
            boxSizing: "border-box",
            justifyContent: "space-between",
            backgroundColor: 'white',
            width:{xs:"95%",sm:"270px"},
            margin:"0 auto"
        }}>
            <Image src={PortfolioInvestingImg} width={200} height={200} alt="portflio investing" />
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"6px"
            }}>
                <Typography sx={{
                    fontWeight: "500",
                    fontSize: "16px"
                }}>
                    Portfolio Investing
                </Typography>
                <Typography sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "1.6"
                }}>
                    Our platform provides insights and strategies for long-term wealth accumulation through smart portfolio investing.
                </Typography>
            </Box>
        </Box>
    )
}

export default PortfolioInvesting