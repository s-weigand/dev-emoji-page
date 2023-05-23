import React, { useCallback, useMemo, useState } from 'react';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ContentTabs } from './ContentTabs';
import { Header } from './Header';
import { IconCards } from './IconCards';
import { SnippetCards } from './SnippetCards';

const preferredMode = (): 'light' | 'dark' => {
  const savedTheme = localStorage.getItem('devEmojiTheme') as
    | 'light'
    | 'dark'
    | null;
  if (['light', 'dark'].includes(savedTheme) === true) {
    return savedTheme;
  }
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

export const App = (): React.ReactElement<typeof ThemeProvider> => {
  const [mode, setMode] = useState<'light' | 'dark'>(preferredMode());

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('devEmojiTheme', newMode);
      return newMode;
    });
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
          <Header mode={mode} modeToggleCallback={toggleColorMode} />
          <br />
          <ContentTabs
            elements={[
              { label: '😄 Emojis', content: <IconCards /> },
              {
                label: '✂️ Snippets',
                content: <SnippetCards />,
              },
            ]}
          />
        </Paper>
      </ThemeProvider>
    </React.StrictMode>
  );
};
