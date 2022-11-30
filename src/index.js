import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
    
);

