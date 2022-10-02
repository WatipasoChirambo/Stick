import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        contained:{
          backgroundColor:"#0C389F!important",
          paddingLeft:25,
          paddingRight:25,
          paddingBottom:5,
          paddingTop:5,
        }
      }
    },
  },
  typography: {
    fontFamily:'Roboto',
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
      fontFamily:'Heebo',
      fontSize: '2.3rem',
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
        fontSize: '1.5rem',
      },
    },
    h5:{
      fontSize: '1.5rem',
      fontWeight:700,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h1: {
      fontSize: '5rem',
      fontWeight: 800,
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 800,
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    subtitle1: {
      fontSize: 18,
      fontWeight:600,
      color:'#35383D',
      '@media (max-width:600)':{
        fontSize:16
      }
    },
    subtitle2: {
      fontSize: 16,
      fontWeight:600,
      '@media (max-width:600)':{
        fontSize:16,
        color:'silver'
      }
    },
    body1: {
      fontWeight: 500,
      fontSize:'1rem',
      lineHeight:'1rem',
      color:'silver'
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
