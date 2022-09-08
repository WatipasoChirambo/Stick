import "../styles/globals.css";
import React,{useState} from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/utils/theme/theme";

export const AppContext = React.createContext();


function MyApp({ Component, pageProps }) {
  const [route, setRoute] = useState('Home')

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{route,setRoute}}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
