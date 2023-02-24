import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#30475E"
    },
    secondary: {
      main: '#F05454'
    },
    background: {
      default: "#30475E",
      paper: "#30475E"
    },
    text: {
      primary: "#DDDDDD",
      secondary: "#DDDDDD"
    },
    info: {
      main: "#2C74B3"
    },
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
