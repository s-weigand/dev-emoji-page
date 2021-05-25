import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { IDevIcon } from './icon-list'

const cardSize = 6

const useStyles = makeStyles({
  root: {
    minWidth: `${cardSize}rem`,
    minHeight: `${cardSize}rem`,
  },
  title: {
    fontSize: '0.9rem',
  },
  icon: {
    fontSize: '1.7rem',
  },
})

export interface IIconCardProps {
  devIcon: IDevIcon
}

export function IconCard({ devIcon }: IIconCardProps): JSX.Element {
  const classes = useStyles()
  const { icon, usage } = devIcon

  const copyIcon = () => {
    navigator.clipboard.writeText(icon).catch((err) => {
      console.error('Error copying the emoji: ${err}')
    })
  }

  return (
    <Tooltip title="Click to copy to clipboard.">
      <Card className={classes.root} variant="outlined" onClick={copyIcon}>
        <CardActionArea className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {usage}
            </Typography>
            <Typography className={classes.icon} align="center">
              {icon}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  )
}
