import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import communityChart from "../../../../../public/images/home/join-community/community_chart.png"
import Image from 'next/image';
import { ArrowRight } from '../../../../../public/icons/arrowRight';

const CommunityHero = () => {
    return (
        <Box
            sx={{
                background: '#14003B',
                padding: { xs: '60px 0 0', sm: '70px 0 0', md: '80px 0 0' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.2,
                    background: '#14003B',
                    zIndex: 1,
                },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: { xs: '24px', sm: '32px', md: '40px' },
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    {/* Main Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '28px', sm: '32px', md: '40px', lg: '48px', xl: '56px' },
                            fontWeight: 500,
                            lineHeight: 1.2,
                            color: 'white',
                            maxWidth: { xs: '100%', sm: '600px', md: '700px', lg: '800px' },
                            margin: '0 auto',
                        }}
                    >
                        Join the Cryptowzrd Community Today!
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '14px', sm: '16px', md: '16px' },
                            lineHeight: "24px",
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: { xs: '100%', sm: '500px', md: '600px' },
                            margin: '0 auto',
                        }}
                    >
                        Unlock the door to trading success and become a part of the Cryptowzrd community!
                        Gain access to our comprehensive educational resources, powerful trading tools, and supportive community.
                    </Typography>

                    {/* Call to Action Button */}
                    <Button
                        variant="contained"
                        sx={{
                            background: 'white',
                            color: '#2D1B69',
                            padding: { xs: '12px 24px', sm: '14px 28px', md: '16px 32px' },
                            fontSize: { xs: '16px', md: '18px' },
                            fontWeight: 500,
                            borderRadius: '25px',
                            textTransform: 'none',
                            boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.2)',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.95)',
                                boxShadow: '0px 12px 32px rgba(255, 255, 255, 0.3)',
                            },
                        }}
                    >
                        Get Started  <ArrowRight fill="gray" />
                    </Button>

                    {/* Trading Dashboard Mockup */}
                    <Box
                        sx={{
                            marginTop: { xs: '24px', sm: '32px', md: '40px' },
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            maxWidth: { xs: '100%', sm: '500px', md: '600px', lg: '700px' },
                        }}
                    >
                        <Image
                            src={communityChart}
                            alt="image"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CommunityHero;
