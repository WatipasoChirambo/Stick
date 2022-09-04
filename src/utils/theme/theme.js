import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        contained:{
          backgroundColor:"#0C389F!important" 
        }
      }
    }
  },
  typography: {
    palette: {
      primary: { main: "#0C389F" },
      secondary: { main: "#DD1659" },
      error: { main: "#E13232" },
      warning: { main: "#FFB100" },
      info: { main: "#8BC34A" },
      newColor: {
        main: "#DC52F0",
        contrastText: "#ADF528"
      }
    },
    h4:{
      fontSize: '4rem',
      fontWeight:800,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        color:'#35383D',
      },
    },
    h6:{
      fontSize: '2rem',
      fontWeight:600,
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
        color:'#35383D',
      },
    },
    h5:{
      fontSize: '1.5rem',
      fontWeight:700,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 800,
      '@media (max-width:600px)': {
        fontSize: '2.3rem',
      },
    },
    subtitle1: {
      fontSize: 16,
      fontWeight:600,
      color:'#35383D',
      '@media (max-width:600)':{
        fontSize:14
      }
    },
    body2: {
      fontWeight: 400,
      color:'#35383D',
    },
    button: {
      fontStyle: "italic",
    },
    caption: {
      fontSize: 12,
      '@media (max-width)':{
        fontSize:12,
      }
    },
  },
});
