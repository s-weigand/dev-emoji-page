import React from 'react';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { IDevIcon } from './iconList';
import { iconList } from './iconList';

const cardSize = 7;

const cardSx = {
  minWidth: `${cardSize}rem`,
  minHeight: `${cardSize}rem`,
  backgroundColor: 'inherit',
};
export interface IIconCardProps {
  devIcon: IDevIcon;
}

function IconCard({
  devIcon,
}: IIconCardProps): React.ReactElement<typeof Tooltip> {
  const { icon, usage } = devIcon;

  const copyIcon = () => {
    navigator.clipboard.writeText(icon).catch((err) => {
      console.error('Error copying the emoji: ${err}');
    });
  };

  return (
    <Tooltip title="Click to copy to clipboard.">
      <Card sx={cardSx} variant="outlined" onClick={copyIcon}>
        <CardActionArea sx={cardSx}>
          <CardContent>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}

export function IconCards() {
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
