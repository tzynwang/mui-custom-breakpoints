import React, { memo } from 'react';
import MainAppView from './MainAppView';
import { ThemeProvider, theme } from './theme';

function App(): React.ReactElement {
  /* Main */
  return (
    <ThemeProvider theme={theme}>
      <MainAppView />
    </ThemeProvider>
  );
}

export default memo(App);
