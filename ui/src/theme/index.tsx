import { createTheme } from '@mui/material/styles';
import shadows, { Shadows } from '@mui/material/styles/shadows';

const theme = createTheme({
  palette: {
    primary: {
      main: '#345FFF',
    },
    secondary: {
      main: '#008025',
    },
    text: {
      primary: '#121212',
      secondary: '#6E698B',
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h4: {
      fontWeight: 700,
      color: '#272727',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: shadows.map(() => 'none') as Shadows,
});

export default theme;
