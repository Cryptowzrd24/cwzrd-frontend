import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AccordionQuestion from './accordionQuestion';

const FrequentlyAskedQuestion = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: '56px',
          fontWeight: '600',
          lineHeight: '61.6px',
          marginBottom: '72px',
          textAlign: 'center',
          letterSpacing: '-1px',
        }}
      >
        Frequently Asked
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '12px',
            letterSpacing: '-1px',
          }}
        >
          Questions
        </span>{' '}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <AccordionQuestion
              title="What is Cryptowzrd?"
              summary="Cryptowzrd is a comprehensive platform designed to empower traders in the world of cryptocurrency. We offer a range of educational resources, tools, and support to help traders of all levels succeed in the market."
            />
            <AccordionQuestion
              title="How does Cryptowzrd work?"
              summary="Cryptowzrd works by providing traders with the tools and resources they need to succeed. This includes market analysis, trading strategies, and educational materials."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AccordionQuestion
              title="Who can use Cryptowzrd?"
              summary="Cryptowzrd is designed for traders of all levels, from beginners to advanced traders. Our platform offers a range of resources to help you succeed in the cryptocurrency market."
            />
            <AccordionQuestion
              title="Why choose Cryptowzrd?"
              summary="Choose Cryptowzrd for its comprehensive resources, user-friendly platform, and dedicated support team. We are committed to helping you succeed in the world of cryptocurrency trading."
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FrequentlyAskedQuestion;
