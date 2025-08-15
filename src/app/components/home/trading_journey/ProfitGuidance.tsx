import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { ArrowRight } from '../../../../../public/icons/arrowRight'
import Image from 'next/image'
import ProfitGraphLine from '../../../../../public/images/home/trading_journey/profit_graph_line.svg'


type Props = {}

const ProfitGuidance = (props: Props) => {
    return (
        <Box sx={{
            width:'100%',
            height:'100%',
            bgcolor:"white",
            boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
            padding: "20px 20px 0",
            borderRadius:'24px',
            boxSizing:'border-box',
            overflow:'hidden'
        }}>
            <Box sx={{
                display:"flex",
                flexDirection:'column',
                gap:"16px"
            }}>
                <Typography sx={{
                    fontSize:"20px",
                    fontWeight:'700',
                    lineHeight:"1.2",
                    
                }}>
                    Take Profit Guidance
                </Typography>
                <Typography>
                    Maximize your earnings with expert take profit strategies. We help identify the perfect moments to cash in on your trades.
                </Typography>
                <Button sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    padding: '10px 20px',
                    borderRadius: "25px",
                    color:'white',
                    background: 'linear-gradient(45deg, #F7841A 0%, #F74848 100%)',
                    height:'34px',
                    width:'140px'
                }}>
                    <span style={{marginRight:"px"}}>Get Started</span> <ArrowRight fill="white" width={16} height={16} />
                </Button>
            </Box>
            <Box sx={{
                width:'100%'
            }}>
                <Image src={ProfitGraphLine} width={500} height={160} alt='profit guidance ' style={{
                    width:'100%',
                    objectFit:'cover'
                }} />
            </Box>
        </Box>
    )
}

export default ProfitGuidance