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
      color:'#35383D'
    },
    h2: {
      fontSize: '4rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
        color:'',
      },
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
    caption: {
      fontSize: 12,
    },
  },
});
