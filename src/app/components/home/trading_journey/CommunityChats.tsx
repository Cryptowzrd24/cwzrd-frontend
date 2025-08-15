import { Box, Typography } from '@mui/material'
import React from 'react'
import ChatsIMG from '../../../../../public/images/home/trading_journey/chats_img.svg'
import Image from 'next/image'

type Props = {}

const CommunityChats = (props: Props) => {
    return (
        <Box sx={{
            bgcolor: "white",
            borderRadius: "24px",
            padding: '40px 10px',
            display: 'flex',
            flexDirection: "column",
            boxSizing: 'border-box',
            overflow: 'hidden',
            alignItems: 'center'
        }}>
            <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                Open Community Chats
            </Typography>
            <Box>
                <Image src={ChatsIMG} width={400} height={250} alt="chats image" style={{ margin: "0 auto" }} />
            </Box>
            <Typography sx={{
                fontSize: "14px",
                fontWeight: "400",
                textAlign: 'center',
                lineHeight: "1.5",
                width: "75%"
            }}>
                Engage in open conversations with fellow traders. Our community chats foster collaboration, idea sharing, and collective growth.
            </Typography>
        </Box>
    )
}

export default CommunityChats