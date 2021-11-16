import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#f89605',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
export const MuiTheme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
