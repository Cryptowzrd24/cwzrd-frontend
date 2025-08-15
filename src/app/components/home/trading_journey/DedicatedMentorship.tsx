import { Box, Typography } from '@mui/material'
import React from 'react'
import DedeicatedProfessioanlMentorship from "../../../../../public/images/home/trading_journey/dedeicated_professioanl_mentorship.svg"
import Image from 'next/image'

type Props = {}

const DedicatedMentorship = (props: Props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            height: {xs:"300px",sm:"350px",md:'413px'},
            backgroundColor: "white",
            boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
            gap: '36px',
            borderRadius: "24px",
        }}>
            <Image src={DedeicatedProfessioanlMentorship} width={100} height={244} alt='dedicated_professional_mentorship' style={{
                width: '100%',
                objectFit:"contain"
            }} />
            <Box sx={{
                textAlign: 'center',
                maxWidth: "750px",
                margin: "0 auto",
                display: 'flex',
                justifyContent: "space-between",
                flexDirection: 'column',
                gap: {xs:"6px",md:'12px'},
                padding:{xs:"14px",lg:"10px"}
            }}>
                <Typography sx={{
                    fontSize: '28px',
                    fontWeight: "700",
                }}>
                    Dedicated Professional Mentorship
                </Typography>
                <Typography sx={{
                    fontSize: {xs:'12px'},
                    fontWeight: "400",
                }}>
                    We are fully committed to your success in every aspect of your journey. Through our daily life coaching sessions and uplifting write-ups, we provide unwavering support, ensuring that you never face any challenge alone.
                </Typography>
            </Box>
        </Box>
    )
}

export default DedicatedMentorship