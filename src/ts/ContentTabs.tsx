import type React from "react";
import { useEffect, useState } from "react";

import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

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
      style={{ paddingTop: "1rem" }}
    >
      {value === index && children}
    </div>
  );
}

function LinkTab(props: { index: number; label?: string; href?: string }) {
  return (
    <Tooltip title={`Press '${props.index + 1}' to switch to this tab`}>
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        sx={{ fontSize: "1.5rem" }}
        id={`simple-tab-${props.index}`}
        aria-controls={`simple-tabpanel-${props.index}`}
        {...props}
      />
    </Tooltip>
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
  // biome-ignore lint/correctness/useExhaustiveDependencies: This should only run on first render
  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      const value = Number(event.key);
      if (value <= props.elements.length) {
        setTabIndex(value - 1);
      }
    });
  }, []);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" aria-label="nav tabs">
          {props.elements.map((value, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: props.elements won't change at runtime
            <LinkTab label={value.label} index={index} key={index} />
          ))}
        </Tabs>
      </Box>
      {props.elements.map((value, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: props.elements won't change at runtime
        <TabPanel value={tabIndex} index={index} key={index}>
          {value.content}
        </TabPanel>
      ))}
    </>
  );
}
