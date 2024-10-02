import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItemText,
  ListItemButton,
} from '@mui/material';

interface Section {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  activeSection,
}) => {
  const handleTOCClick =
    (id: string) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();

      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        window.history.pushState(null, '', `#${id}`);
      }
    };

  return (
    <Box
      width={250}
      p={2}
      paddingLeft={3}
      borderLeft={1}
      borderColor="grey.300"
    >
      <Typography
        sx={{
          fontWeight: '600',
          lineHeight: '0.75rem',
          fontSize: '0.75rem',
          color: 'grey',
        }}
        gutterBottom
      >
        TABLE OF CONTENTS
      </Typography>
      <List>
        {sections?.map((section) => (
          <ListItemButton
            key={section.id}
            onClick={handleTOCClick(section.id)}
            style={{
              borderLeft:
                activeSection === section.id ? '3px solid #7248F7' : 'none',
              transition: 'border-left 0.3s ease',
            }}
          >
            <ListItemText
              primary={section.label}
              primaryTypographyProps={{
                style: {
                  lineHeight: '1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: activeSection === section.id ? '500' : '400',
                  color: activeSection === section.id ? 'black' : 'gray',
                  transition: 'color 0.3s ease, font-weight 0.3s ease',
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default TableOfContents;
