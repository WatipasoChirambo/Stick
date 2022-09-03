import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/utils/theme/theme";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
