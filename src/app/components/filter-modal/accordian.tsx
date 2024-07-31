import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './styles';
import { useSelector } from 'react-redux';

interface AccordianProps {
  name: string;
  Component: React.JSX.Element;
  expanded: boolean;
  onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  accordianName: string;
}

export const Accordian = ({
  name,
  Component,
  expanded,
  onChange,
  accordianName,
}: AccordianProps) => {
  const filterItems = useSelector((state: any) => state.filters.filters);
  const getDisplayValue = (key: any) => {
    const value = filterItems[key];
    if (
      value &&
      typeof value === 'object' &&
      'min' in value &&
      'max' in value
    ) {
      if (value.min === null && value.max !== null) {
        return `min - $${value.max}`;
      } else if (value.min !== null && value.max === null) {
        return `$${value.min} - max`;
      } else if (value.min !== null || value.max !== null) {
        return `$${value.min !== null ? value.min : ''} - $${value.max !== null ? value.max : ''}`;
      } else {
        return null;
      }
    }
    return value !== null && value !== false ? value.toString() : null;
  };

  const displayValue = getDisplayValue(accordianName);

  const renderCorrectDisplayName = (name: any) => {
    if (name === 'coins') {
      return 'Coins Only';
    } else if (name === 'allCryptoCurrencies') {
      return 'All Cryptocurrencies';
    } else if (name === 'tokens') {
      return 'Tokens Only';
    } else {
      return name;
    }
  };
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
          {displayValue && (
            <p style={{ color: '#7248F7' }}>
              {renderCorrectDisplayName(displayValue)}
            </p>
          )}
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '8px 0 16px' }}>
          {Component}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
