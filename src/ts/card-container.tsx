import React from 'react'

import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import GitHub from '@material-ui/icons/GitHub'

import { IconCard } from './icon-card'
import { iconList } from './icon-list'

const getTheme = (): Theme => {
  let prefersDarkMode = false
  try {
    prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches
  } catch {
    try {
      prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    } catch (error) {
      console.log(`Failed to get color-scheme: ${error}`)
    }
  }

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
    },
  })
  return theme
}

export function IconCards(): React.ReactElement<typeof ThemeProvider> {
  const cards = []

  for (const devIcon of iconList) {
    cards.push(
      <div className="icon-card" key={devIcon.icon}>
        <IconCard devIcon={devIcon} />
      </div>
    )
  }
  return (
    <ThemeProvider theme={getTheme()}>
      <Typography color="textPrimary" variant="h3" align="center">
        <a
          className="gh-link"
          rel="noreferrer"
          href={`https://github.com/${process.env.GH_HANDEL}/dev-emoji-page`}
          target="_blank"
        >
          <GitHub fontSize="large" />
        </a>
        &nbsp;Dev icons
      </Typography>
      <br />
      <div className="wrapper">
        <div className="card-container">{cards}</div>
      </div>
    </ThemeProvider>
  )
}
