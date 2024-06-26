import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './styles';

interface AccordianProps {
  name: string;
  Component: React.JSX.Element;
}

export const Accordian = ({ name, Component }: AccordianProps) => {
  return (
    <div>
      <Accordion
        sx={{
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          sx={styles.accordianSummaryHeader}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>{Component}</AccordionDetails>
      </Accordion>
    </div>
  );
};
