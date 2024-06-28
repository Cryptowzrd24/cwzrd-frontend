import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './styles';

interface AccordianProps {
  name: string;
  Component: React.JSX.Element;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const Accordian = ({
  name,
  Component,
  expanded,
  onChange,
}: AccordianProps) => {
  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={onChange}
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
          <p>{name}</p>
          <p>Range</p>
        </AccordionSummary>
        <AccordionDetails>{Component}</AccordionDetails>
      </Accordion>
    </div>
  );
};
