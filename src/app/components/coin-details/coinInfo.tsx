'use client';
import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CoinInfo = ({ coinDetails }: any) => {
  const [expanded, setExpanded] = useState<string | false>('panel0'); // First panel open by default

  const processParagraph = (text: any) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const bracketsPattern = /[\[\]\(\)]/g;
    let processedText = text.replace(urlPattern, '');
    processedText = processedText.replace(bracketsPattern, '');
    return processedText.trim();
  };

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
        padding: '32px',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 1)',
        marginBottom: '24px',
      }}
    >
      <Stack sx={{ width: '100%' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(17, 17, 17, 1)',
            letterSpacing: '2px',
            ml: '4px',
            mb: '4px',
          }}
        >
          INFO
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: '40px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',
            mb: '24px',
          }}
        >
          About{' '}
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {coinDetails?.name}
          </span>
        </Typography>

        {coinDetails?.about_coin?.data?.map((item: any, index: any) => (
          <Accordion
            id={'coininfo'}
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
            sx={{
              boxShadow: 'none',
              '&:before': {
                display: 'none',
              },
              '& .MuiAccordion-root': {
                boxShadow: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                },
                '& .MuiAccordionSummary-root': {
                  borderBottom: 'none',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                  lineHeight: '23.4px',
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: '8px 0',
              }}
            >
              {item.paragraph.map((paragraph: any, idx: any) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    fontSize: '13px',
                    fontWeight: '400',
                    color: 'rgba(17, 17, 17, 0.8)',
                    mb: '8px',
                    lineHeight: '18.85px',
                  }}
                >
                  {processParagraph(paragraph)}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Box>
  );
};

export default CoinInfo;
