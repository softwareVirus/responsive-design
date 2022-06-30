import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography:{
    body2:{
      fontFamily:[
        "Montserrat",
        'sans-serif'
      ].join(","),
      fontSize:'14px',
      color:'hsl(228, 12%, 48%)',
      lineHeight:'1.8'
    },
    h4:{
      fontFamily:[
        "Fraunces",
        'sans-serif'
      ].join(","),
      fontSize:'30px',
      fontWeight:'700',
      lineHeight:'1'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width:'100%',
          backgroundColor:'hsl(158, 36%, 37%)',
          boxShadow:'none',
          ':hover': {
            backgroundColor:'hsl(212, 21%, 14%)',
            boxShadow:'none'
          }
        }
      }
    }
  },
})

theme.palette.price = 'hsl(158, 36%, 37%)'
theme.palette.primary.text = 'hsl(158, 36%, 37%)'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
