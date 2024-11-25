import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface AccordionData {
  title: string;
  summary: string;
}

export default function FAQQuestion({ title, summary }: AccordionData) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ width: '100%' }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          padding: '16px',
          background: 'transparent',
          boxShadow: 'none',
          borderRadius: '0',
          border: 'none',
          height: 'auto',
        }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <CloseIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
            ) : (
              <AddIcon sx={{ color: 'rgba(255, 255, 255, 1)' }} />
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
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '22px',
              fontFamily: 'Sf Pro Display',
              '@media (max-width:660px)': {
                fontSize: '20px',
              },
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: '12px 0 0 0',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '21px',
              fontFamily: 'Sf Pro Text',
              '@media (max-width:660px)': {
                fontSize: '14px',
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
