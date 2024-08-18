import type React from "react";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHub from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export function Header(props: {
  mode: "light" | "dark";
  modeToggleCallback: () => void;
}): React.ReactElement {
  return (
    <Typography color="textPrimary" variant="h3" align="center" component="header">
      <a
        className="gh-link"
        rel="noreferrer"
        href={`https://github.com/${process.env.GH_HANDEL}/dev-emoji-page`}
        target="_blank"
      >
        <GitHub fontSize="large" />
      </a>
      &nbsp;Dev emojis&nbsp;
      <IconButton onClick={props.modeToggleCallback} size="large">
        {props.mode === "dark" ? (
          <Brightness7Icon fontSize="large" />
        ) : (
          <Brightness3Icon fontSize="large" />
        )}
      </IconButton>
    </Typography>
  );
}
