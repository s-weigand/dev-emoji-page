import type React from "react";

import type Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/material/styles";

import { CopyCardWrapper } from "./CopyCardWrapper";
import { type DevIcon, iconList } from "./iconList";

const cardSize = 7.1;

const cardSx: SxProps = {
  minWidth: `${cardSize}rem`,
  minHeight: `${cardSize}rem`,
  backgroundColor: "inherit",
};

function IconCard(props: {
  devIcon: DevIcon;
}): React.ReactElement<typeof Tooltip> {
  const { icon, usage } = props.devIcon;

  return (
    <CopyCardWrapper copyText={icon} cardSx={cardSx}>
      <Typography
        sx={{ fontSize: "0.9rem", textAlign: "center" }}
        color="textSecondary"
        gutterBottom
      >
        {usage}
      </Typography>
      <Typography sx={{ fontSize: "1.7rem" }} align="center">
        {icon}
      </Typography>
    </CopyCardWrapper>
  );
}

export function IconCards(): React.ReactElement {
  return (
    <div className="wrapper">
      <div className="card-container">
        {iconList.map((devIcon) => {
          return (
            <div key={devIcon.icon}>
              <IconCard devIcon={devIcon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
