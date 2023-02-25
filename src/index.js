import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { theme } from './constants/theme';
import { App } from './components/App';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
