'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface accordionData {
  title: string;
  summary: string;
  isExpanded?: boolean;
}
export default function AccordionQuestion({
  title,
  summary,
  isExpanded,
}: accordionData) {
  const [expanded, setExpanded] = React.useState(isExpanded ? true : false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ marginBottom: '8px', maxWidth: '100%' }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          padding: '17px 20px 17px 20px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          maxWidth: '437px',
          height: 'auto',
          '&:last-of-type': {
            borderRadius: '16px',
          },

          '@media (max-width: 976px)': { maxWidth: '100%' },
        }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveIcon sx={{ color: '#111111' }} />
            ) : (
              <AddIcon sx={{ color: '#111111' }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundColor: 'transparent',
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: 'pointer',
            userSelect: 'none',
            minHeight: '24px',
            transition:
              'min-height 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            '& .MuiAccordionSummary-content': {
              margin: '0 !important',
            },
            '&.Mui-expanded': {
              minHeight: '24px',
              '& > .MuiAccordionSummary-content': {
                margin: '0',
              },
            },
            '&.MuiSvgIcon-root': {
              color: '#111111',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
              lineHeight: '20.4px',
              fontFamily: 'Sf Pro Display',
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />
        <AccordionDetails
          sx={{
            padding: '12px 0 0 0',
          }}
        >
          <Typography
            sx={{
              fontSize: '13px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 0.8)',
              lineHeight: '18.85px',
              fontFamily: 'Sf Pro Display',
              '@media (max-width: 576px)': {
                fontSize: '14px !important',
                lineHeight: '150%',
                letterSpacing: '0.24px',
              },
            }}
          >
            {summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
