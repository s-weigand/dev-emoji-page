import React, { useCallback, useMemo, useState } from 'react';

import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHub from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { IconCard } from './icon-card';
import { iconList } from './icon-list';

const preferredMode = (): 'light' | 'dark' => {
  let useDarkMode = false;
  try {
    useDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;
  } catch {
    try {
      useDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    } catch (error) {
      console.log(`Failed to get color-scheme: ${error}`);
    }
  }
  return useDarkMode ? 'dark' : 'light';
};

export const IconCards = (): React.ReactElement<typeof ThemeProvider> => {
  const [mode, setMode] = useState<'light' | 'dark'>(preferredMode());

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            paddingTop: '0.5rem',
            minHeight: 'calc(100vh - 0.5rem)',
          }}
        >
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
            <IconButton onClick={toggleColorMode} size="large">
              {mode === 'dark' ? (
                <Brightness7Icon fontSize="large" />
              ) : (
                <Brightness3Icon fontSize="large" />
              )}
            </IconButton>
          </Typography>
          <br />
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
        </Paper>
      </ThemeProvider>
    </React.StrictMode>
  );
};
