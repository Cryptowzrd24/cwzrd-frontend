import { Box, Typography } from '@mui/material';
import React from 'react';
import AccordionQuestion from './accordionQuestion';

const FrequentlyAskedQuestion = () => {
  return (
    <Box
      sx={{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'24px'
      }}
      >
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '38.4px',
          marginBottom: '24px',
          textAlign: 'center',
          letterSpacing: '1px',
          fontFamily: 'Sf Pro Display',
          margin:0,

          '@media (max-width: 576px)': {
            fontSize: '24px !important',
            lineHeight: '1.2',
            letterSpacing: '0.24px',
          },
        }}
      >
        Frequently Asked
        <Typography
          component={'span'}
          sx={{
            fontSize: 'inherit !important',
            fontWeight: 'inherit',
            lineHeight: 'inherit',
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '12px',
            letterSpacing: '-1px',
            '@media (max-width: 576px)': {
              marginLeft: '6px',
            },
          }}
        >
          Questions
        </Typography>{' '}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ maxWidth: '477px', '@media(max-width: 987px)': { maxWidth: '100%',width:'100%' } }}>
          <AccordionQuestion
            title="What is Cryptowzrd?"
            summary="Cryptowzrd is a comprehensive platform designed to empower traders in the world of cryptocurrency. We offer a range of educational resources, tools, and support to help traders of all levels succeed in the market."
          />
          <AccordionQuestion
            title="How does Cryptowzrd work?"
            summary="Cryptowzrd works by providing traders with the tools and resources they need to succeed. This includes market analysis, trading strategies, and educational materials."
          />
          <AccordionQuestion
            title="Why choose Cryptowzrd?"
            summary="Choose Cryptowzrd for its comprehensive resources, user-friendly platform, and dedicated support team. We are committed to helping you succeed in the world of cryptocurrency trading."
          />{' '}
          <AccordionQuestion
            title="Why choose Cryptowzrd?"
            summary="Choose Cryptowzrd for its comprehensive resources, user-friendly platform, and dedicated support team. We are committed to helping you succeed in the world of cryptocurrency trading."
          />
        </Box>
        <Box
          sx={{
            maxWidth: '477px',
            '@media(max-width: 987px)': {
              display: 'none',
            },
          }}
        >
          <AccordionQuestion
            title="Who can use Cryptowzrd?"
            summary="Cryptowzrd is designed for traders of all levels, from beginners to advanced traders. Our platform offers a range of resources to help you succeed in the cryptocurrency market."
          />
          <AccordionQuestion
            title="Why choose Cryptowzrd?"
            summary="Choose Cryptowzrd for its comprehensive resources, user-friendly platform, and dedicated support team. We are committed to helping you succeed in the world of cryptocurrency trading."
          />
          <AccordionQuestion
            title="How does Cryptowzrd work?"
            summary="Cryptowzrd works by providing traders with the tools and resources they need to succeed. This includes market analysis, trading strategies, and educational materials."
          />
          <AccordionQuestion
            title="How does Cryptowzrd work?"
            summary="Cryptowzrd works by providing traders with the tools and resources they need to succeed. This includes market analysis, trading strategies, and educational materials."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlyAskedQuestion;
