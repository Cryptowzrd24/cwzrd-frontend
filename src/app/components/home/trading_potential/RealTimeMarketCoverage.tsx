import { Box, Button } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack'

type Props = {}

const RealTimeMarketCoverage = (props: Props) => {
    return (
        <Box sx={{
            width: '100%',
            height: "330px",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundImage: 'url(/images/home/trading_potential/real_time_market_coverage_bg.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize:"cover",
            borderRadius:"24px"
        }}>
            <Box sx={{
                display: 'flex',
                gap: "24px",
                flexDirection: "column",
                alignItems: "flex-start",
                maxWidth: '630px',
                width: { xl: "100%", md: '40%' },
                marginLeft:{md:"80px"},
                padding:"24px"
            }}>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "white"
                }}>
                    Real Time Market Coverage
                </Typography>
                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "white",
                    lineHeight:"1.5"
                }}>
                    Stay ahead of the curve with our Real-Time Market Coverage. Get instant updates on price fluctuations, breaking news, and critical market events as they happen
                </Typography>
                <Button sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    borderRadius: "25px",
                    width: "158px",
                    height: "39px"
                }}>
                    <span>Get Started</span> <ArrowRightBlack width={20} height={20} />
                </Button>
            </Box>
        </Box>
    )
}

export default RealTimeMarketCoverage