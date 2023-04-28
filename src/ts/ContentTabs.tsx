import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function TabPanel(props: {
  children?: React.ReactElement;
  index: number;
  value: number;
}) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ paddingTop: '1rem' }}
    >
      {value === index && children}
    </div>
  );
}

function LinkTab(props: { index: number; label?: string; href?: string }) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      sx={{ fontSize: '1.5rem' }}
      id={`simple-tab-${props.index}`}
      aria-controls={`simple-tabpanel-${props.index}`}
      {...props}
    />
  );
}

interface ContentTabProps {
  label: string;
  content: React.ReactElement;
}

export function ContentTabs(props: {
  elements: ContentTabProps[];
}): React.ReactElement {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="nav tabs"
        >
          {props.elements.map((value, index) => (
            <LinkTab label={value.label} index={index} key={index} />
          ))}
        </Tabs>
      </Box>
      {props.elements.map((value, index) => (
        <TabPanel value={tabIndex} index={index} key={index}>
          {value.content}
        </TabPanel>
      ))}
    </>
  );
}
