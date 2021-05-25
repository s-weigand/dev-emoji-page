import React from 'react'

import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Github from '@material-ui/icons/Github'

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

export function IconCards(): JSX.Element {
  const cards = []

  for (const devIcon of iconList) {
    cards.push(
      <div className="icon-card" key={devIcon.icon}>
        <IconCard devIcon={devIcon} />
      </div>
    )
  }
  console.log(cards)
  return (
    <ThemeProvider theme={getTheme()}>
      <a className="gh-link" href="http://localhost:1234/" target="_blank">
        <Typography color="textPrimary" variant="h3" align="center">
          <Github fontSize="large" /> Dev icons
        </Typography>
      </a>
      <br />
      <div className="wrapper">
        <div className="card-container">{cards}</div>
      </div>
    </ThemeProvider>
  )
}
