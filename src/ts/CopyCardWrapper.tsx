import React from 'react';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { SxProps } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

export function CopyCardWrapper(props: {
  children: React.ReactElement[];
  copyText: string;
  cardSx?: SxProps;
}): React.ReactElement<typeof Tooltip> {
  const copyIcon = () => {
    navigator.clipboard.writeText(props.copyText).catch((err) => {
      console.error('Error copying the text: ${err}');
    });
  };

  return (
    <Tooltip title="Click to copy to clipboard.">
      <Card sx={props.cardSx} variant="outlined" onClick={copyIcon}>
        <CardActionArea sx={props.cardSx}>
          <CardContent>{props.children}</CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
