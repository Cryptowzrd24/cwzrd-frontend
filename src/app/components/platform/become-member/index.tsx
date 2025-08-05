import { Box, Typography } from '@mui/material'
import React from 'react'
import { ArrowRight } from '../../../../../public/icons/arrowRight'

type Props = {}

const BecomeMember = (props: Props) => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                padding: '10px 16px 10px 20px',
                borderRadius: '56px',
                marginTop: '32px',
                marginBottom:'41px',
                width:'max-content',
                marginInline:'auto'
            }}
        >
            < Typography
                variant="body1"
                sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    lineHeight: '18.82px',
                }}
            >
                Become a member
                <ArrowRight fill={'rgba(255, 255, 255, 1)'} />
            </Typography>
        </Box>
    )
}

export default BecomeMember;