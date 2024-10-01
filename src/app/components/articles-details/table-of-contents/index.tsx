import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItemText,
  ListItemButton,
} from '@mui/material';

const TableOfContents = ({ sections, activeSection }: any) => {
  return (
    <Box
      width={240}
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
        {sections?.map((section: any) => (
          <ListItemButton
            key={section.id}
            component="a"
            style={{
              borderLeft:
                activeSection === section.id
                  ? '2px solid rgba(75,204,0,1)'
                  : 'none',
            }}
            href={`#${section.id}`}
          >
            <ListItemText
              primary={section.label}
              primaryTypographyProps={{
                style: {
                  lineHeight: '1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: activeSection === section.id ? '500' : '400',
                  color: activeSection === section.id ? 'black' : 'gray',
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
