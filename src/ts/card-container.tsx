import React, { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import GitHub from '@material-ui/icons/GitHub'

import { IconCard } from './icon-card'
import { iconList } from './icon-list'

const prefersDarkMode = (): boolean => {
  let darkMode = false
  try {
    darkMode = window.matchMedia('(prefers-color-scheme: dark').matches
  } catch {
    try {
      darkMode = useMediaQuery('(prefers-color-scheme: dark)')
    } catch (error) {
      console.log(`Failed to get color-scheme: ${error}`)
    }
  }
  return darkMode
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})
const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

export const IconCards = (): React.ReactElement<typeof ThemeProvider> => {
  const [useDarkmode, setUseDarkmMode] = useState(prefersDarkMode())
  const cards = []

  for (const devIcon of iconList) {
    cards.push(
      <div className="icon-card" key={devIcon.icon}>
        <IconCard devIcon={devIcon} />
      </div>
    )
  }
  return (
    <ThemeProvider theme={useDarkmode ? darkTheme : lightTheme}>
      <Typography color="textPrimary" variant="h3" align="center">
        <a
          className="gh-link"
          rel="noreferrer"
          href={`https://github.com/${process.env.GH_HANDEL}/dev-emoji-page`}
          target="_blank"
        >
          <GitHub fontSize="large" />
        </a>
        &nbsp;Dev icons&nbsp;
        <IconButton
          onClick={() => {
            setUseDarkmMode(!useDarkmode)
          }}
        >
          {useDarkmode ? (
            <Brightness7Icon fontSize="large" />
          ) : (
            <Brightness3Icon fontSize="large" />
          )}
        </IconButton>
      </Typography>
      <br />
      <div className="wrapper">
        <div className="card-container">{cards}</div>
      </div>
    </ThemeProvider>
  )
}
