import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"Inter"',
            '"Poppins"', 
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Poppins", sans-serif', 
            fontWeight: 600,
        },
        h3: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 500,
        },
        h4: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
        },
        body1: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        body2: {
            fontFamily: '"Inter", sans-serif', 
            fontWeight: 400,
            lineHeight: 1.5,
        },
        button: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            textTransform: 'none' as const,
        },
    },
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#2563eb', // Azul moderno
            light: '#60a5fa', // Azul claro para hover
            dark: '#1d4ed8', // Azul escuro
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;