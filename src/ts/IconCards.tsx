import React from 'react';

import { SxProps } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { CopyCardWrapper } from './CopyCardWrapper';
import { DevIcon, iconList } from './iconList';

const cardSize = 7;

const cardSx: SxProps = {
  minWidth: `${cardSize}rem`,
  minHeight: `${cardSize}rem`,
  backgroundColor: 'inherit',
};

function IconCard(props: {
  devIcon: DevIcon;
}): React.ReactElement<typeof Tooltip> {
  const { icon, usage } = props.devIcon;

  return (
    <CopyCardWrapper copyText={icon} cardSx={cardSx}>
      <Typography
        sx={{ fontSize: '0.9rem', textAlign: 'center' }}
        color="textSecondary"
        gutterBottom
      >
        {usage}
      </Typography>
      <Typography sx={{ fontSize: '1.7rem' }} align="center">
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
            <div className="icon-card" key={devIcon.icon}>
              <IconCard devIcon={devIcon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
